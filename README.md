# my-report-public

公開情報からわかる事実をもとに、調査レポートをまとめて一般公開するためのリポジトリです。

公開先は GitHub Pages を想定します。ログインや個人向け認証は不要で、静的に配信できる SPA として実装します。

## 目的

- 公開情報をもとにしたレポートを、誰でも読める形で公開する
- 出典、調査日、判断根拠を明示し、読者が検証しやすい内容にする
- GitHub Pages で低コストに公開・更新できる構成にする

## 実装方針

- フロントエンドは React SPA として作成する
- ビルドには Vite を使う
- スタイリングには Tailwind CSS を使う
- UI の軽いモーションには Motion for React を使う
- GitHub Pages で配信できる静的ビルドを前提にする
- ログイン、会員管理、サーバーサイドの永続化は持たない
- レポート本文、出典情報、更新日が追いやすい情報設計にする
- 公開情報のみを扱い、非公開情報や機密情報を含めない

## ディレクトリ構成

```text
.
├── src/              # ビルド前の SPA ソース
│   ├── app/          # React コンポーネント、ルーティング、レポートデータ
│   │   └── reportData/ # 1ファイル1レポートの本文データ
│   ├── assets/       # Tailwind CSS エントリーポイント
│   └── index.html    # SPA のエントリーポイント
├── dist/             # ビルド後の公開対象。GitHub Actions で生成し、Git管理しない
├── .github/          # GitHub Actions workflow
├── vite.config.js    # Vite / React / Tailwind 設定
└── test/             # Vitest のテスト
```

`src/` を編集し、`npm run build` で `dist/` を生成します。レポート本文は `src/app/reportData/` に1レポート1ファイルで追加し、タグ定義は `src/app/tagDefinitions.js` で管理します。GitHub Pages では GitHub Actions が生成した `dist/` を公開対象にします。

## コマンド

```bash
npm ci
npm run dev
npm run test
npm run build
npm run preview
```

`npm run dev` は開発サーバーを起動します。`npm run preview` は `dist/` をローカル配信するため、先に `npm run build` を実行してください。

## アクセス解析

Google Analytics 4 を利用して、公開サイトの閲覧状況を確認します。

- デフォルトの Measurement ID は `G-95VGGHF660` です
- 別の ID を使う場合は、build 時に `VITE_GA_MEASUREMENT_ID` を設定します
- `localhost`、`127.0.0.1`、`::1` では送信しません
- SPA の hash route 変更に合わせて、`page_view` を手動送信します
- gtag の自動 `page_view` は無効化し、二重計測を避けます
- 出典リンククリックは `source_click` イベントとして送信します
- 個人を直接識別する情報や非公開情報は送信しません

## 開発方針

このリポジトリでは t-wada 式 TDD を基本にします。

1. 失敗するテストを書く
2. テストを通す最小限の実装を書く
3. テストが通る状態を保ったままリファクタリングする

機能追加や修正では、まず期待する振る舞いをテストで表現し、その後に実装します。

## レポート作成方針

- 公開情報から確認できる内容だけを書く
- 断定できない内容は、推測として扱わず不明または未確認と明記する
- 出典 URL、公開日または確認日を記録する
- 古くなりやすい情報は、確認日を明示する
- 著作権上問題のある長文転載を避け、要約と短い引用にとどめる

## レポートページの表現方針

記事詳細ページは、調査結果をそのまま長文テキストとして並べるのではなく、読者が判断しやすい形に構造化します。

- 冒頭に概要、判断ポイント、重要な期限、注意点を置く
- 重要度、対応優先度、関連度、期限、一次情報か二次情報かを視覚的に分かるようにする
- テーマ別の本文は、トピックカード、アクションカード、メトリクス、タグ、関連主体、引用元カードなどに分解する
- 出典は URL 文字列だけでなく、出典名、種別、公開日または確認日、リンクとして表示する
- 重要な新規情報がないテーマも、確認範囲と継続ウォッチ理由が分かるように記載する
- UI 変更時は、主要な見出し、指標、リンク、カード表示をテストで固定する

## 公開方法

GitHub Pages を使って公開します。公開元は GitHub Actions です。

公開 URL: https://yuki-koma2.github.io/my-report-public/

`main` に変更が push されるたびに `.github/workflows/deploy-pages.yml` が起動します。

1. `npm run test` でテストを実行する
2. `npm run build` で `src/` から `dist/` を生成する
3. `dist/` を GitHub Pages artifact としてアップロードする
4. GitHub Pages にデプロイする
5. デプロイ成功後に `deploy/pages/YYYYMMDD-HHMMSS-<run-number>-<short-sha>` 形式のタグを作成する

pull request では test/build まで実行し、デプロイとタグ作成は行いません。`dist/` はPR差分に含めず、GitHub Pages の設定では、Build and deployment の Source を `GitHub Actions` にします。

## 初期セットアップ

現時点では、React / Tailwind CSS / Motion for React を使ったサンプル SPA を用意しています。今後必要になった段階で、レポートページの追加や追加の CI 設定を導入します。
