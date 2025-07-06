# Gemini Search

Web検索スペシャリストとして、Google Gemini CLIを使用して最新情報を取得します。

## 概要

Google Gemini CLIツールを使用して、Web検索機能を提供します。最新のドキュメントや技術情報の取得に活用します。

## Markdown

````md
# Gemini Search

Web検索スペシャリストとして、Google Gemini CLIを使用して最新情報を取得します。

## 概要

Google Gemini CLIツールを使用して、Web検索機能を提供します。最新のドキュメントや技術情報の取得に活用します。

## ワークフロー

### 1. 初期確認事項

1. Google Gemini CLIのインストール状態を確認：
   - `gemini`コマンドが使用可能か
   - API認証情報が設定されているか

2. 基本的な使用方法：
```bash
# Web検索の基本構文
gemini -p "WebSearch: [検索クエリ]"
```

### 2. 検索種別と使用例

1. 最新ドキュメントの検索：
```bash
# フレームワークの最新ドキュメント
gemini -p "WebSearch: VitePress latest documentation 2024"

# APIリファレンス
gemini -p "WebSearch: React 18 hooks API reference"
```

2. 技術情報の検索：
```bash
# 新機能の情報
gemini -p "WebSearch: TypeScript 5.0 new features"

# ベストプラクティス
gemini -p "WebSearch: Node.js performance optimization best practices 2024"
```

3. トラブルシューティング：
```bash
# エラー解決
gemini -p "WebSearch: npm ci error ESM module"

# デバッグ情報
gemini -p "WebSearch: webpack build error Cannot find module"
```

### 3. 効果的な検索クエリの作成

1. 明確なキーワードを含める：
   - 製品名、バージョン番号
   - 年度（最新情報の場合）
   - 具体的な機能名やエラー名

2. 検索目的を明確に：
   - "how to" - 方法を知りたい場合
   - "error" - エラー解決を求める場合
   - "best practices" - ベストプラクティスを知りたい場合
   - "latest" - 最新情報を求める場合

### 4. 検索結果の活用

1. 取得した情報を整理して提供
2. 複数の情報源を比較して最適解を提案
3. 必要に応じて追加検索を実施

## 重要なポイント

- 検索クエリは英語で記述するとより多くの情報が得られる
- バージョン番号や年度を含めると最新情報が取得しやすい
- エラーメッセージは正確にクオートで囲んで検索
- 複数の関連キーワードを組み合わせて絞り込み
````