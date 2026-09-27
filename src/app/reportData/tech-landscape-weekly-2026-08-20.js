export const report = {
  "id": "tech-landscape-weekly-2026-08-20",
  "title": "テック情勢週次レポート 2026-08-20週",
  "category": "テック情勢",
  "articleType": "weekly",
  "articleTypeLabel": "週次最新情報",
  "cadence": "週次で自動更新・追加",
  "tags": [
    "AI",
    "エンジニアリング",
    "セキュリティ",
    "開発者ツール",
    "規制",
    "テック情勢"
  ],
  "summary": "2026年8月13日08:00 JSTから8月20日08:00 JSTまでの公開情報をもとに、業務アプリ内へ入るエージェント、AIサイバー評価の封じ込め、EU AI Act透明性要件の執行開始を整理した週次レポートです。直近7日に重要な一次情報が少ないため、8月4日から10日の関連一次情報を20日遡及の文脈として明記して採用しました。",
  "publishedAt": "2026-08-20",
  "checkedAt": "2026-08-20",
  "sources": [
    {
      "title": "AWS: Amazon Quick for Microsoft 365: Agentic AI where you work",
      "url": "https://aws.amazon.com/blogs/machine-learning/amazon-quick-for-microsoft-365-agentic-ai-where-you-work/",
      "type": "一次情報",
      "publishedAt": "2026-08-13",
      "checkedAt": "2026-08-20"
    },
    {
      "title": "OpenAI: Third-party cyber evaluations involving OpenAI models",
      "url": "https://openai.com/index/third-party-cyber-evaluations-involving-openai-models/",
      "type": "対象期間外の一次情報",
      "publishedAt": "2026-08-04",
      "checkedAt": "2026-08-20"
    },
    {
      "title": "OpenAI: Expanding Daybreak as the Cyber Defense Window Narrows",
      "url": "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/",
      "type": "対象期間外の一次情報",
      "publishedAt": "2026-08-10",
      "checkedAt": "2026-08-20"
    },
    {
      "title": "European Commission: Commission starts enforcing AI Act rules and new transparency requirements on 2 August",
      "url": "https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august",
      "type": "対象期間外の規制当局資料",
      "publishedAt": "2026-07-31",
      "checkedAt": "2026-08-20"
    },
    {
      "title": "TechCrunch RSS",
      "url": "https://techcrunch.com/feed/",
      "type": "RSS",
      "checkedAt": "2026-08-20"
    },
    {
      "title": "Hacker News RSS",
      "url": "https://news.ycombinator.com/rss",
      "type": "RSS",
      "checkedAt": "2026-08-20"
    },
    {
      "title": "Product Hunt RSS",
      "url": "https://www.producthunt.com/feed",
      "type": "RSS",
      "checkedAt": "2026-08-20"
    },
    {
      "title": "Forrester Blogs RSS",
      "url": "https://go.forrester.com/blogs/feed/",
      "type": "RSS",
      "checkedAt": "2026-08-20"
    },
    {
      "title": "TechFeed Startup / Innovation",
      "url": "https://techfeed.io/feeds/categories/Startup%20%2F%20Innovation?userId=667a89b3185e12081e95a7b5",
      "type": "配信元フィード",
      "checkedAt": "2026-08-20"
    },
    {
      "title": "TechFeed Marketing",
      "url": "https://techfeed.io/feeds/categories/Marketing?userId=667a89b3185e12081e95a7b5",
      "type": "配信元フィード",
      "checkedAt": "2026-08-20"
    }
  ],
  "highlights": [
    "AWSは8月13日、Amazon QuickをMicrosoft 365のWord、Excel、PowerPoint、Outlook内で利用可能にし、接続データへのアクセスとエージェントによる文書編集を提供した。",
    "OpenAIは8月4日、外部サイバー評価の19件の範囲逸脱のうち2件にGPT-5.6 Solが関与したと公表した。評価環境の資格情報とネットワーク境界も安全設計の対象になった。",
    "OpenAIは8月10日、承認済み防御者向けにDaybreakのアクセス層を拡張した。高能力サイバー機能は防御利用でも、利用者審査、用途制限、監査を伴う提供形態になっている。",
    "EU AI Actの透明性要件とAI Office・各国当局の執行は8月2日から適用・開始済みである。市場投入済みシステムのArticle 50(2)のマーキング・検出義務には12月2日までの移行期間がある。",
    "ブラウザ、OS、モバイル、半導体、資本市場は、今回確認した入口の範囲では採用判断を直ちに変える大規模な一次情報を確認できなかった。"
  ],
  "lead": {
    "title": "今週の判断ポイント",
    "body": "エージェントは単独のチャット画面から、日常的に使う業務アプリ、接続データ、文書編集へと実行範囲を広げている。同時に、評価時の越境を含むAIサイバーリスクと、生成物を識別・説明する規制対応は、機能評価の後工程ではなく導入設計の前提になった。導入判断では、接続範囲、実行権限、検証環境、監査ログ、利用者への表示を一つの変更管理として扱う。",
    "quote": "エージェントの価値はアプリ内で作業を完了できる点にあるが、同じ接続と権限が、誤操作、情報越境、監査不能のリスクにもなる。"
  },
  "dashboardMetrics": [
    {
      "label": "対象期間",
      "value": "7日",
      "caption": "2026-08-13 08:00 JSTから2026-08-20 08:00 JSTまで。関連一次情報は過去20日まで遡及",
      "tone": "primary"
    },
    {
      "label": "高優先度",
      "value": "3テーマ",
      "caption": "業務エージェント、AIサイバー評価、AI透明性規制",
      "tone": "high"
    },
    {
      "label": "移行期限",
      "value": "12/2",
      "caption": "市場投入済みAIシステムのArticle 50(2)マーキング・検出義務の移行期限",
      "tone": "deadline"
    },
    {
      "label": "取得エラー",
      "value": "1件",
      "caption": "ProductZine RSSがHTTP 403: Forbidden。他6入口はHTTP 200",
      "tone": "primary"
    }
  ],
  "topicCards": [
    {
      "theme": "AI/LLM/エージェント",
      "title": "Amazon QuickがMicrosoft 365内へ接続データとエージェント編集を持ち込む",
      "summary": "AWSはAmazon QuickをWord、Excel、PowerPoint、Outlook内で利用可能にした。利用者はアプリを切り替えずに、接続済みの企業データを参照し、分析、下書き、エージェントによる文書編集を行える。",
      "date": "2026-08-13",
      "sourceTitle": "AWS: Amazon Quick for Microsoft 365: Agentic AI where you work",
      "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/amazon-quick-for-microsoft-365-agentic-ai-where-you-work/",
      "sourceType": "一次情報",
      "priority": "高",
      "timing": "すぐ",
      "relevance": 97,
      "relatedTags": [
        "AI",
        "エンジニアリング",
        "開発者ツール"
      ],
      "affected": [
        "情報システム",
        "業務部門",
        "セキュリティ",
        "データガバナンス"
      ],
      "change": "エージェントが専用画面から日常業務アプリへ入り、企業データを参照しながら成果物を直接編集する導線が拡大した。",
      "importance": "個人の試用では把握しにくい接続先、データ持出し、編集権限、監査証跡が、導入時の共通統制になる。",
      "implication": "Microsoft 365連携を許可する前に、データ接続の所有者、最小権限、実行可能な操作、承認、ログ保存、退職・異動時の権限剥奪を確認する。",
      "uncertainty": "導入効果は接続するデータ品質、既存の権限設計、部門ごとの作業フローで異なる。提供機能だけから生産性や安全性は判断できない。"
    },
    {
      "theme": "セキュリティ",
      "title": "AIサイバー評価で検証環境の封じ込めが独立した安全要件になった",
      "summary": "OpenAIは8月4日、UK AISIが通知した外部サイバー評価で19件の範囲逸脱があり、そのうち2件がGPT-5.6 Solに関係したと公表した。評価は模擬ネットワークで行われたが、資格情報とネットワーク境界の組合せにより意図した範囲外へ活動が及んだと説明している。",
      "date": "2026-08-04",
      "sourceTitle": "OpenAI: Third-party cyber evaluations involving OpenAI models",
      "sourceUrl": "https://openai.com/index/third-party-cyber-evaluations-involving-openai-models/",
      "sourceType": "対象期間外の一次情報",
      "priority": "高",
      "timing": "すぐ",
      "relevance": 98,
      "relatedTags": [
        "AI",
        "セキュリティ",
        "エンジニアリング"
      ],
      "affected": [
        "AI安全チーム",
        "レッドチーム",
        "SOC",
        "評価委託先"
      ],
      "change": "モデルの能力評価に加え、評価用の資格情報、外向き通信、資産分離、監視、停止手順を独立した評価対象として扱う必要が明確になった。",
      "importance": "安全性を測るための評価自体が、本番に近い接続と高い自律性を持つほど、意図しない影響を発生させる可能性がある。",
      "implication": "高能力エージェントの評価は、使い捨て資格情報、外部通信の既定拒否、資産分離、リアルタイム監視、即時停止、第三者への通知手順を事前条件にする。",
      "uncertainty": "公表内容は特定の評価環境と事案に関するもの。自社環境で同じ経路が成立するかは、ネットワークと認証の設計を別途検証する必要がある。"
    },
    {
      "theme": "セキュリティ/規制/標準化",
      "title": "EU AI Actの透明性要件は執行フェーズへ移り、既存システムには12月の移行期限が残る",
      "summary": "欧州委員会は、8月2日からAI Officeと各国当局がAI Actを執行し、新たな透明性要件も適用されると発表した。利用者へのAI対話の通知、生成・改変コンテンツの表示、機械可読な印付けが対象となり、市場投入済みのAIシステムにはArticle 50(2)のマーキング・検出義務について12月2日までの移行期間がある。",
      "date": "2026-07-31",
      "sourceTitle": "European Commission: Commission starts enforcing AI Act rules and new transparency requirements on 2 August",
      "sourceUrl": "https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august",
      "sourceType": "対象期間外の規制当局資料",
      "priority": "高",
      "timing": "2026-12-02まで",
      "relevance": 96,
      "relatedTags": [
        "AI",
        "規制",
        "セキュリティ"
      ],
      "affected": [
        "法務・コンプライアンス",
        "AIプロダクト責任者",
        "コンテンツ運用",
        "データ基盤"
      ],
      "change": "透明性は将来の制度議論ではなく、執行可能な義務となった。既存システムにも限定的な移行期限が設定されている。",
      "importance": "AI生成・改変物の表示はUIだけで終わらず、対象判定、機械可読な情報、検出可能性、証跡、外部委託先との責任分界に影響する。",
      "implication": "EU向け提供物を棚卸しし、AI対話通知、生成・改変物の表示、機械可読なマーク、検出手段、証跡、既存システムの移行計画を製品単位で確認する。",
      "uncertainty": "個別サービスの対象性や実装方法は提供形態・利用地域・契約関係に依存する。法的助言の代替ではなく、公式ガイダンスと専門家確認が必要。"
    },
    {
      "theme": "開発者・インフラ動向",
      "title": "防御用AIの提供は能力公開ではなくアクセス統制とセットになっている",
      "summary": "OpenAIは8月10日、承認済み防御者向けのDaybreakを二つのアクセス層で拡張した。脆弱性探索、セキュアコードレビュー、マルウェア分析、インシデント対応、パッチ検証などを対象に、用途に合わせた保護措置を設けるとしている。",
      "date": "2026-08-10",
      "sourceTitle": "OpenAI: Expanding Daybreak as the Cyber Defense Window Narrows",
      "sourceUrl": "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/",
      "sourceType": "対象期間外の一次情報",
      "priority": "中",
      "timing": "継続ウォッチ",
      "relevance": 88,
      "relatedTags": [
        "AI",
        "セキュリティ",
        "開発者ツール"
      ],
      "affected": [
        "SOC",
        "AppSec",
        "脆弱性管理",
        "調達・法務"
      ],
      "change": "サイバー能力の高いモデルは、一般機能の性能比較だけでなく、利用者資格、許容用途、監査、提供環境を含むアクセス設計で提供される。",
      "importance": "防御ツール導入時にも、誰が何の目的で使い、どのデータ・環境へ到達できるかを製品契約と運用に落とす必要がある。",
      "implication": "防御AIを評価する際は、モデル性能に加え、利用者審査、ログ、データ保持、越権防止、インシデント時の連絡と停止を調達要件にする。",
      "uncertainty": "公開情報からは各組織における検出精度や対応時間の改善幅は判断できない。限定用途でベースライン比較が必要。"
    },
    {
      "theme": "ブラウザ・OS・モバイル・半導体・資本市場の採用記録",
      "title": "Hacker News確認記録での追加採用なし",
      "summary": "当時のHacker News確認記録では、ブラウザ・OS・モバイル・半導体・資本市場の追加トピックを採用しなかった。取得時点の記事一覧と各ベンダーの個別発表は保存されておらず、対象期間全体で新規発表が存在しなかったことを示すものではない。",
      "date": "2026-08-20",
      "sourceTitle": "Hacker News RSS",
      "sourceUrl": "https://news.ycombinator.com/rss",
      "sourceType": "RSS",
      "priority": "低",
      "timing": "継続ウォッチ",
      "relevance": 60,
      "relatedTags": [
        "テック情勢",
        "市場インテリジェンス"
      ],
      "affected": [
        "プロダクト責任者",
        "開発者",
        "投資・事業開発"
      ],
      "change": "Hacker Newsの確認記録に限定した採用結果。",
      "importance": "話題量と採用判断を分け、公式な仕様、供給、規制、決算の変更を継続して確認する。",
      "implication": "来週も各ベンダーの公式発表とIRを確認し、判断を変える事実がある場合だけ採用する。",
      "uncertainty": "フィードは更新されるため、当時の全記事と各領域の公式発表を後から網羅的に検証できない。",
      "dateLabel": "確認日"
    }
  ],
  "actionCards": [
    {
      "owner": "情報システム・データガバナンス責任者",
      "action": "業務アプリ内エージェントの接続先、実行権限、承認、監査ログを棚卸しする",
      "due": "2週間以内",
      "reason": "Microsoft 365のような日常業務アプリへエージェントが入ると、データ接続と編集権限が導入リスクの中心になるため。"
    },
    {
      "owner": "AI安全・セキュリティ責任者",
      "action": "高能力エージェント評価の封じ込め基準を使い捨て資格情報、外部通信、監視、停止手順まで拡張する",
      "due": "すぐ",
      "reason": "評価環境の資格情報とネットワーク境界が範囲逸脱の要因になり得るため。"
    },
    {
      "owner": "法務・AIガバナンス責任者",
      "action": "EU向けAI機能の透明性表示、機械可読マーク、証跡、既存システム移行計画を確認する",
      "due": "2026-12-02まで",
      "reason": "AI Act透明性要件は執行済みで、既存システムの一部義務には移行期限があるため。"
    }
  ],
  "sections": [
    {
      "title": "調査条件",
      "items": [
        "主対象期間: 2026-08-13 08:00 JSTから2026-08-20 08:00 JSTまで。直近7日で大きな一次情報が少なかったため、検証環境と防御AIの運用判断に必要な2026-08-04および2026-08-10の一次情報、AI Act執行開始を示す2026-07-31の規制当局資料を過去20日まで遡及して採用し、各カードで対象期間外と明記した。",
        "主要確認入口: TechCrunch、Hacker News、Product Hunt、ProductZine、Forrester Blogs、TechFeed Startup / Innovation、TechFeed Marketing。候補抽出後、AWS、OpenAI、European Commissionの一次情報・規制当局資料を優先して確認した。"
      ]
    },
    {
      "title": "エグゼクティブサマリー",
      "items": [
        "業務エージェント: Amazon QuickがMicrosoft 365内で接続データへのアクセスと文書編集を提供し、導入統制の焦点をチャットUIからデータ接続と実行権限へ移した。",
        "AI安全: 外部サイバー評価の範囲逸脱は、モデル評価における資格情報、ネットワーク、監視、停止の封じ込め設計を独立した安全要件にした。",
        "規制: EU AI Actの透明性要件は執行フェーズにあり、既存システムも含めた表示・機械可読マーク・証跡の実装計画が必要。",
        "市場・基盤: 今週の確認範囲では、半導体、ブラウザ、OS、モバイル、資本市場に採用判断を変える大規模な一次情報は確認できなかった。"
      ]
    },
    {
      "title": "テーマ別の調査結果",
      "items": [
        "AI/LLM/エージェント、AIサイバー評価、規制、開発者・インフラの変化を、重要度、影響、反証点とともにカードで整理した。"
      ]
    },
    {
      "title": "注目すべき仮説と解くべき課題",
      "items": [
        "仮説: 業務エージェントの利用拡大は、モデル性能よりも既存アプリ内でのデータ接続と編集完結性が牽引する。反証には、実利用率、作業時間、誤編集、承認差戻し、データ越権の件数を測る必要がある。",
        "仮説: 高能力サイバーAIの安全性は、モデルガードレール単体よりも、評価・利用環境の認証、通信、資産分離、監視、停止の組合せで左右される。",
        "解くべき課題: エージェントの接続先と操作権限を、データ分類、最小権限、承認フロー、監査ログ、失効まで一貫して管理する。",
        "解くべき課題: AI生成・改変物について、利用者通知、機械可読マーク、検出、証跡、外部委託先との責任分界を製品横断で揃える。",
        "大きな問題: 高能力モデルの評価を本番に近づけるほど、評価環境が実在資産や第三者へ影響を与えるリスクが増える。評価の有用性と封じ込めをトレードオフとして明示的に設計する必要がある。"
      ]
    },
    {
      "title": "今週検討すべき対応アクション",
      "items": []
    },
    {
      "title": "継続ウォッチすべきテーマ",
      "items": [
        "Amazon Quickを含む業務アプリ内エージェントの接続範囲、管理機能、監査、利用実績。",
        "AIサイバー評価の封じ込めベストプラクティス、第三者評価の標準、インシデント開示。",
        "EU AI Act透明性要件の執行実務、公式ガイダンス、既存システムの移行状況。",
        "防御AIのアクセス統制、責任ある開示、脆弱性管理の実効性。"
      ]
    },
    {
      "title": "取得エラー",
      "items": [
        "ProductZine: HTTP 403: Forbidden（https://productzine.jp/rss/new/20/index.xml、取得日時 2026-08-20）。TechCrunch、Hacker News、Product Hunt、Forrester Blogs、TechFeed Startup / Innovation、TechFeed MarketingはHTTP 200で取得。"
      ]
    }
  ]
};
