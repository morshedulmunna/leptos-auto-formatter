# Publishing "Leptos Auto Formatter" to VS Code Marketplace

This guide will help you publish the Leptos Auto Formatter extension to the VS Code Marketplace.

## Prerequisites

1. **Create a Visual Studio Marketplace Publisher Account**
   - Go to [Visual Studio Marketplace](https://marketplace.visualstudio.com/)
   - Sign in with your Microsoft account
   - Click "Publish extensions" in the top right
   - Create a new publisher account if you don't have one
   - Note down your publisher ID (you'll need this)

2. **Install vsce (Visual Studio Code Extension Manager)**
   ```bash
   npm install -g vsce
   ```

3. **Install Azure DevOps Extension**
   ```bash
   npm install -g @vscode/vsce
   ```

## Step 1: Update Package.json

Update the publisher field in `package.json` with your actual publisher ID:

```json
{
  "publisher": "your-actual-publisher-id"
}
```

## Step 2: Create a Personal Access Token

1. Go to [Azure DevOps](https://dev.azure.com/)
2. Sign in with your Microsoft account
3. Go to User Settings → Personal Access Tokens
4. Create a new token with:
   - Name: "VS Code Marketplace"
   - Scopes: "Custom defined"
   - Permissions: "Marketplace (manage)" - "Publish"
5. Copy the token (you won't see it again!)

## Step 3: Login to vsce

```bash
vsce login your-publisher-id
```

Enter your personal access token when prompted.

## Step 4: Prepare for Publishing

1. **Update the README** (optional but recommended):
   - Add screenshots
   - Add more detailed usage instructions
   - Add changelog

2. **Add an icon** (optional but recommended):
   - Create a 128x128 PNG icon
   - Save it as `icon.png` in the root directory
   - Add to package.json:
     ```json
     "icon": "icon.png"
     ```

3. **Add a license** (recommended):
   - Create a `LICENSE` file
   - Add to package.json:
     ```json
     "license": "MIT"
     ```

## Step 5: Package the Extension

```bash
vsce package
```

This creates a `.vsix` file that you can install locally for testing.

## Step 6: Test the Package

Before publishing, test the packaged extension:

1. Install the `.vsix` file in VS Code:
   - Open VS Code
   - Go to Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`)
   - Click "..." menu → "Install from VSIX..."
   - Select the generated `.vsix` file

2. Test all functionality to ensure it works correctly

## Step 7: Publish to Marketplace

```bash
vsce publish
```

This will:
- Upload the extension to the VS Code Marketplace
- Make it available for public download
- Assign it a unique extension ID

## Step 8: Verify Publication

1. Go to [Visual Studio Marketplace](https://marketplace.visualstudio.com/)
2. Search for "Leptos Auto Formatter"
3. Verify your extension appears in the results
4. Check that all details are correct

## Step 9: Update Extension (Future Versions)

When you want to update the extension:

1. Update the version number in `package.json`
2. Update the changelog
3. Run `vsce package` to create a new package
4. Run `vsce publish` to publish the update

## Important Notes

### Extension ID
- The extension ID will be: `your-publisher-id.leptos-auto-formatter`
- Users will install it with: `ext install your-publisher-id.leptos-auto-formatter`

### Marketplace Guidelines
- Ensure your extension follows the [Marketplace Publishing Guidelines](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- Test thoroughly before publishing
- Provide clear documentation
- Respond to user feedback and issues

### Security Considerations
- Never commit your personal access token
- Use environment variables for sensitive data
- Keep your publisher account secure

## Troubleshooting

### Common Issues

1. **"Publisher not found"**
   - Make sure you've created a publisher account
   - Verify the publisher ID is correct

2. **"Invalid personal access token"**
   - Check token permissions
   - Ensure token hasn't expired
   - Try creating a new token

3. **"Extension already exists"**
   - Update the version number
   - Or use `vsce publish --update` if updating

4. **"Package validation failed"**
   - Check package.json for required fields
   - Ensure all dependencies are properly declared
   - Verify file structure

### Getting Help

- [VS Code Extension API Documentation](https://code.visualstudio.com/api)
- [Marketplace Documentation](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [vsce Documentation](https://github.com/Microsoft/vscode-vsce)

## Post-Publication

After successful publication:

1. **Monitor the extension**:
   - Check download statistics
   - Read user reviews
   - Respond to issues

2. **Maintain the extension**:
   - Fix bugs promptly
   - Add new features based on feedback
   - Keep dependencies updated

3. **Promote the extension**:
   - Share on social media
   - Mention in relevant communities
   - Add to project documentation

## Example Commands Summary

```bash
# Install vsce
npm install -g vsce

# Login to marketplace
vsce login your-publisher-id

# Package extension
vsce package

# Publish extension
vsce publish

# Update existing extension
vsce publish --update
```

Good luck with publishing your Leptos Auto Formatter extension! 🚀
