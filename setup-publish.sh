#!/bin/bash

# Setup script for publishing Leptos Auto Formatter to VS Code Marketplace

echo "🚀 Setting up Leptos Auto Formatter for publishing..."

# Check if vsce is installed
if ! command -v vsce &> /dev/null; then
    echo "📦 Installing vsce..."
    npm install -g vsce
else
    echo "✅ vsce is already installed"
fi

# Compile the extension
echo "🔨 Compiling extension..."
npm run compile

if [ $? -eq 0 ]; then
    echo "✅ Extension compiled successfully"
else
    echo "❌ Compilation failed"
    exit 1
fi

# Package the extension
echo "📦 Packaging extension..."
vsce package

if [ $? -eq 0 ]; then
    echo "✅ Extension packaged successfully"
    echo "📁 Package created: leptos-auto-formatter-1.0.0.vsix"
    echo ""
    echo "Next steps:"
    echo "1. Create a publisher account at https://marketplace.visualstudio.com/"
    echo "2. Update the 'publisher' field in package.json with your publisher ID"
    echo "3. Create a personal access token at https://dev.azure.com/"
    echo "4. Run: vsce login your-publisher-id"
    echo "5. Run: vsce publish"
    echo ""
    echo "For detailed instructions, see PUBLISHING.md"
else
    echo "❌ Packaging failed"
    exit 1
fi
