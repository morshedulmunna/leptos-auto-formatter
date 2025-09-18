# Leptos Auto Formatter VS Code Extension

A VS Code extension that automatically formats Leptos components using `leptosfmt` on save, similar to how Prettier works for other languages.

## Features

- ✅ Automatic formatting of Rust files (`.rs`) on save
- ✅ Uses `leptosfmt` as the underlying formatter
- ✅ **65+ Leptos code snippets** for rapid development
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

The extension includes 65+ Leptos-specific code snippets to speed up development. Simply type the snippet prefix and press `Tab` to expand:

#### **Imports & Setup**
- `limports` - Common Leptos imports
- `lrouter` - Leptos with router imports
- `lserver_imports` - Leptos with server function imports
- `lfull` - Complete Leptos imports with router and server
- `ldeps` - Common Leptos Cargo dependencies
- `ldeps_ssr` - Leptos Cargo dependencies for SSR

#### **Core Components**
- `lc` - Basic Leptos component
- `lcp` - Component with props
- `lcc` - Component with children and optional class
- `lcpc` - Component with props and children
- `lv` - View block
- `lapp` - App component

#### **Reactivity & State**
- `ls` - Create signal
- `le` - Create effect
- `lr` - Create resource
- `lmemo` - Create memo
- `lderived` - Create derived signal
- `laction` - Create action
- `lmulti` - Create action with pending state
- `ltoggle` - Create toggle state
- `lcounter` - Create counter with increment/decrement

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

#### **Server Functions & Actions**
- `lserver` - Server function
- `lmain` - Main function with setup

#### **App Lifecycle**
- `lmount` - Mount app to body
- `lhydrate` - Hydrate app to body
- `lssr` - Server-side render app

#### **Meta Tags & Head**
- `ltitle` - Set page title
- `ldesc` - Set meta description
- `lcss` - Link CSS file
- `lscript` - Include JavaScript file

#### **Event Handling**
- `lwindow` - Window event listener
- `ldoc` - Document event listener

#### **Timers & Async**
- `linterval` - Create interval timer
- `ltimeout` - Create timeout
- `lfetch` - Create resource with HTTP fetch

#### **Storage**
- `llocal` - Get local storage handle
- `lsession` - Get session storage handle
- `llocal_signal` - Signal synced with local storage

#### **State Management**
- `lerror_handle` - Error handling pattern
- `lloading` - Loading state pattern
- `lform_state` - Form state management
- `lcontext` - Context provider
- `luse_context` - Use context in component

#### **Debugging & Logging**
- `ldebug` - Debug logging
- `lconsole` - Console log in browser

#### **Browser APIs**
- `lwindow_size` - Track window size
- `lhash` - Track URL hash changes

#### **Example Usage**
```rust
// Type 'limports' + Tab to get:
use leptos::prelude::*;

// Type 'lc' + Tab to get:
#[component]
pub fn ComponentName() -> impl IntoView {
    view! {
        // Component content
    }
}

// Type 'lcp' + Tab to get:
#[component]
pub fn ComponentName(props: Props) -> impl IntoView {
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

// Type 'lshow' + Tab to get:
Show {
    when=condition,
    children=|| view! {
        // Content to show
    }
}

// Type 'lfetch' + Tab to get:
let data = create_resource(
    move || (),
    move |_| async move {
        let response = reqwest::get("https://api.example.com/data").await?;
        let data: DataType = response.json().await?;
        Ok::<_, reqwest::Error>(data)
    }
);

// Type 'lcontext' + Tab to get:
#[derive(Clone)]
pub struct ContextData {
    pub value: ReadSignal<String>,
    pub set_value: WriteSignal<String>,
}

pub fn provide_ContextData() {
    let (value, set_value) = create_signal("default".to_string());
    provide_context(ContextData { value, set_value });
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

Support: https://buymeacoffee.com/moshedulmunna


#### Contact
Morshedul Islam Munna
Software Engineer
Email: morshedulmunna1@gmail.com
