# Gemini Search

<div style="margin-bottom: 20px;">
  <button onclick="copyRawContent('gemini-search', 'https://github.com/watanabeyu/cc-commands')" 
          style="background-color: #3b82f6; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">
    📋 Copy Command
  </button>
  <button onclick="downloadCommand('gemini-search', 'https://github.com/watanabeyu/cc-commands')" 
          style="background-color: #10b981; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">
    ⬇️ Download
  </button>
</div>

Use Google Gemini CLI for web searches.

## Overview

`gemini` is a Google Gemini CLI tool. You can use it for web search functionality.

## Usage

Run web search via Task Tool with `gemini -p 'WebSearch: ...'`.

```bash
gemini -p "WebSearch: ..."
```

## Examples

```bash
# Search for latest documentation
gemini -p "WebSearch: VitePress latest documentation 2024"

# Search for technical information
gemini -p "WebSearch: TypeScript 5.0 new features"

# Search for troubleshooting
gemini -p "WebSearch: npm ci error ESM module"
```

## Prerequisites

- Google Gemini CLI (`gemini`) must be installed and configured
- Valid API credentials for Google Gemini