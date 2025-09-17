# Leptos Auto Formatter VS Code Extension

A VS Code extension that automatically formats Leptos components using `leptosfmt` on save, similar to how Prettier works for other languages.

## Features

- ✅ Automatic formatting of Rust files (`.rs`) on save
- ✅ Uses `leptosfmt` as the underlying formatter
- ✅ Configurable enable/disable formatting on save
- ✅ Customizable `leptosfmt` executable path
- ✅ Error handling with helpful installation instructions
- ✅ No confirmation prompts - works seamlessly like Prettier

## Quick Start

1. Install `leptosfmt`: `cargo install leptosfmt`
2. Install this extension from the VS Code Extension Store
3. Open a Rust file and save - formatting happens automatically!

## Prerequisites

Before using this extension, you need to install `leptosfmt`:

### Install leptosfmt

**Option 1: Install from crates.io (Recommended)**
```bash
cargo install leptosfmt
```



**Verify installation:**
```bash
leptosfmt --version
```

**Platform-specific notes:**
- **Windows**: Make sure `leptosfmt` is in your PATH or specify the full path in settings
- **macOS/Linux**: Should work out of the box if installed via cargo

## Installation

### From VS Code Extension Store (Recommended)

1. Open VS Code
2. Go to the Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "Leptos Auto Formatter" or "leptos-formatter"
4. Click **Install**
5. The extension will be automatically enabled


## Configuration

The extension provides the following settings:

- `leptosFormatter.enableOnSave` (boolean, default: `true`): Enable/disable automatic formatting on save
- `leptosFormatter.leptosfmtPath` (string, default: `"leptosfmt"`): Path to the leptosfmt executable

### Settings Example

Add to your VS Code `settings.json`:

```json
{
  "leptosFormatter.enableOnSave": true,
  "leptosFormatter.leptosfmtPath": "leptosfmt",
  "[rust]": {
    "editor.defaultFormatter": "MorshedulMunna.leptos-auto-formatter",
    "editor.formatOnSave": true
  }
}
```


## Usage

1. Open any Rust file (`.rs`)
2. Make changes to your Leptos components
3. Save the file (`Ctrl+S` / `Cmd+S`)
4. The file will be automatically formatted using `leptosfmt`

You can also manually format by:
- Using the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and searching for "Format Document"
- Right-clicking in the editor and selecting "Format Document"

## Troubleshooting

### leptosfmt not found

If you see an error that `leptosfmt` is not installed:

1. Make sure `leptosfmt` is installed and available in your PATH
2. Check the `leptosFormatter.leptosfmtPath` setting if you installed it in a custom location
3. Restart VS Code after installing `leptosfmt`

### Formatting not working

1. Ensure the extension is enabled in VS Code
2. Check that `leptosFormatter.enableOnSave` is set to `true`
3. Verify that the file has a `.rs` extension
4. Check the VS Code Output panel for any error messages


## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.
Git: https://github.com/morshedulmunna/leptos-auto-formatter

#### Contact
Morshedul Islam Munna
Software Engineer
Email: morshedulmunna1@gmail.com