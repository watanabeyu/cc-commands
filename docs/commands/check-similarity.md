<div style="margin-bottom: 20px;">
  <a href="https://raw.githubusercontent.com/watanabeyu/cc-commands/main/docs/commands/check-similarity.md" 
     target="_blank"
     style="display: inline-block; background-color: #6b7280; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-size: 14px;">
    📄 View Raw
  </a>
</div>

# Check Similarity

AI Assistant Guide for detecting duplicate TypeScript/JavaScript code using AST comparison.

## Purpose

Detects duplicate TypeScript/JavaScript code using AST comparison for refactoring.

## AI Prompt

### 日本語
```
`similarity-ts .` でコードの意味的な類似が得られます。あなたはこれを実行し、ソースコードの重複を検知して、リファクタリング計画を立てます。細かいオプションは similarity-ts -h で確認してください。
```

### English
```
Run `similarity-ts .` to detect semantic code similarities. Execute this command, analyze the duplicate code patterns, and create a refactoring plan. Check `similarity-ts -h` for detailed options.
```

## Installation

```bash
cargo install similarity-ts
# check options
similarity-ts --help
```

## Key Options

- `--threshold <0-1>`: Similarity threshold (default: 0.8)
- `--min-tokens <n>`: Skip functions with <n AST nodes (recommended: 20-30)
- `--print`: Show actual code snippets
- `--experimental-types`: Enable type similarity detection (interfaces, type aliases)
- `--filter-function <name>`: Filter results by function name (substring match)
- `--filter-function-body <text>`: Filter results by function body content (substring match)

## AI Refactoring Workflow

### 1. Broad Scan

Find all duplicates in codebase:

```bash
similarity-ts src/ --threshold 0.85 --min-tokens 25
```

### 2. Focused Analysis

Examine specific file pairs:

```bash
similarity-ts file1.ts file2.ts --threshold 0.8 --min-tokens 20 --print
```

### 3. Threshold Tuning

If no results, progressively lower:

```bash
similarity-ts file1.ts file2.ts --threshold 0.75 --min-tokens 20
similarity-ts file1.ts file2.ts --threshold 0.7 --min-tokens 20
```

## Output Format

```
Function: functionName (file.ts:startLine-endLine)
Similar to: otherFunction (other.ts:startLine-endLine)
Similarity: 85%
```

## Effective Thresholds

- `0.95+`: Nearly identical (variable renames only)
- `0.85-0.95`: Same algorithm, minor differences
- `0.75-0.85`: Similar structure, different details
- `0.7-0.75`: Related logic, worth investigating

## Refactoring Strategy

1. **Start with high threshold** (0.9) to find obvious duplicates
2. **Compare specific pairs** when similarity found
3. **Use --print** to see actual code differences
4. **Extract common logic** into shared functions/modules
5. **Re-run after refactoring** to verify no new duplicates

## Common Patterns to Refactor

- **Data processing loops** with different field names
- **API handlers** with similar request/response logic
- **Validation functions** with different rules
- **State management** with repeated patterns

## Best Practices

- Use `--min-tokens` for accurate complexity filtering (20-30 tokens)
- Focus on files with 80%+ similarity first
- Check if similar functions are in same module (easier to refactor)
- Consider function size - larger duplicates have more impact
- Look for patterns across multiple files, not just pairs