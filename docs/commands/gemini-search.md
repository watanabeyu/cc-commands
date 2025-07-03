# Gemini Search

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