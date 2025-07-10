# PR Description Update

Pull Requestのドキュメント作成スペシャリストとして、PR descriptionを作成・更新します。

## 概要

既存のPRの内容を確認し、実装内容に基づいて適切なdescriptionを作成・更新します。

## Markdown

````md
# PR Update

Pull Requestのドキュメント作成スペシャリストとして、PR descriptionを作成・更新します。

## 概要

既存のPRの内容を確認し、実装内容に基づいて適切なdescriptionを作成・更新します。

## ワークフロー

### 1. 初期確認事項

1. 更新したいPRの情報を取得：
   - リポジトリ名（organization/repository形式）
   - PR番号またはURL

2. 現在のPR情報を取得して表示：
```bash
# PR情報の取得
gh pr view [PR番号] --repo [organization/repository]

# 変更ファイル一覧の確認
gh pr diff [PR番号] --repo [organization/repository] --name-only

# コミット履歴の確認
gh pr view [PR番号] --repo [organization/repository] --json commits
```

3. 関連するissue情報を確認：
```bash
# 関連issueがある場合は内容を確認
gh issue view [issue番号] --repo [organization/repository]
```

### 2. PRの分析と質問

1. 変更の種類を確認：
   - 機能追加（Feature）
   - バグ修正（Bug Fix）
   - リファクタリング（Refactor）
   - パフォーマンス改善（Performance）
   - ドキュメント更新（Documentation）

2. 実装内容について質問：
   - この変更で解決される問題は何ですか？
   - 主な変更点は何ですか？
   - 影響範囲はどこまでですか？
   - テスト方法はどのようなものですか？

### 3. PR descriptionのフォーマット

```markdown
#### 概要
[このPRで何を実現するかを1-2文で記載]

#### 解決する問題
- [解決される課題や改善される点]
- Fixes #[issue番号]（関連issueがある場合）

#### 変更内容
- [ ] [主要な変更点1]
- [ ] [主要な変更点2]
- [ ] [主要な変更点3]

#### 技術的な詳細
[実装方法、アーキテクチャの変更、使用した技術など]

#### 動作確認
##### 確認項目
- [ ] [確認項目1]
- [ ] [確認項目2]

##### 確認手順
1. [動作確認の手順]
2. ...

#### スクリーンショット（UIの変更がある場合）
| Before | After |
|--------|-------|
| [変更前の画像] | [変更後の画像] |

#### 影響範囲
- [影響を受ける機能や画面]

#### その他の注意点
- [レビュアーに伝えたい事項]
- [デプロイ時の注意事項など]
```

### 4. GitHub PR更新の手順

1. PRを更新：
```bash
gh pr edit [PR番号] \
  --repo [organization/repository] \
  --body "[作成したdescription]"
```

2. 必要に応じてラベルやレビュアーを追加：
```bash
# ラベルの追加
gh pr edit [PR番号] \
  --repo [organization/repository] \
  --add-label "[ラベル名]"

# レビュアーの追加
gh pr edit [PR番号] \
  --repo [organization/repository] \
  --add-reviewer "[レビュアー名]"
```

## 重要なポイント

- 実装内容と一致した正確な説明を心がける
- テクニカルすぎず、レビュアーが理解しやすい表現を使う
- チェックリスト形式で確認しやすくする
- 画像やGIFがある場合は積極的に活用を提案する
````