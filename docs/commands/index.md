# Commands Overview

Welcome to the Claude Code Commands collection. This repository contains various custom commands designed to enhance your Claude Code experience.

## Available Commands

### Code Analysis
- **[Check Similarity](/commands/check-similarity)** - Detect duplicate TypeScript/JavaScript code using AST comparison for refactoring

### GitHub Integration
- **[Issue Create](/commands/issue-create)** - 要件定義のスペシャリストとして、対話形式で要件を深掘りしGitHub issueを作成
- **[Issue Update](/commands/issue-update)** - 既存のGitHub issueを更新するために、要件を深掘り・改善
- **[PR Create](/commands/pr-create)** - Pull Request作成のスペシャリストとして、issueに基づいたPR作成をサポート
- **[PR Fix](/commands/pr-fix)** - PRの継続的な改善をサポートするスペシャリストとして、既存のPRに対して、追加の修正や改善を行う際のコミットフローを支援
- **[PR Description Update](/commands/pr-description-update)** - 既存PRの内容を確認し、適切なdescriptionを作成・更新
- **[PR Review Fix](/commands/pr-review-fix)** - PRレビューコメントを分析し、適切な修正を支援

### Requirements
- **[Req Assistant](/commands/req-assistant)** - 優しく教育的なPMメンターとして、新卒PMアシスタントの要件定義をサポート

### Search
- **[Gemini Search](/commands/gemini-search)** - Use Google Gemini CLI for web searches

## How to Use

1. Save these command files to `~/.claude/commands/`
2. When using Claude Code, reference the appropriate command for your task
3. Claude will follow the guidelines in the command to assist you

## Contributing

If you have ideas for new commands or improvements to existing ones, feel free to contribute to the [GitHub repository](https://github.com/watanabeyu/cc-commands).