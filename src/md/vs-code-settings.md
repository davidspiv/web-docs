# VS Code Settings

```
"debug.toolBarLocation": "commandCenter",

"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.fontSize": 20,
"editor.mouseWheelScrollSensitivity": 2,
"editor.renderWhitespace": "boundary",
"editor.cursorBlinking": "phase",
"editor.stickyScroll.enabled": false,
"editor.smoothScrolling": true,
"editor.cursorSmoothCaretAnimation": "on",
"editor.linkedEditing": true,
"editor.minimap.enabled": false,
"editor.suggest.snippetsPreventQuickSuggestions": true,
"editor.snippetSuggestions": "top",
"diffEditor.hideUnchangedRegions.enabled": true,

"explorer.compactFolders": false,
"explorer.confirmDragAndDrop": false,
"explorer.sortOrder": "type",

"files.trimTrailingWhitespace": true,
"files.insertFinalNewline": true,
"files.trimFinalNewlines": true,
"files.autoSave": "afterDelay",

"git.confirmSync": false,
"git.autofetch": true,
"git.mergeEditor": true,
"git.openRepositoryInParentFolders": "always",

"liveServer.settings.donotShowInfoMsg": true,
"liveServer.settings.showOnStatusbar": false,

"terminal.integrated.profiles.windows": {
"Git Bash": { "path": "C:\\Program Files\\Git\\bin\\bash.exe" }
},
"terminal.integrated.defaultProfile.windows": "Git Bash",
"terminal.integrated.defaultProfile.osx": "bash",
"terminal.integrated.fontSize": 18,

"workbench.tree.enableStickyScroll": true,
"workbench.statusBar.visible": true,
"workbench.colorTheme": "Material Theme Palenight",

"[jsonc]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[markdown]": {
"editor.unicodeHighlight.invisibleCharacters": true
},
"[plaintext]": {
"editor.unicodeHighlight.invisibleCharacters": true
},

"vim.leader": " ",
"vim.hlsearch": true,
"vim.useSystemClipboard": true,
"vim.smartRelativeLine": true,
"vim.useCtrlKeys": false,
"vim.insertModeKeyBindings": [
{
    "before": ["q", "q"],
    "after": ["<Right>"]
}
],

```

## Appearance

**Show hidden characters**

```
"[markdown]": {
"editor.unicodeHighlight.invisibleCharacters": true
},
"[plaintext]": {
"editor.unicodeHighlight.invisibleCharacters": true
},
```

Make hidden characters easily visible in the editor. This is on by default for all languages, except for Plain Text and Markdown, so we have to turn it on there explicitly.

**Render whitespace**

```
"editor.renderWhitespace": "boundary",
```

By default VS Code only shows a glyph for space and tab characters when you highlight them. The boundary setting toggles glyphs any time there is potentially unexpected whitespace, which is typically when there is more than one whitespace character including indentation
Minimap

```
"editor.minimap.autohide": true,
"editor.minimap.renderCharacters": false,
"editor.minimap.showSlider": "always",
```

The minimap is a small preview of the entire file that is displayed on the right side of the editor, replacing the traditional vertical scrollbar.
File tree compact folders

```
"explorer.compactFolders": false,
```

By default the file navigation tree will collapse folders that only contain a single folder. This saves a bit of vertical space, but can also make it harder to drag and drop files or folders into the collapsed folder.

## Feel

**Cursor blinking**

```
"editor.cursorBlinking": "phase",
```

Control if the caret (typing cursor) blinks or not, as well as the animation it uses for the blink.

**Smooth scrolling**

```
"editor.smoothScrolling": true,
```

Adds a slight animation to vertically scrolling, rather than the page just jumping to the new location.

**Smooth caret animations**

```
"editor.cursorSmoothCaretAnimation": "on",
```

Adds a slight animation of the caret moving to the new location, making it easier to follow.

## Utility

**Stickyscroll**

```
"editor.stickyScroll.enabled": false,
```

As you scroll down through nested classes/functions/structures, the names stick to the top of the editor making it hard to see things.

**File tree sticky scroll**

"workbench.tree.enableStickyScroll": true,

Keeps the directory hierarchy visible as you scroll through the file tree.

**Debug toolbar location**

```
"debug.toolBarLocation": "commandCenter",
```

By default the debug toolbar floats so that it is always visible and can be repositioned. The problem is it often floats over other controls or tabs, making them hard to access. Modify to show the debug toolbar in the Command Center.

## Format

**Format on paste**

```
"editor.formatOnPaste": true,
```

When you paste text into the editor, VS Code can automatically format the text for you according to any linters or formatting rules you have configured.

**Format on save**

```
"editor.formatOnSave": true,
```

Automatically format a file when you save it
Format on save mode

```
"editor.formatOnSaveMode": "modifications",
```

Formats only the lines that have been changed.

## Save

**Save Files automatically**

```
"files.autoSave": "onFocusChange",
```

Autosaves when the editor loses focus

**Trim trailing white space**

```
"files.trimTrailingWhitespace": true,
```

Automatically remove trailing whitespace at the end of any lines when the file is saved.

**Trim final newline**

```
"files.trimFinalNewlines": true,
```

This setting will automatically trim any additional final newlines from the end of the file when you save it.

**Insert final newline**

```
"files.insertFinalNewline": true,
```

Automatically add a final newline to the end of the file when you save it. Unix requires a final newline to be present on text files.

## Git

**Git autofetch**

```
"git.autofetch": true,
```

Automatically fetch from the remote repository periodically.

**Merge Editor**

```
"git.mergeEditor": true,
```

When resolving merge conflicts, VS Code will open the visual merge editor to help you resolve the conflicting lines.
