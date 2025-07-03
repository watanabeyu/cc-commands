# Claude Code Commands

A collection of custom commands for Claude Code to enhance productivity and streamline workflows.

## Overview

This repository contains various custom commands designed to enhance your Claude Code experience. These commands provide specialized assistance for code analysis, GitHub integration, and web searches.

## Documentation

Visit the documentation site: [https://watanabeyu.github.io/cc-commands/](https://watanabeyu.github.io/cc-commands/)

## Available Commands

### Code Analysis
- **Check Similarity** - Detect duplicate TypeScript/JavaScript code using AST comparison for refactoring

### GitHub Integration
- **Issue Create** - 要件定義のスペシャリストとして、対話形式で要件を深掘りしGitHub issueを作成
- **Issue Update** - 既存のGitHub issueを更新するために、要件を深掘り・改善
- **PR Create** - Pull Request作成のスペシャリストとして、issueに基づいたPR作成をサポート
- **PR Update** - 既存PRの内容を確認し、適切なdescriptionを作成・更新
- **PR Review Fix** - PRレビューコメントを分析し、適切な修正を支援

### Search
- **Gemini Search** - Use Google Gemini CLI for web searches

## Usage

When using Claude Code, reference the appropriate command for your task. Claude will follow the guidelines in the command to assist you.

For example:
- When you want to create a GitHub issue: "Use the issue-create command"
- When you need to find code duplicates: "Use the check-similarity command"
- When you need to handle PR reviews: "Use the pr-review-fix command"

## License

This project is open source and available under the MIT License.