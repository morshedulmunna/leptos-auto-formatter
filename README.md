# Leptos Auto Formatter VS Code Extension

A VS Code extension that automatically formats Leptos components using `leptosfmt` on save, similar to how Prettier works for other languages.

## Features

- ✅ Automatic formatting of Rust files (`.rs`) on save
- ✅ Uses `leptosfmt` as the underlying formatter
- ✅ **25+ Leptos code snippets** for rapid development
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

### Automatic Formatting

1. Open any Rust file (`.rs`)
2. Make changes to your Leptos components
3. Save the file (`Ctrl+S` / `Cmd+S`)
4. The file will be automatically formatted using `leptosfmt`

You can also manually format by:
- Using the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and searching for "Format Document"
- Right-clicking in the editor and selecting "Format Document"

### Code Snippets

The extension includes 25+ Leptos-specific code snippets to speed up development. Simply type the snippet prefix and press `Tab` to expand:

#### **Core Components**
- `lc` - Basic Leptos component
- `lcp` - Component with props
- `lv` - View block
- `lapp` - App component

#### **Reactivity**
- `ls` - Create signal
- `le` - Create effect
- `lr` - Create resource
- `laction` - Create action
- `lmulti` - Create action with pending state

#### **Conditional Rendering**
- `lshow` - Show component
- `lshowf` - Show with fallback
- `lsuspense` - Suspense boundary
- `lerror` - Error boundary

#### **Lists & Loops**
- `lf` - For loop
- `lul` - Unordered list
- `lol` - Ordered list
- `lli` - List item

#### **HTML Elements**
- `lbtn` - Button
- `linput` - Input field
- `lform` - Form
- `ldiv` - Div with class
- `lspan` - Span
- `lp` - Paragraph
- `lh` - Heading

#### **Routing**
- `lroute` - Router route
- `lroutes` - Router routes container
- `llink` - Router link

#### **Server Functions**
- `lserver` - Server function
- `lmain` - Main function with setup

#### **Example Usage**
```rust
// Type 'lc' + Tab to get:
#[component]
pub fn ComponentName() -> impl IntoView {
    view! {
        // Component content
    }
}

// Type 'ls' + Tab to get:
let (value, set_value) = create_signal(initial_value);

// Type 'lbtn' + Tab to get:
button {
    on:click=click_handler,
    "Button text"
}
```

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