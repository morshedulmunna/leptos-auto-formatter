# Testing the Leptos Formatter VS Code Extension

This guide will help you test the Leptos Formatter extension to ensure it works correctly.

## Prerequisites

1. **Install leptosfmt** (if not already installed):
   ```bash
   cargo install leptosfmt
   ```

2. **Verify leptosfmt installation**:
   ```bash
   leptosfmt --version
   ```

## Testing Steps

### 1. Compile the Extension

```bash
cd /Users/morshedulmunna/exSoft/lapper
npm install
npm run compile
```

### 2. Test the Extension Logic

Run the test script to verify the formatting logic works:

```bash
node test-extension.js
```

Expected output:
- Shows original content
- Shows formatted content (should be different if formatting occurred)
- Shows "✅ SUCCESS: Content was formatted!" message

### 3. Test in VS Code

#### Option A: Run in Extension Development Host

1. Open VS Code in the extension directory:
   ```bash
   code /Users/morshedulmunna/exSoft/lapper
   ```

2. Press `F5` to launch a new Extension Development Host window

3. In the new window, open the `test.rs` file

4. Make some changes to the Leptos component (add extra spaces, break lines, etc.)

5. Save the file (`Ctrl+S` / `Cmd+S`)

6. Verify that the file gets automatically formatted

#### Option B: Package and Install

1. Install vsce globally:
   ```bash
   npm install -g vsce
   ```

2. Package the extension:
   ```bash
   vsce package
   ```

3. Install the generated `.vsix` file in VS Code:
   - Open VS Code
   - Go to Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`)
   - Click the "..." menu and select "Install from VSIX..."
   - Select the generated `.vsix` file

### 4. Test Different Scenarios

#### Test Case 1: Basic Formatting
Create a file with poorly formatted Leptos code:

```rust
use leptos::*;

#[component]
pub fn TestComponent() -> impl IntoView {
    let (count, set_count) = create_signal(0);

    view! {
        <div class="container">
            <h1>"Test Component"</h1>
            <button on:click=move |_| set_count.update(|n| *n += 1)>
                "Count: " {count}
            </button>
        </div>
    }
}
```

Save and verify it gets formatted properly.

#### Test Case 2: Error Handling
1. Temporarily rename `leptosfmt` to test error handling:
   ```bash
   mv ~/.cargo/bin/leptosfmt ~/.cargo/bin/leptosfmt.backup
   ```

2. Try to format a file - you should see an error message with installation instructions

3. Restore leptosfmt:
   ```bash
   mv ~/.cargo/bin/leptosfmt.backup ~/.cargo/bin/leptosfmt
   ```

#### Test Case 3: Settings Configuration
1. Open VS Code settings (`Ctrl+,` / `Cmd+,`)
2. Search for "leptosFormatter"
3. Toggle "Enable On Save" setting
4. Test that formatting behavior changes accordingly

### 5. Manual Formatting Test

You can also test manual formatting:

1. Open a Rust file with Leptos components
2. Right-click in the editor
3. Select "Format Document" from the context menu
4. Or use Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and search for "Format Document"

## Expected Behavior

✅ **Working correctly when:**
- File is automatically formatted on save (if enabled)
- Manual formatting works via context menu or Command Palette
- Error message appears if leptosfmt is not installed
- Settings can be configured and take effect
- Only `.rs` files are processed
- Formatted output replaces the entire file content

❌ **Issues to watch for:**
- Extension doesn't activate
- Formatting doesn't happen on save
- Error messages don't appear when leptosfmt is missing
- Settings don't take effect
- Non-Rust files get processed
- Partial formatting or formatting errors

## Troubleshooting

### Extension Not Working
1. Check the VS Code Output panel for errors
2. Verify leptosfmt is installed and in PATH
3. Check extension settings
4. Restart VS Code

### Formatting Not Happening
1. Ensure the file has `.rs` extension
2. Check that `leptosFormatter.enableOnSave` is `true`
3. Verify leptosfmt is working: `echo 'view! { <div>"test"</div> }' | leptosfmt --stdin`

### Performance Issues
1. Check for large files that might timeout
2. Verify leptosfmt is not hanging
3. Check system resources

## Test Results

After running all tests, you should have:
- ✅ Extension compiles without errors
- ✅ Test script shows successful formatting
- ✅ VS Code integration works (auto-format on save)
- ✅ Manual formatting works
- ✅ Error handling works when leptosfmt is missing
- ✅ Settings configuration works
- ✅ Only Rust files are processed

## Cleanup

After testing, you can clean up test files:

```bash
rm test.rs test-extension.js
```
