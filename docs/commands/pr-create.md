<div style="margin-bottom: 20px;">
  <a href="https://raw.githubusercontent.com/watanabeyu/cc-commands/main/docs/commands/pr-create.md" 
     target="_blank"
     style="display: inline-block; background-color: #6b7280; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-size: 14px;">
    📄 View Raw
  </a>
</div>

# PR Create

Pull Request作成のスペシャリストとして、issueに基づいたPR作成をサポートします。

## 概要

指定されたissueに基づいて、適切なブランチを作成し、PRのdescriptionを生成してPRを作成します。

## ワークフロー

### 1. 初期確認事項

1. 対象issueの情報を取得：
   - リポジトリ名（organization/repository形式）
   - issue番号

2. issue内容を確認：
```bash
gh issue view [issue番号] --repo [organization/repository]
```

3. 現在のブランチとリポジトリ状態を確認：
```bash
# 現在のブランチ
git branch --show-current

# リモートの最新状態を取得
git fetch origin

# mainブランチの最新状態を確認
git log origin/main --oneline -5
```

### 2. ブランチ作成

1. ブランチ名の提案：
   - 機能追加: `feature/issue-[番号]-[簡潔な説明]`
   - バグ修正: `fix/issue-[番号]-[簡潔な説明]`
   - その他: `chore/issue-[番号]-[簡潔な説明]`

2. ユーザーに確認後、ブランチを作成：
```bash
# mainから最新の状態で新規ブランチを作成
git checkout -b [ブランチ名] origin/main
```

### 3. 実装とコミット戦略

#### コミットメッセージのプレフィックス
- `feat:` 新機能
- `fix:` バグ修正
- `refactor:` リファクタリング
- `style:` スタイル変更
- `test:` テスト追加・修正
- `docs:` ドキュメント更新
- `chore:` その他の変更

#### ファイル種別ごとのコミット例
```bash
# 変更内容の確認
git status

# 1. モデル/スキーマの変更
git add app/models/* db/schema.rb
git commit -m "feat: Add User notification model (#[issue番号])"

# 2. コントローラーの追加
git add app/controllers/*
git commit -m "feat: Add notification controller actions (#[issue番号])"

# 3. ビューの追加
git add app/views/*
git commit -m "feat: Add notification views (#[issue番号])"

# 4. テストの追加
git add spec/* test/*
git commit -m "test: Add notification feature specs (#[issue番号])"

# 5. スタイル/UIの調整
git add app/assets/* app/javascript/*
git commit -m "style: Add notification UI styles (#[issue番号])"
```

### 4. PR descriptionの自動生成

issueの内容から以下のフォーマットでdescriptionを生成：

```markdown
#### 概要
[issueの概要セクションから引用・整形]

#### 解決する問題
- [issueから抽出した解決すべき課題]
- Closes #[issue番号]

#### 実装内容
[issueの詳細仕様・実装内容から抽出]
- [ ] [実装項目1]
- [ ] [実装項目2]
- [ ] [実装項目3]

#### 技術的な詳細
[issueの技術的な考慮事項から引用]

#### 動作確認
##### 確認項目
[issueの受け入れ条件から生成]
- [ ] [確認項目1]
- [ ] [確認項目2]

##### 確認手順
1. [基本フローから確認手順を生成]
2. ...

#### 注意事項
- [エッジケースや考慮事項]
```

### 5. Pull Request作成

```bash
# ブランチをプッシュ
git push -u origin [ブランチ名]

# PRを作成
gh pr create \
  --repo [organization/repository] \
  --base main \
  --head [ブランチ名] \
  --title "[PRタイトル]" \
  --body "[生成したdescription]" \
  --assignee "@me"
```

## Draft PRの活用

実装途中でもPRを作成し、進捗を可視化：
```bash
# Draft PRとして作成
gh pr create \
  --repo [organization/repository] \
  --base main \
  --head [ブランチ名] \
  --title "[WIP] [PRタイトル]" \
  --body "[生成したdescription]" \
  --draft
```