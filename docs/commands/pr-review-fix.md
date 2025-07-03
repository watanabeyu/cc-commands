<div style="margin-bottom: 20px;">
  <a href="https://raw.githubusercontent.com/watanabeyu/cc-commands/main/docs/commands/pr-review-fix.md" 
     target="_blank"
     style="display: inline-block; background-color: #6b7280; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-size: 14px;">
    📄 View Raw
  </a>
</div>

# PR Review Fix

PRレビュー対応のスペシャリストとして、レビューコメントを分析し適切な修正を支援します。

## 概要

PRについたレビューコメントを分析し、適切な修正を支援します。

## ワークフロー

### 1. 初期確認事項

1. 対象PRの情報を取得：
   - リポジトリ名（organization/repository形式）
   - PR番号

2. PR情報とレビューコメントを取得：
```bash
# PR情報の確認
gh pr view [PR番号] --repo [organization/repository]

# レビューコメントの取得
gh pr view [PR番号] --repo [organization/repository] --json reviews,comments

# 未解決の会話を確認
gh api repos/[organization]/[repository]/pulls/[PR番号]/comments
```

3. 現在のブランチを確認し、PRのブランチにチェックアウト：
```bash
# PRのブランチ情報を取得
gh pr view [PR番号] --json headRefName

# ブランチにチェックアウト
git checkout [ブランチ名]

# 最新の状態に更新
git pull origin [ブランチ名]
```

### 2. レビューコメントの分析と分類

1. コメントを以下のカテゴリに分類：
   - 🐛 **バグ修正要求** - 動作に問題がある
   - 🔧 **リファクタリング提案** - コードの改善
   - 📝 **ドキュメント/コメント追加** - 説明の追加
   - ⚡ **パフォーマンス改善** - 効率化の提案
   - 🎨 **スタイル/命名規則** - コーディング規約
   - ❓ **質問/確認事項** - 追加説明が必要
   - ✅ **承認/LGTM** - 対応不要

2. 優先順位付け：
   ```
   優先度高: バグ修正要求、動作に関わる変更
   優先度中: リファクタリング、パフォーマンス
   優先度低: スタイル、ドキュメント
   ```

### 3. 対応方針の提示

各コメントに対して：
```
レビューコメント #1 [カテゴリ: 🐛 バグ修正]
場所: src/components/UserList.js L45
コメント: "nullチェックが必要です"

提案する対応:
- [ ] nullチェックを追加
- [ ] エラーハンドリングを実装
- [ ] テストケースを追加

実装案:
```js
if (!user || !user.id) {
  return <EmptyState />;
}
```
```

### 4. 段階的な修正とコミット

カテゴリごとに修正を実施：
```bash
# 1. バグ修正から対応
git add [修正したファイル]
git commit -m "fix: Address review - Add null check for user object"

# 2. リファクタリング
git add [修正したファイル]
git commit -m "refactor: Address review - Extract validation logic"

# 3. ドキュメント追加
git add [修正したファイル]
git commit -m "docs: Address review - Add JSDoc comments"
```

### 5. レビュー対応の記録

1. PR descriptionに「レビュー対応履歴」セクションを追加：
```markdown
### レビュー対応履歴
- [x] nullチェックの追加 (commit: abc123)
- [x] 変数名の修正 (commit: def456)
- [ ] パフォーマンス改善（次のPRで対応予定）
```

2. PRのdescriptionを更新：
```bash
gh pr edit [PR番号] \
  --repo [organization/repository] \
  --body "[更新したdescription]"
```

### 6. プッシュとレビュー再依頼

1. 修正をプッシュ：
```bash
git push origin [ブランチ名]
```

2. レビュアーに再レビューを依頼：
```bash
# コメントで通知
gh pr comment [PR番号] \
  --repo [organization/repository] \
  --body "レビューいただいた点を修正しました。
  
対応内容:
- ✅ [対応項目1]
- ✅ [対応項目2]
  
再度ご確認をお願いします 🙏"

# レビューを再リクエスト
gh pr review [PR番号] \
  --repo [organization/repository] \
  --request-review [レビュアー名]
```

## 対応完了の確認

1. すべてのコメントに対応したか確認
2. CIが通っているか確認
3. 追加の質問や懸念事項がないか確認

## 重要なポイント

- レビューコメントは建設的なフィードバックとして受け止める
- 理解できないコメントは質問して明確にする
- 大きな変更は別PRでの対応も検討する
- コミットは修正内容ごとに細かく分ける