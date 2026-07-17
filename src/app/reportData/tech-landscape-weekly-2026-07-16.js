export const report = {
  id: "tech-landscape-weekly-2026-07-16",
  title: "テック情勢週次レポート 2026-07-16週",
  category: "テック情勢",
  articleType: "weekly",
  articleTypeLabel: "週次最新情報",
  cadence: "週次で自動更新・追加",
  tags: ["AI", "エンジニアリング", "セキュリティ", "規制", "スタートアップ", "資金調達", "市場インテリジェンス"],
  summary: "2026年7月9日00:00 JSTから7月16日17:00 JSTまでの公開情報をもとに、GPT-5.6、開発セキュリティのエージェント化、EU AI生成物透明性対応、AI半導体資本競争を整理した週次レポートです。",
  publishedAt: "2026-07-16",
  checkedAt: "2026-07-16",
  sources: [
    { title: "OpenAI: GPT-5.6: Frontier intelligence that scales with your ambition", url: "https://openai.com/index/gpt-5-6/", type: "一次情報", publishedAt: "2026-07-09", checkedAt: "2026-07-16" },
    { title: "GitHub Changelog: Agentic autofix for code scanning alerts in public preview", url: "https://github.blog/changelog/2026-07-10-agentic-autofix-for-code-scanning-alerts-in-public-preview/", type: "一次情報", publishedAt: "2026-07-10", checkedAt: "2026-07-16" },
    { title: "GitHub Changelog: CodeQL 2.26.0 adds Kotlin 2.4.0 support and AI prompt injection detection", url: "https://github.blog/changelog/2026-07-10-codeql-2-26-0-adds-kotlin-2-4-0-support-and-ai-prompt-injection-detection/", type: "一次情報", publishedAt: "2026-07-10", checkedAt: "2026-07-16" },
    { title: "European Commission: Signing the Code of Practice on transparency of AI-generated content", url: "https://digital-strategy.ec.europa.eu/en/faqs/signing-code-practice-transparency-ai-generated-content", type: "対象期間外の規制当局資料", publishedAt: "2026-07-08", checkedAt: "2026-07-16" },
    { title: "TechCrunch: AI chip maker SambaNova raises $1B at $11B valuation", url: "https://techcrunch.com/2026/07/08/sambanova-draws-1b-at-11b-valuation-in-series-f-first-close/", type: "対象期間外のメディア記事", publishedAt: "2026-07-08", checkedAt: "2026-07-16" },
    { title: "GitHub Changelog: Code scanning shows AI security detections on pull requests", url: "https://github.blog/changelog/2026-07-14-code-scanning-shows-ai-security-detections-on-pull-requests/", type: "一次情報", publishedAt: "2026-07-14", checkedAt: "2026-07-16" },
    { title: "Hacker News RSS", url: "https://news.ycombinator.com/rss", type: "RSS", checkedAt: "2026-07-16" },
    { title: "TechCrunch RSS", url: "https://techcrunch.com/feed/", type: "RSS", checkedAt: "2026-07-16" }
  ],
  highlights: [
    "OpenAIはGPT-5.6をChatGPT、Codex、APIで提供し、Responses APIでは並列サブエージェントを統合するmulti-agent betaを公開した。",
    "GitHubはコードスキャン警告をCopilotへ割り当て、修正、CodeQL再検証、draft PR作成まで進めるagentic autofixを公開プレビューにした。",
    "CodeQL 2.26.0は、信頼できない入力がAIモデルのsystem promptへ流入する経路を検出するJavaScript/TypeScript queryを追加した。",
    "対象期間開始前日のEU規制資料では、透明性コード初期署名期限が2026年7月22日18:00 CEST、関連するAI Actの義務適用が8月2日と示されており、直近期限の判断材料として持ち越した。",
    "SambaNovaの調達は対象期間開始前日の二次情報であり、今週の資本市場文脈を理解するための持ち越し参考情報として扱う。"
  ],
  lead: {
    title: "今週の判断ポイント",
    body: "AIの競争軸は単一モデルの性能から、複数エージェントを動かす実行基盤、AIが生むコードを検証するセキュリティ、生成物を識別可能にする規制対応へ広がった。今週はモデル更新を試すだけでなく、権限、予算、検証、監査、透明性表示を一つの運用設計として見直す必要がある。",
    quote: "エージェントの自動化範囲が広がるほど、性能評価と同じ速度で権限境界、検証経路、コスト上限、生成物の説明責任を実装する必要がある。"
  },
  dashboardMetrics: [
    { label: "対象期間", value: "7日", caption: "2026-07-09 00:00 JSTから2026-07-16 17:00 JSTまで。14日遡及なし", tone: "primary" },
    { label: "短期対応期限", value: "7/22", caption: "EU透明性コードの初期署名期限。義務適用は8月2日", tone: "deadline" },
    { label: "高優先度", value: "3テーマ", caption: "マルチエージェント、開発セキュリティ、AI透明性規制", tone: "high" },
    { label: "取得エラー", value: "0件", caption: "主要確認入口7件はすべてHTTP 200で取得", tone: "primary" }
  ],
  topicCards: [
    {
      theme: "AI/LLM/エージェント",
      title: "GPT-5.6がマルチエージェント実行をAPIの標準機能へ近づける",
      summary: "OpenAIはGPT-5.6のSol、Terra、LunaをChatGPT、Codex、APIで提供した。Responses APIのmulti-agent betaでは、並列サブエージェントを動かし、その結果を単一リクエストで統合できる。",
      date: "2026-07-09", sourceTitle: "OpenAI: GPT-5.6: Frontier intelligence that scales with your ambition", sourceUrl: "https://openai.com/index/gpt-5-6/", sourceType: "一次情報", priority: "高", timing: "すぐ", relevance: 98,
      relatedTags: ["AI", "エンジニアリング"], affected: ["AIプロダクト責任者", "AI基盤チーム", "開発者", "FinOps担当"],
      change: "複数エージェントの並列実行と統合が、個別実装ではなくモデルAPIの提供機能になり始めた。",
      importance: "複雑な調査や開発を短時間化できる一方、総トークン、並列ツール実行、権限、失敗時の再試行がコストと安全性を左右する。",
      implication: "単一モデル比較に加え、タスク分解、同時実行数、予算上限、監査ログ、最終統合品質を評価項目に加える。",
      uncertainty: "OpenAI自身の評価値は実運用の品質を保証しない。自社タスクでの成功率、レイテンシ、総費用、誤操作率を反証確認する必要がある。"
    },
    {
      theme: "開発者・インフラ動向",
      title: "GitHubがコードスキャン修正をエージェントへ委任できる公開プレビューを開始",
      summary: "agentic autofixは関連ファイルを調べ、修正を作り、CodeQLを再実行して警告が閉じることを確認し、レビュー用draft PRを作る。利用にはGitHub Code Security等とCopilot cloud agentが必要で、AI CreditsとActions minutesを消費する。",
      date: "2026-07-10", sourceTitle: "GitHub Changelog: Agentic autofix for code scanning alerts in public preview", sourceUrl: "https://github.blog/changelog/2026-07-10-agentic-autofix-for-code-scanning-alerts-in-public-preview/", sourceType: "一次情報", priority: "高", timing: "すぐ", relevance: 96,
      relatedTags: ["AI", "エンジニアリング", "セキュリティ"], affected: ["AppSec", "開発組織", "GitHub管理者", "FinOps担当"],
      change: "脆弱性の検出後に人が修正する流れから、エージェントが修正と再検証を行いPRを出す流れへ自動化範囲が広がった。",
      importance: "修正待ち時間を縮められる一方、誤修正、テスト不足、AI Credits、Actions minutes、レビュー責任の管理が必要になる。",
      implication: "低リスク警告から試行し、draft PR、必須レビュー、テスト、ロールバック、月次予算上限を導入条件にする。",
      uncertainty: "公開プレビューの修正成功率と誤修正率は組織固有であり、CodeQL再実行だけでは業務回帰を証明できない。"
    },
    {
      theme: "セキュリティ/標準化",
      title: "CodeQLがsystem promptへの非信頼入力を静的解析の対象にする",
      summary: "CodeQL 2.26.0はJavaScript/TypeScript向けにjs/system-prompt-injection queryを追加し、非信頼のユーザー入力がAIモデルのsystem promptへ流れる経路を検出する。OpenAI、Anthropic、GoogleのGenAI SDK APIに対応するsinkも拡張した。",
      date: "2026-07-10", sourceTitle: "GitHub Changelog: CodeQL 2.26.0 adds Kotlin 2.4.0 support and AI prompt injection detection", sourceUrl: "https://github.blog/changelog/2026-07-10-codeql-2-26-0-adds-kotlin-2-4-0-support-and-ai-prompt-injection-detection/", sourceType: "一次情報", priority: "中", timing: "すぐ", relevance: 92,
      relatedTags: ["AI", "セキュリティ", "エンジニアリング"], affected: ["AppSec", "AIアプリ開発者", "コードレビュー担当"],
      change: "プロンプトインジェクション対策が設計レビューだけでなく、通常の静的解析パイプラインへ入り始めた。",
      importance: "AI固有リスクを既存DevSecOpsへ統合できるが、データフロー検知は実行時のツール権限や間接注入をすべて覆わない。",
      implication: "静的解析、実行時ガード、ツールallowlist、出力検証、攻撃テストを重ねた防御にする。",
      uncertainty: "false positive、false negative、独自ラッパーの認識率、間接prompt injectionへの有効性は自社コードで検証が必要。"
    },
    {
      theme: "セキュリティ/規制/標準化",
      title: "EUのAI生成物透明性コードは初期署名期限が7月22日に迫る",
      summary: "対象期間開始前日のEU規制資料を、7月22日の直近期限を判断するための持ち越し情報として採用した。EU AI OfficeはAI生成物透明性コードの初期署名フォームを2026年7月22日18:00 CESTまで受け付け、Article 50の関連義務は8月2日から適用される。",
      date: "2026-07-08", sourceTitle: "European Commission: Signing the Code of Practice on transparency of AI-generated content", sourceUrl: "https://digital-strategy.ec.europa.eu/en/faqs/signing-code-practice-transparency-ai-generated-content", sourceType: "対象期間外の規制当局資料", priority: "高", timing: "2026-07-22まで", relevance: 97,
      relatedTags: ["AI", "規制"], affected: ["生成AI提供者", "生成AI導入企業", "法務・コンプライアンス", "プロダクト責任者"],
      change: "生成・操作されたコンテンツの識別と表示が、方針検討から直近の申請・実装期限を伴う運用課題になった。",
      importance: "EU域外企業でもEU市場へ生成AIを提供・導入する場合に対象となりうるため、提供者と導入者の役割整理が必要。",
      implication: "対象サービス、生成物種別、表示箇所、機械可読マーキング、責任者、証跡を棚卸しし、署名判断を経営レベルで行う。",
      uncertainty: "コードへの署名自体が自動的に適法性を保証するわけではなく、適合性評価と各当局の運用を継続確認する必要がある。"
    },
    {
      theme: "スタートアップ/市場/資本",
      title: "SambaNovaの大型調達が推論基盤の選択肢拡大と資本集中を示す",
      summary: "TechCrunchは7月8日、SambaNovaがSeries Fのfirst closeで10億ドルを調達し評価額110億ドルになったと報じた。対象期間開始前日の情報のため、今週の資本市場文脈を補う持ち越し情報として扱う。",
      date: "2026-07-08", sourceTitle: "TechCrunch: AI chip maker SambaNova raises $1B at $11B valuation", sourceUrl: "https://techcrunch.com/2026/07/08/sambanova-draws-1b-at-11b-valuation-in-series-f-first-close/", sourceType: "対象期間外のメディア記事", priority: "中", timing: "継続ウォッチ", relevance: 83,
      relatedTags: ["AI", "スタートアップ", "資金調達"], affected: ["AIインフラ企業", "半導体企業", "大規模AI利用企業", "投資家"],
      change: "推論向け専用システムへ大型資本が流れ、クラウドGPU以外のオンプレミス・異種基盤が競争軸として残っている。",
      importance: "資金調達額や評価額だけでは顧客採用、供給能力、粗利、ソフトウェア互換性を判断できない。",
      implication: "調達報道を需要の証明とみなさず、導入顧客、稼働率、総保有コスト、モデル互換性を確認する。",
      uncertainty: "企業の資金調達発表を一次情報で確認できておらず、条件、売上、顧客集中、second closeは未確認。"
    },
    {
      theme: "重要な新規情報なし",
      title: "ブラウザ/OS/モバイルは今週採用すべき大規模な一次情報なし",
      summary: "主要フィードと公式入口を確認したが、今回の事業・技術判断を直ちに変える大規模なブラウザ、OS、モバイルの一次情報は採用しなかった。",
      date: "2026-07-16", sourceTitle: "Hacker News RSS", sourceUrl: "https://news.ycombinator.com/rss", sourceType: "RSS", priority: "低", timing: "継続ウォッチ", relevance: 60,
      relatedTags: ["エンジニアリング", "市場インテリジェンス"], affected: ["Web開発者", "モバイル開発者", "プロダクト責任者"],
      change: "今週確認できた重要な新規情報なし。",
      importance: "話題量ではなく、公式な仕様・配信・規約変更の有無で判断する。",
      implication: "主要ベンダー公式発表を来週も継続確認する。",
      uncertainty: "個別の小規模更新や脆弱性は今回の大きな変化の選定外。"
    }
  ],
  actionCards: [
    { owner: "法務・AIガバナンス責任者", action: "EU透明性コードの対象サービスと署名方針を決定する", due: "2026-07-22まで", reason: "初期署名期限が迫り、関連するAI Act透明性義務が8月2日から適用されるため。" },
    { owner: "AI基盤責任者", action: "マルチエージェント評価に総費用、同時権限、失敗時挙動、監査ログを追加する", due: "2週間以内", reason: "並列エージェントがAPI機能になり、単一モデル評価だけでは運用リスクを測れないため。" },
    { owner: "AppSec責任者", action: "agentic autofixとCodeQLのprompt injection queryを限定リポジトリで検証する", due: "1か月以内", reason: "AIによる修正とAI固有リスク検知を既存のレビュー・CIへ統合できるか確かめるため。" },
    { owner: "市場調査・投資担当", action: "AI半導体企業を導入顧客、稼働率、供給能力、粗利、ソフトウェア互換性で比較する", due: "次回投資判断まで", reason: "大型資金調達や評価額だけでは需要、供給能力、収益性を判断できないため。" }
  ],
  sections: [
    { title: "調査条件", items: [
      "主対象期間: 2026-07-09 00:00 JSTから2026-07-16 17:00 JSTまで。直近7日で十分な重要情報があったため、過去14日への遡りは行っていない。",
      "主要確認入口: TechCrunch、Hacker News、Product Hunt、ProductZine、Forrester Blogs、TechFeed Startup / Innovation、TechFeed Marketing。",
      "確認方針: フィードで候補を抽出し、OpenAI、GitHubの一次情報を優先した。European Commissionの規制資料とSambaNova報道は対象期間開始前日の2026-07-08公開だが、それぞれ7月22日の直近期限とAI推論基盤の資本市場文脈を理解するために限定的な持ち越し参考情報として採用し、対象期間外と明記した。"
    ] },
    { title: "エグゼクティブサマリー", items: [
      "AI基盤: GPT-5.6は並列サブエージェントとツール処理をAPI機能として提供し、評価軸を単一回答品質からワークフロー全体へ広げた。",
      "開発セキュリティ: GitHubは検出、修正、再検証、draft PR作成を接続し、CodeQLはsystem prompt injectionを静的解析対象へ加えた。",
      "規制: EUの初期署名期限7月22日と義務適用8月2日が近く、透明性表示を法務だけでなくプロダクト実装の期限として扱う必要がある。",
      "市場: AI半導体の大型調達は続くが、評価額を需要や収益性の証明とはみなさない。"
    ] },
    { title: "テーマ別の調査結果", items: [
      "AI/LLM/エージェント、開発者・インフラ、セキュリティ、規制、資本市場を、重要度、影響、反証点とともにカードで整理した。"
    ] },
    { title: "注目すべき仮説と解くべき課題", items: [
      "仮説: マルチエージェントは回答精度より先に、並列化による待ち時間短縮と人の調整工数削減で採用が進む可能性がある。反証には総費用、成功率、誤操作率、再実行率を同時に測る必要がある。",
      "仮説: AIによる脆弱性修正は、検出精度よりもレビュー可能な小さな差分と再現可能な検証証跡が採用率を決める。",
      "解くべき課題: system prompt injectionの静的解析、間接prompt injectionの実行時防御、ツール権限分離を一つのセキュリティ基準へ統合する。",
      "解くべき課題: EU透明性義務について、提供者・導入者の役割、対象コンテンツ、表示、機械可読マーキング、証跡保存を製品横断で揃える。",
      "大きな問題: モデル・エージェント・セキュリティ修正の自動化が速くなる一方、利用量課金とActions等の周辺費用を機能単位で把握しにくい。"
    ] },
    { title: "今週検討すべき対応アクション", items: [] },
    { title: "継続ウォッチすべきテーマ", items: [
      "GPT-5.6 multi-agent betaの一般提供、価格、同時実行上限、実運用評価。",
      "agentic autofixの修正成功率、誤修正率、AI CreditsとActions minutesの費用。",
      "AI生成物透明性コードの署名企業一覧、適合性評価、8月2日以降の執行運用。",
      "CodeQLのAI固有query拡張と、間接prompt injection・MCP tool misuseの検知。",
      "SambaNovaを含むAI推論基盤の顧客採用、供給能力、収益性。"
    ] },
    { title: "取得エラー", items: ["主要確認入口7件はすべて取得可能。取得エラーなし。"] }
  ]
};
