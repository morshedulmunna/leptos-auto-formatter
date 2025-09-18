import * as vscode from 'vscode';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export function activate(context: vscode.ExtensionContext) {
    console.log('Leptos Formatter extension is now active!');

    // Register the formatter
    const formatter = new LeptosFormatter();
    const disposable = vscode.languages.registerDocumentFormattingEditProvider(
        'rust',
        formatter
    );

    context.subscriptions.push(disposable);

    // Register commands
    const formatCommand = vscode.commands.registerCommand('leptosFormatter.formatDocument', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'rust') {
            await formatter.formatDocument(editor.document);
        } else {
            vscode.window.showWarningMessage('Please open a Rust file to format.');
        }
    });

    const toggleFormatOnSaveCommand = vscode.commands.registerCommand('leptosFormatter.toggleFormatOnSave', async () => {
        const config = vscode.workspace.getConfiguration('leptosFormatter');
        const currentValue = config.get<boolean>('enableOnSave', true);
        await config.update('enableOnSave', !currentValue, vscode.ConfigurationTarget.Global);
        
        const message = !currentValue ? 'Leptos format on save enabled' : 'Leptos format on save disabled';
        vscode.window.showInformationMessage(message);
    });

    context.subscriptions.push(formatCommand, toggleFormatOnSaveCommand);

    // Register on save handler
    const onSaveHandler = vscode.workspace.onDidSaveTextDocument(async (document) => {
        if (document.languageId === 'rust') {
            const config = vscode.workspace.getConfiguration('leptosFormatter');
            const enableOnSave = config.get<boolean>('enableOnSave', true);
            
            if (enableOnSave) {
                await formatter.formatDocument(document);
            }
        }
    });

    context.subscriptions.push(onSaveHandler);
}

export function deactivate() {}

class LeptosFormatter implements vscode.DocumentFormattingEditProvider {
    async provideDocumentFormattingEdits(
        document: vscode.TextDocument,
        options: vscode.FormattingOptions,
        token: vscode.CancellationToken
    ): Promise<vscode.TextEdit[]> {
        try {
            const formattedContent = await this.formatWithLeptosfmt(document);
            
            if (formattedContent !== null) {
                const fullRange = new vscode.Range(
                    document.positionAt(0),
                    document.positionAt(document.getText().length)
                );
                
                return [vscode.TextEdit.replace(fullRange, formattedContent)];
            }
        } catch (error) {
            console.error('Error formatting with leptosfmt:', error);
        }
        
        return [];
    }

    async formatDocument(document: vscode.TextDocument): Promise<void> {
        try {
            const formattedContent = await this.formatWithLeptosfmt(document);
            
            if (formattedContent !== null) {
                const edit = new vscode.WorkspaceEdit();
                const fullRange = new vscode.Range(
                    document.positionAt(0),
                    document.positionAt(document.getText().length)
                );
                edit.replace(document.uri, fullRange, formattedContent);
                
                const success = await vscode.workspace.applyEdit(edit);
                if (success) {
                    await document.save();
                }
            }
        } catch (error) {
            console.error('Error formatting document:', error);
        }
    }

    private async formatWithLeptosfmt(document: vscode.TextDocument): Promise<string | null> {
        const config = vscode.workspace.getConfiguration('leptosFormatter');
        const leptosfmtPath = config.get<string>('leptosfmtPath', 'leptosfmt');
        
        try {
            // Check if leptosfmt is available
            await execAsync(`${leptosfmtPath} --version`);
        } catch (error) {
            this.showLeptosfmtNotInstalledError();
            return null;
        }

        try {
            // Use spawn with stdin option for leptosfmt
            const { spawn } = require('child_process');
            
            const result = await new Promise<string>((resolve, reject) => {
                const child = spawn(leptosfmtPath, ['--stdin'], {
                    stdio: ['pipe', 'pipe', 'pipe']
                });
                
                let stdout = '';
                let stderr = '';
                
                child.stdout.on('data', (data: Buffer) => {
                    stdout += data.toString();
                });
                
                child.stderr.on('data', (data: Buffer) => {
                    stderr += data.toString();
                });
                
                child.on('close', (code: number) => {
                    if (code === 0) {
                        if (stderr) {
                            console.warn('leptosfmt stderr:', stderr);
                        }
                        resolve(stdout);
                    } else {
                        reject(new Error(`leptosfmt exited with code ${code}: ${stderr}`));
                    }
                });
                
                child.on('error', (error: Error) => {
                    reject(error);
                });
                
                // Send the document content to leptosfmt
                child.stdin.write(document.getText());
                child.stdin.end();
                
                // Set timeout
                setTimeout(() => {
                    child.kill();
                    reject(new Error('leptosfmt timeout'));
                }, 10000);
            });
            
            return result;
        } catch (error) {
            console.error('Error running leptosfmt:', error);
            vscode.window.showErrorMessage(
                `Failed to format with leptosfmt: ${error instanceof Error ? error.message : 'Unknown error'}`
            );
            return null;
        }
    }

    private showLeptosfmtNotInstalledError(): void {
        const message = 'leptosfmt is not installed or not found in PATH. Please install it to use the Leptos Formatter.';
        const installAction = 'Install Instructions';
        
        vscode.window.showErrorMessage(message, installAction).then(selection => {
            if (selection === installAction) {
                vscode.env.openExternal(vscode.Uri.parse('https://github.com/leptos-rs/leptos/tree/main/leptosfmt'));
            }
        });
    }
}
