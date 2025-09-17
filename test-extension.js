const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Test the extension by simulating the formatting process
async function testExtension() {
    console.log('Testing Leptos Formatter Extension...\n');
    
    // Read the test file
    const testFile = path.join(__dirname, 'test.rs');
    const originalContent = fs.readFileSync(testFile, 'utf8');
    
    console.log('Original content:');
    console.log(originalContent);
    console.log('\n' + '='.repeat(50) + '\n');
    
    // Test leptosfmt with stdin
    try {
        const { spawn } = require('child_process');
        
        const result = await new Promise((resolve, reject) => {
            const child = spawn('leptosfmt', ['--stdin'], {
                stdio: ['pipe', 'pipe', 'pipe']
            });
            
            let stdout = '';
            let stderr = '';
            
            child.stdout.on('data', (data) => {
                stdout += data.toString();
            });
            
            child.stderr.on('data', (data) => {
                stderr += data.toString();
            });
            
            child.on('close', (code) => {
                if (code === 0) {
                    if (stderr) {
                        console.log('leptosfmt stderr:', stderr);
                    }
                    resolve(stdout);
                } else {
                    reject(new Error(`leptosfmt exited with code ${code}: ${stderr}`));
                }
            });
            
            child.on('error', (error) => {
                reject(error);
            });
            
            // Send the content to leptosfmt
            child.stdin.write(originalContent);
            child.stdin.end();
        });
        
        console.log('Formatted content:');
        console.log(result);
        
        // Check if content changed
        if (result !== originalContent) {
            console.log('\n✅ SUCCESS: Content was formatted!');
        } else {
            console.log('\n⚠️  Content was not changed (may already be formatted)');
        }
        
    } catch (error) {
        console.error('❌ ERROR:', error.message);
    }
}

testExtension().catch(console.error);