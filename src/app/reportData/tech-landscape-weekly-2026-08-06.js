export const report = {
  "id": "tech-landscape-weekly-2026-08-06",
  "title": "テック情勢週次レポート 2026-08-06週",
  "category": "テック情勢",
  "articleType": "weekly",
  "articleTypeLabel": "週次最新情報",
  "cadence": "週次で自動更新・追加",
  "tags": [
    "AI",
    "エンジニアリング",
    "セキュリティ",
    "規制",
    "開発者ツール"
  ],
  "summary": "2026年7月30日08:00 JSTから8月6日08:00 JSTまでの公開情報をもとに、GitHub ActionsとDependabotの供給網防御、8月2日に適用が始まったEUの生成AI透明性義務を整理した週次レポートです。",
  "publishedAt": "2026-08-06",
  "checkedAt": "2026-08-06",
  "sources": [
    {
      "title": "GitHub Changelog: GitHub Actions holds potentially malicious workflows for approval",
      "url": "https://github.blog/changelog/2026-07-28-github-actions-holds-potentially-malicious-workflows-for-approval/",
      "type": "一次情報",
      "publishedAt": "2026-07-28",
      "checkedAt": "2026-08-06"
    },
    {
      "title": "GitHub Changelog: Dependabot alerts on malicious packages across more ecosystems",
      "url": "https://github.blog/changelog/2026-07-28-dependabot-alerts-on-malicious-packages-across-more-ecosystems/",
      "type": "一次情報",
      "publishedAt": "2026-07-28",
      "checkedAt": "2026-08-06"
    },
    {
      "title": "European Commission: Code of Practice on Transparency of AI-Generated Content",
      "url": "https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content",
      "type": "規制当局資料",
      "publishedAt": "2026-07-20",
      "checkedAt": "2026-08-06"
    },
    {
      "title": "TechCrunch RSS",
      "url": "https://techcrunch.com/feed/",
      "type": "RSS",
      "checkedAt": "2026-08-06"
    },
    {
      "title": "Hacker News RSS",
      "url": "https://news.ycombinator.com/rss",
      "type": "RSS",
      "checkedAt": "2026-08-06"
    },
    {
      "title": "Product Hunt feed",
      "url": "https://www.producthunt.com/feed",
      "type": "配信元フィード",
      "checkedAt": "2026-08-06"
    },
    {
      "title": "Forrester Blogs feed",
      "url": "https://go.forrester.com/blogs/feed/",
      "type": "配信元フィード",
      "checkedAt": "2026-08-06"
    },
    {
      "title": "TechFeed Startup / Innovation",
      "url": "https://techfeed.io/feeds/categories/Startup%20%2F%20Innovation?userId=667a89b3185e12081e95a7b5",
      "type": "配信元フィード",
      "checkedAt": "2026-08-06"
    },
    {
      "title": "TechFeed Marketing",
      "url": "https://techfeed.io/feeds/categories/Marketing?userId=667a89b3185e12081e95a7b5",
      "type": "配信元フィード",
      "checkedAt": "2026-08-06"
    }
  ],
  "highlights": [
    "GitHub Actionsは、侵害された認証情報で投入される悪性ワークフローへの対策として、特定の疑わしい実行を開始前に書き込み権限を持つ共同作業者の承認待ちにする保護を自動適用した。",
    "Dependabot alertsはOpenSSF malicious-packagesプロジェクトのアドバイザリをGitHub Advisory Databaseへ取り込み、npm以外を含む悪性パッケージ検知の範囲を広げた。",
    "EU AI ActのArticle 50に関係する生成AIコンテンツの透明性義務は8月2日から適用され、生成物の検出可能なマーキングと、一定のdeepfake・公共の利益に関する生成テキストの表示が運用論点になった。",
    "今週の大きな変化は新モデルの発表より、AIを使う開発・公開運用における供給網防御と透明性証跡の実装へ集中した。"
  ],
  "lead": {
    "title": "今週の判断ポイント",
    "body": "AIの導入速度を上げるほど、CI/CDの実行権限と生成物の説明責任が弱点になりやすい。今週はGitHubが公開リポジトリの疑わしいActions実行を承認待ちにする保護を始め、EUでは生成AI透明性義務が適用された。モデル選定の前に、誰が実行を承認し、どの生成物にどの表示・証跡を残すかを運用設計として固定する必要がある。",
    "quote": "自動化は実行回数を増やす。したがって安全性は、検出精度だけでなく、実行前の停止、担当者の判断、事後に追跡できる証跡で評価する。"
  },
  "dashboardMetrics": [
    {
      "label": "対象期間",
      "value": "7日",
      "caption": "2026-07-30 08:00 JSTから2026-08-06 08:00 JSTまで。7月28日のGitHub発表を遡及参照",
      "tone": "primary"
    },
    {
      "label": "高優先度",
      "value": "3テーマ",
      "caption": "Actions実行承認、悪性依存関係、AI生成物透明性",
      "tone": "high"
    },
    {
      "label": "適用開始",
      "value": "8/2",
      "caption": "EU AI ActのArticle 50に関係する透明性義務",
      "tone": "deadline"
    },
    {
      "label": "取得エラー",
      "value": "1件",
      "caption": "ProductZine RSSがHTTP 403で取得不可",
      "tone": "primary"
    }
  ],
  "topicCards": [
    {
      "theme": "セキュリティ/開発者ツール",
      "title": "GitHub Actionsが疑わしいワークフローを実行前に承認待ちへ移す",
      "summary": "対象期間外の背景資料。GitHubは、侵害されたGitHub認証情報で悪性Actionsワークフローを投入しCI/CD認証情報を窃取する攻撃への対策として、特定のワークフロー実行を開始前に保留する保護を導入した。書き込み権限を持つ共同作業者が認証済みWebセッションで承認するまで実行されない。",
      "date": "2026-07-28",
      "sourceTitle": "GitHub Changelog: GitHub Actions holds potentially malicious workflows for approval",
      "sourceUrl": "https://github.blog/changelog/2026-07-28-github-actions-holds-potentially-malicious-workflows-for-approval/",
      "sourceType": "一次情報",
      "priority": "高",
      "timing": "対象期間外の7月28日発表を遡及参照",
      "relevance": 97,
      "relatedTags": [
        "セキュリティ",
        "エンジニアリング",
        "開発者ツール"
      ],
      "affected": [
        "リポジトリ管理者",
        "CI/CD担当",
        "セキュリティ担当",
        "リリース担当"
      ],
      "change": "GitHub.com上の公開リポジトリでは、GitHubが潜在的に悪性と判定した一部のワークフローを自動で保留し、実行前の人手承認を挟むようになった。",
      "importance": "自動適用で防御を補強できる一方、緊急リリース時の承認者不在は配送停止に直結する。GitHub Enterprise Serverには現時点で適用されない。",
      "implication": "保留通知の受け手、承認可否の基準、緊急時の連絡経路、保留されたworkflow YAMLの調査手順を明文化する。",
      "uncertainty": "どの条件で保留されるかは公開情報で網羅されていない。保護を、ワークフロー権限最小化や環境承認の代替とは扱わない。"
    },
    {
      "theme": "セキュリティ/オープンソース",
      "title": "DependabotがOpenSSFの悪性パッケージ情報を取り込み対象エコシステムを拡大",
      "summary": "対象期間外の背景資料。GitHub Advisory DatabaseはOpenSSF malicious-packagesリポジトリのマルウェアアドバイザリを取り込むようになった。悪性パッケージアラートが有効なリポジトリでは、追加されたアドバイザリと依存関係が一致した際にDependabot alertsが生成される。",
      "date": "2026-07-28",
      "sourceTitle": "GitHub Changelog: Dependabot alerts on malicious packages across more ecosystems",
      "sourceUrl": "https://github.blog/changelog/2026-07-28-dependabot-alerts-on-malicious-packages-across-more-ecosystems/",
      "sourceType": "一次情報",
      "priority": "高",
      "timing": "対象期間外の7月28日発表を遡及参照",
      "relevance": 95,
      "relatedTags": [
        "セキュリティ",
        "エンジニアリング"
      ],
      "affected": [
        "OSS利用チーム",
        "AppSec",
        "開発組織",
        "リポジトリ管理者"
      ],
      "change": "悪性パッケージ情報の取り込み元がOpenSSFへ拡張され、npmに加えPyPIなどを含むエコシステムで検知対象が広がった。",
      "importance": "新たな検知は既存依存関係にも通知を発生させうる。アラート件数の増加を放置すると、本当に緊急な侵害兆候を見落とす。",
      "implication": "悪性パッケージアラートの有効化状態、triage担当、隔離・ロールバック手順、lockfileとビルド成果物の追跡可能性を確認する。",
      "uncertainty": "アラートは依存関係の一致を示すもので、実行・侵害の確定ではない。影響範囲は成果物、実行ログ、資格情報の露出有無で別途調査する。"
    },
    {
      "theme": "AI/規制",
      "title": "EU AI Actの生成AI透明性義務が8月2日に適用開始",
      "summary": "European Commissionは、AI Act Article 50の透明性義務を支援する生成AIコンテンツ透明性コードを公開している。ページでは、生成・操作コンテンツの機械可読なマーキング、deepfakeおよび公共の利益に関する一定のAI生成・操作テキストの明確な表示などに関する義務が8月2日から適用されると説明する。",
      "date": "2026-08-02",
      "sourceTitle": "European Commission: Code of Practice on Transparency of AI-Generated Content",
      "sourceUrl": "https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content",
      "sourceType": "規制当局資料",
      "priority": "高",
      "timing": "すぐ",
      "relevance": 98,
      "relatedTags": [
        "AI",
        "規制",
        "プロダクト"
      ],
      "affected": [
        "生成AI提供者",
        "生成AI導入企業",
        "法務・コンプライアンス",
        "プロダクト責任者"
      ],
      "change": "生成AIコンテンツの透明性は将来のガイドライン検討ではなく、EU市場に関係する提供・導入時の実装と証跡管理を伴う論点になった。",
      "importance": "チャットボット、画像・音声生成、編集支援、公共性のある情報発信で、提供者・導入者・利用者の役割と表示箇所が分かれる。製品単位での把握不足が対応漏れを生む。",
      "implication": "対象サービス、コンテンツ種別、表示UI、機械可読なマーク、説明文、保存する証跡、外部委託先との責任分界を棚卸しする。",
      "uncertainty": "コードは任意の実務支援文書であり、署名や実装だけで適法性を保証しない。対象性と具体的な義務は法務確認と最新の当局資料で判断する。",
      "dateLabel": "適用開始日"
    },
    {
      "theme": "AI基盤・半導体・ブラウザ・OS・モバイルの採用記録",
      "title": "Hacker News確認記録での追加採用なし",
      "summary": "当時のHacker News確認記録では、AI基盤・半導体・ブラウザ・OS・モバイルの追加トピックを採用しなかった。取得時点の記事一覧と各ベンダーの個別発表は保存されておらず、対象期間全体で新規発表が存在しなかったことを示すものではない。",
      "date": "2026-08-06",
      "sourceTitle": "Hacker News RSS",
      "sourceUrl": "https://news.ycombinator.com/rss",
      "sourceType": "RSS",
      "priority": "低",
      "timing": "継続ウォッチ",
      "relevance": 60,
      "relatedTags": [
        "AI",
        "エンジニアリング"
      ],
      "affected": [
        "プロダクト責任者",
        "開発者"
      ],
      "change": "Hacker Newsの確認記録に限定した採用結果。",
      "importance": "未検証の話題をレポートに採用せず、意思決定を変える一次情報だけを継続追跡する。",
      "implication": "次週も主要ベンダー、規制当局、OSSプロジェクトの公式発表を確認する。",
      "uncertainty": "フィードは更新されるため、当時の全記事と各領域の公式発表を後から網羅的に検証できない。",
      "dateLabel": "確認日"
    }
  ],
  "actionCards": [
    {
      "owner": "リポジトリ管理者・CI/CD担当",
      "action": "公開リポジトリのActions承認待ちを担当者が判断できる運用へ更新する",
      "due": "1週間以内",
      "reason": "疑わしいワークフローの保留がリリースを止める可能性があるため、承認基準と連絡経路を先に決める。"
    },
    {
      "owner": "AppSec・OSS利用責任者",
      "action": "悪性パッケージアラートの有効化状態と緊急triage手順を確認する",
      "due": "1週間以内",
      "reason": "OpenSSF由来のアドバイザリ拡張で、既存依存関係にも新しい通知が発生しうるため。"
    },
    {
      "owner": "法務・AIガバナンス責任者",
      "action": "EU関連の生成AI機能をコンテンツ種別と透明性表示で棚卸しする",
      "due": "2週間以内",
      "reason": "8月2日に適用された透明性義務について、製品横断の対象性と責任分界を確認するため。"
    }
  ],
  "sections": [
    {
      "title": "調査条件",
      "items": [
        "主対象期間: 2026-07-30 08:00 JSTから2026-08-06 08:00 JSTまで。直近7日で重要な規制適用開始と供給網防御の変化を確認できたため、GitHubの7月28日発表とECの7月20日資料は対象期間外の背景資料として参照した。",
        "主要確認入口: TechCrunch、Hacker News、Product Hunt、ProductZine、Forrester Blogs、TechFeed Startup / Innovation、TechFeed Marketing。フィードは候補抽出に用い、判断に使う事実はGitHubとEuropean Commissionの個別一次情報・規制当局資料で確認した。"
      ]
    },
    {
      "title": "エグゼクティブサマリー",
      "items": [
        "供給網防御: Actionsの実行前保留とDependabotの悪性パッケージ検知拡張により、CI/CDと依存関係の両方で検知後の運用設計がより重要になった。",
        "AI規制: EUの生成AI透明性義務が適用され、コンテンツ表示と機械可読なマーキングを製品実装・証跡管理として扱う必要がある。",
        "短期対応: 承認者不在、アラートの未triage、生成物の表示漏れという運用ギャップを優先して確認する。"
      ]
    },
    {
      "title": "テーマ別の調査結果",
      "items": [
        "当時のHacker News確認記録では、この領域の追加トピックを採用しなかった。取得時点の記事一覧と各ベンダーの個別発表は保存されておらず、対象期間全体で新規発表が存在しなかったことを示すものではない。"
      ]
    },
    {
      "title": "注目すべき仮説と解くべき課題",
      "items": [
        "仮説: CI/CDの自動停止は検知の精度より、承認者が短時間で安全性を判断できるコンテキストを提供できるかで実効性が決まる。反証には保留件数、承認時間、誤承認、リリース遅延を計測する。",
        "仮説: 悪性パッケージ検知の拡張は、脆弱性管理を依存関係の更新作業から、成果物・資格情報・実行環境を含むインシデント対応へ近づける。",
        "解くべき課題: 依存関係アラートを受けたとき、lockfile、CIキャッシュ、公開済み成果物、シークレット露出を一貫して調査・隔離できるか。",
        "解くべき課題: 生成AIコンテンツについて、提供者・導入者の責任分界、表示、機械可読なマーキング、保存期間を製品横断で揃えられるか。",
        "大きな問題: 自動化の保護機構が増えるほど、例外承認が恒常運用になれば統制が形骸化する。承認ログと例外の定期レビューが必要になる。"
      ]
    },
    {
      "title": "今週検討すべき対応アクション",
      "items": []
    },
    {
      "title": "継続ウォッチすべきテーマ",
      "items": [
        "GitHub Actionsの保留保護の対象範囲、誤検知、GitHub Enterprise Serverへの展開。",
        "OpenSSF malicious-packages由来アドバイザリの増加、各エコシステムでの検知品質、アラートtriage負荷。",
        "EU AI Act Article 50の運用、透明性コード署名者、当局の追加ガイダンス。",
        "AIエージェントがCI/CDや依存関係更新を操作する際の権限分離と監査証跡。"
      ]
    },
    {
      "title": "取得エラー",
      "items": [
        "ProductZine: https://productzine.jp/rss/new/20/index.xml は HTTP 403: Forbidden のため取得できなかった。failure type: HTTPError 403。",
        "TechCrunch、Hacker News、Product Hunt、Forrester Blogs、TechFeed Startup / Innovation、TechFeed MarketingはHTTP 200で取得した。"
      ]
    }
  ]
};
