export const report = {
  "id": "tech-landscape-weekly-2026-07-09",
  "title": "テック情勢週次レポート 2026-07-09週",
  "category": "テック情勢",
  "articleType": "weekly",
  "articleTypeLabel": "週次最新情報",
  "cadence": "週次で自動更新・追加",
  "tags": [
    "AI",
    "エンジニアリング",
    "セキュリティ",
    "開発者ツール",
    "スタートアップ",
    "市場インテリジェンス"
  ],
  "summary": "2026年7月2日00:00 JSTから2026年7月9日18:25 JSTまでに確認できた公開情報をもとに、AI coding evaluation、coding agent運用、agentic ransomware、vibe coding市場、AI引用時代のプロダクト戦略を整理した週次レポートです。",
  "publishedAt": "2026-07-09",
  "checkedAt": "2026-07-09",
  "sources": [
    {
      "title": "OpenAI: Separating signal from noise in coding evaluations",
      "url": "https://openai.com/index/separating-signal-from-noise-coding-evaluations/",
      "type": "一次情報",
      "publishedAt": "2026-07-08",
      "checkedAt": "2026-07-09"
    },
    {
      "title": "Databricks: Benchmarking Coding Agents on Databricks’ Multi-Million Line Codebase",
      "url": "https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase",
      "type": "一次情報",
      "publishedAt": "2026-07-08",
      "checkedAt": "2026-07-09"
    },
    {
      "title": "Business Insider: Cybersecurity firm says it found the first documented case of AI agentic ransomware",
      "url": "https://www.businessinsider.com/ai-ransomware-attack-sysdig-jade-puffer-2026-7",
      "type": "二次情報",
      "publishedAt": "2026-07-06",
      "checkedAt": "2026-07-09"
    },
    {
      "title": "Tom's Hardware: AI coding agents can be tricked into installing malware via clean GitHub repositories",
      "url": "https://www.tomshardware.com/tech-industry/cyber-security/ai-coding-agents-can-be-tricked-into-installing-malware-via-clean-github-repositories-mozillas-0din-team-shows-how-claude-code-can-be-exploited-by-its-own-helpfulness",
      "type": "二次情報",
      "publishedAt": "2026-06-28",
      "checkedAt": "2026-07-09"
    },
    {
      "title": "arXiv: Adoption and Impact of Command-Line AI Coding Agents",
      "url": "https://arxiv.org/abs/2607.01418",
      "type": "研究論文",
      "publishedAt": "2026-07-01",
      "checkedAt": "2026-07-09"
    },
    {
      "title": "Axios: Trump administration lifts restrictions on OpenAI's GPT 5.6",
      "url": "https://www.axios.com/2026/07/08/openai-gpt-trump-ban-lifted",
      "type": "メディア記事",
      "publishedAt": "2026-07-08",
      "checkedAt": "2026-07-09"
    },
    {
      "title": "TechCrunch: Lovable reportedly in talks to double its valuation to $13.2B",
      "url": "https://techcrunch.com/2026/07/08/lovable-reportedly-in-talks-to-double-its-valuation-to-13-2b/",
      "type": "メディア記事",
      "publishedAt": "2026-07-08",
      "checkedAt": "2026-07-09"
    },
    {
      "title": "ProductZine: 検索からAI引用への転換点で、noteが深津貴之氏をCSOに",
      "url": "https://productzine.jp/article/detail/4422",
      "type": "メディア記事",
      "publishedAt": "2026-07-09",
      "checkedAt": "2026-07-09"
    },
    {
      "title": "Forrester: European Marketers Say AI Won’t Replace Employees, But The Reality Is More Complicated",
      "url": "https://www.forrester.com/blogs/european-marketers-say-ai-wont-replace-employees-but-the-reality-is-more-complicated/",
      "type": "アナリストブログ",
      "publishedAt": "2026-07-08",
      "checkedAt": "2026-07-09"
    },
    {
      "title": "TechFeed Startup / Innovation feed",
      "url": "https://techfeed.io/feeds/categories/Startup%20%2F%20Innovation?userId=667a89b3185e12081e95a7b5",
      "type": "配信元フィード",
      "publishedAt": "2026-07-09",
      "checkedAt": "2026-07-09"
    },
    {
      "title": "TechFeed Marketing feed",
      "url": "https://techfeed.io/feeds/categories/Marketing?userId=667a89b3185e12081e95a7b5",
      "type": "配信元フィード",
      "publishedAt": "2026-07-09",
      "checkedAt": "2026-07-09"
    }
  ],
  "highlights": [
    "OpenAIはSWE-Bench Proを監査し、公開split 731タスクのうち約30%に破損タスクがあると推定した。AI coding能力の評価は、ベンチマーク点数だけでなくタスク品質の監査が必要になった。",
    "Databricksは自社の数百万行コードベースでcoding agentを評価し、モデル単価ではなくタスク単位コスト、harness、タスク難度で選ぶべきだと示した。",
    "JadePuffer報道とClaude Codeをめぐる間接プロンプト/実行リスクは、AIエージェントが攻撃者にも防御側にも実行速度を変えることを示す。",
    "Lovableの評価額倍増交渉報道は、vibe codingが非開発者向けソフトウェア生成市場として過熱していることを示す。ただし未完了の資金調達報道として扱う。",
    "主要確認入口7件は取得可能で、直近7日内に十分な重要情報があったため、過去14日への遡りは行っていない。"
  ],
  "lead": {
    "title": "今週の判断ポイント",
    "body": "今週は、AI coding agentの評価と運用が実験段階から組織設計の論点に移った。OpenAIとDatabricksの一次情報は、公開ベンチマーク点数やモデル単価だけでは意思決定できないことを示し、JadePuffer報道とClaude Codeの悪用実証は、エージェントに実行権限を渡す設計そのものを見直す必要を示している。",
    "quote": "AIエージェント導入の焦点は、どのモデルが最強かではなく、評価データ、実行権限、harness、監査ログ、費用対効果を組織ごとに制御できるかに移っている。"
  },
  "dashboardMetrics": [
    {
      "label": "対象期間",
      "value": "7日",
      "caption": "2026-07-02 00:00 JSTから2026-07-09 18:25 JSTまで。14日遡及なし",
      "tone": "primary"
    },
    {
      "label": "高優先度",
      "value": "3テーマ",
      "caption": "AI評価、coding agent運用、agentic security",
      "tone": "high"
    },
    {
      "label": "一次情報",
      "value": "2本",
      "caption": "OpenAIとDatabricksの公式発表を主要根拠に採用",
      "tone": "primary"
    },
    {
      "label": "取得エラー",
      "value": "0件",
      "caption": "主要確認入口7件は取得可能",
      "tone": "primary"
    }
  ],
  "topicCards": [
    {
      "theme": "今週の大きな変化",
      "title": "OpenAIがSWE-Bench Proの約30%に破損タスクがあると公表",
      "summary": "OpenAIは2026年7月8日、SWE-Bench Proの監査結果として、公開split 731タスクのうちagent pipelineで200件、人手レビューで249件に破損の証拠があり、全体の約30%が破損タスクだと推定した。",
      "date": "2026-07-08",
      "sourceTitle": "OpenAI: Separating signal from noise in coding evaluations",
      "sourceUrl": "https://openai.com/index/separating-signal-from-noise-coding-evaluations/",
      "sourceType": "一次情報",
      "priority": "高",
      "timing": "すぐ",
      "relevance": 96,
      "relatedTags": [
        "AI",
        "開発者ツール",
        "エンジニアリング"
      ],
      "affected": [
        "AIモデル開発者",
        "開発組織",
        "AI coding tool導入担当",
        "安全性評価チーム"
      ],
      "change": "AI coding能力の評価で、公開ベンチマークの点数だけを根拠にしにくくなった。",
      "importance": "評価データの破損は、モデル性能、安全性判断、導入可否、社内調達判断を同時に歪める。",
      "implication": "自社タスクに近い評価セットを作り、prompt、hidden tests、gold patch、失敗ログを人間とagentで監査する必要がある。",
      "uncertainty": "他のcoding benchmarkにも同程度の破損があるか、SWE-Bench Proの修正版がいつ整備されるかは未確認。"
    },
    {
      "theme": "開発者・インフラ動向",
      "title": "Databricksが自社コードベースでcoding agentの価格対効果を検証",
      "summary": "Databricksは2026年7月8日、数百万行の自社コードベースから実タスクを作り、coding agentを評価した。OpenAI、Anthropic、open sourceを含む複数モデルが価格対性能のPareto frontierに入り、モデル単価だけでなくharnessがコストと品質を大きく左右すると説明した。",
      "date": "2026-07-08",
      "sourceTitle": "Databricks: Benchmarking Coding Agents on Databricks’ Multi-Million Line Codebase",
      "sourceUrl": "https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase",
      "sourceType": "一次情報",
      "priority": "高",
      "timing": "すぐ",
      "relevance": 94,
      "relatedTags": [
        "AI",
        "開発者ツール",
        "エンジニアリング"
      ],
      "affected": [
        "エンジニアリング責任者",
        "Platform Engineering",
        "FinOps",
        "AI coding tool管理者"
      ],
      "change": "coding agent選定は、モデル名ではなく、タスク難度、harness、文脈投入量、タスク単位コストで評価する段階に入った。",
      "importance": "高性能モデルを常に使う運用は費用対効果を落とし、単価の安いモデルが常に安いとも限らない。",
      "implication": "社内PRから代表タスクを作り、モデルとharnessの組み合わせをタスク単位で測る評価基盤が必要になる。",
      "uncertainty": "Databricks固有のコードベース、言語構成、社内harnessの影響が大きいため、結果をそのまま他社へ一般化しない。"
    },
    {
      "theme": "セキュリティ/規制/標準化",
      "title": "JadePuffer報道がagentic ransomwareの防御時間を秒単位に縮める",
      "summary": "Business InsiderはSysdig Threat Research Teamの報告をもとに、JadePufferをLLMが攻撃を組み立てたagentic ransomwareの初期事例として報じた。攻撃の新規性は手法そのものより、失敗を読み直して短時間で修正し、認証情報探索や脅迫文生成まで進めた点にある。",
      "date": "2026-07-06",
      "sourceTitle": "Business Insider: Cybersecurity firm says it found the first documented case of AI agentic ransomware",
      "sourceUrl": "https://www.businessinsider.com/ai-ransomware-attack-sysdig-jade-puffer-2026-7",
      "sourceType": "二次情報",
      "priority": "高",
      "timing": "すぐ",
      "relevance": 95,
      "relatedTags": [
        "AI",
        "セキュリティ",
        "エンジニアリング"
      ],
      "affected": [
        "SOC",
        "SRE",
        "クラウドセキュリティ",
        "開発組織",
        "経営リスク管理"
      ],
      "change": "AIエージェントにより、既知脆弱性、漏えい認証情報、横展開、破壊行為の実行サイクルが短縮される可能性がある。",
      "importance": "検知から封じ込めまでの猶予が短くなるため、手動トリアージ前提のインシデント対応は破綻しやすい。",
      "implication": "エージェント実行環境、クラウド認証情報、AI APIキー、DB権限、出口通信を分離し、秒単位の自動遮断を設計する必要がある。",
      "uncertainty": "Sysdig一次レポート本文の全詳細、被害組織、モデル種別、再現性、実際の被害範囲は公開情報だけでは限定的。"
    },
    {
      "theme": "スタートアップ/市場/資本",
      "title": "Lovableの評価額倍増報道がvibe coding市場の過熱を示す",
      "summary": "TechCrunchは2026年7月8日、Lovableが3億ドル調達を協議し、評価額が132億ドルに倍増する可能性があると報じた。TechCrunchは、同社が6月に年換算売上5億ドルに達したとも伝えている。",
      "date": "2026-07-08",
      "sourceTitle": "TechCrunch: Lovable reportedly in talks to double its valuation to $13.2B",
      "sourceUrl": "https://techcrunch.com/2026/07/08/lovable-reportedly-in-talks-to-double-its-valuation-to-13-2b/",
      "sourceType": "メディア記事",
      "priority": "中",
      "timing": "継続ウォッチ",
      "relevance": 86,
      "relatedTags": [
        "AI",
        "スタートアップ",
        "市場インテリジェンス"
      ],
      "affected": [
        "AIアプリ企業",
        "SaaS事業者",
        "VC",
        "プロダクト責任者",
        "開発組織"
      ],
      "change": "vibe codingは開発者ツールの一部ではなく、非開発者が業務アプリやECを作る市場として資本を集めている。",
      "importance": "導入が広がるほど、生成されたアプリの品質、セキュリティ、保守、権限管理が事業リスクになる。",
      "implication": "企業はvibe codingを禁止か許可かで単純に分けず、公開範囲、データ接続、レビュー、所有権、監査ログを設計する必要がある。",
      "uncertainty": "資金調達は報道時点で協議段階であり、条件、投資家、完了有無は未確認。"
    },
    {
      "theme": "プロダクト戦略",
      "title": "AI引用時代に、発見導線とエコシステム設計がプロダクト課題になる",
      "summary": "ProductZineは2026年7月9日、noteが深津貴之氏をCSOに迎えた話題を、検索からAI引用への転換点として報じた。AIによる要約・引用が入口になると、プロダクトはSEOだけでなく引用される情報構造、公式性、作者・読者エコシステムを設計する必要がある。",
      "date": "2026-07-09",
      "sourceTitle": "ProductZine: 検索からAI引用への転換点で、noteが深津貴之氏をCSOに",
      "sourceUrl": "https://productzine.jp/article/detail/4422",
      "sourceType": "メディア記事",
      "priority": "中",
      "timing": "1か月以内",
      "relevance": 82,
      "relatedTags": [
        "AI",
        "プロダクト",
        "市場インテリジェンス"
      ],
      "affected": [
        "メディア",
        "UGCプラットフォーム",
        "SEO担当",
        "プロダクト責任者"
      ],
      "change": "検索流入を前提にした発見設計が、AI引用・AI回答経由の発見設計へ広がっている。",
      "importance": "AIが読者の入口になると、本文構造、出典明示、著者信頼、再利用許諾、ブランド表示が流入と信頼に影響する。",
      "implication": "公開コンテンツを持つサービスは、AIに読まれる前提で構造化データ、canonical、著者情報、引用ポリシーを見直すべき。",
      "uncertainty": "AI引用が実際の流入、課金、作者還元にどう影響するかは継続測定が必要。"
    },
    {
      "theme": "未来予測・技術ロードマップ",
      "title": "AIモデル公開は企業判断だけでなく政府との実時間協議の対象になりつつある",
      "summary": "Axiosは2026年7月8日、OpenAIのGPT-5.6公開について、追加テストと政府関係者との協議後に広範な公開へ進むと報じた。一方でホワイトハウス当局者は、公開に正式な許可は不要だと説明しており、報道ベースの政策論点として扱う。",
      "date": "2026-07-08",
      "sourceTitle": "Axios: Trump administration lifts restrictions on OpenAI's GPT 5.6",
      "sourceUrl": "https://www.axios.com/2026/07/08/openai-gpt-trump-ban-lifted",
      "sourceType": "メディア記事",
      "priority": "中",
      "timing": "継続ウォッチ",
      "relevance": 84,
      "relatedTags": [
        "AI",
        "規制",
        "市場インテリジェンス"
      ],
      "affected": [
        "基盤モデル企業",
        "AI利用企業",
        "公共政策担当",
        "セキュリティ評価チーム"
      ],
      "change": "高性能モデルの公開は、企業のリリース計画だけでなく、政府・標準化・安全性評価との調整問題になっている。",
      "importance": "企業ユーザーは、モデル提供時期や利用制限が政策判断で変わるリスクを調達計画に入れる必要がある。",
      "implication": "重要業務で基盤モデルを使う場合、代替モデル、段階公開、地域制限、監査文書の有無を契約時に確認する。",
      "uncertainty": "OpenAI側の一次発表、実際の提供範囲、政府テストの詳細、将来の正式制度化は未確認。"
    },
    {
      "theme": "重要な新規情報なし",
      "title": "ブラウザ/OS/モバイルの大規模仕様変更は今週採用すべき一次情報なし",
      "summary": "TechCrunch、HN、Product Hunt、ProductZine、Forrester、TechFeedを確認したが、今回の主要判断材料として採用できるブラウザ/OS/モバイルの大規模な一次情報は確認できなかった。",
      "date": "2026-07-09",
      "sourceTitle": "主要確認入口7件",
      "sourceUrl": "https://news.ycombinator.com/rss",
      "sourceType": "配信元フィード",
      "priority": "低",
      "timing": "継続ウォッチ",
      "relevance": 60,
      "relatedTags": [
        "エンジニアリング",
        "市場インテリジェンス"
      ],
      "affected": [
        "モバイルアプリ開発者",
        "ブラウザ拡張開発者",
        "プロダクト責任者"
      ],
      "change": "今週の確認範囲では、OS/ブラウザ/モバイルで直ちに戦略変更を要する一次情報は採用しない。",
      "importance": "話題性のあるプロダクト更新と、仕様・規制・プラットフォーム運用の実変更を分ける必要がある。",
      "implication": "来週以降もApple、Google、Microsoft、主要ブラウザベンダーの公式発表を優先して確認する。",
      "uncertainty": "個別アプリ機能や報道ベースの未確認情報は追加検証の余地がある。"
    }
  ],
  "actionCards": [
    {
      "owner": "エンジニアリング責任者",
      "action": "自社PRや障害修正からcoding agent評価用の代表タスクを10件以上作り、モデルとharnessの組み合わせをタスク単位コストで測る",
      "due": "2026-07-18まで",
      "reason": "OpenAIとDatabricksの公開情報から、公開ベンチマークやモデル単価だけでは導入判断が歪む可能性があるため。"
    },
    {
      "owner": "セキュリティ責任者",
      "action": "AI agentが実行できるコマンド、ネットワーク、秘密情報、外部リポジトリ操作を棚卸しし、実行前承認と出口通信制御を入れる",
      "due": "すぐ",
      "reason": "JadePuffer報道とClaude Code悪用実証は、エージェントの善意の実行が攻撃面になることを示しているため。"
    },
    {
      "owner": "プロダクト責任者",
      "action": "vibe codingで作られる社内外アプリの公開範囲、データ接続、レビュー責任、保守責任を利用規程に落とす",
      "due": "1か月以内",
      "reason": "Lovableなどの成長で非開発者によるアプリ生成が増えるほど、品質とセキュリティの責任境界が曖昧になるため。"
    }
  ],
  "sections": [
    {
      "title": "調査条件",
      "items": [
        "主対象期間: 2026-07-02 00:00 JSTから2026-07-09 18:25 JSTまで。直近7日間で重要候補が十分あったため、過去14日への遡りは行っていない。",
        "主要確認入口: TechCrunch、Hacker News、Product Hunt、ProductZine、Forrester Blogs、TechFeed Startup / Innovation、TechFeed Marketing。",
        "確認方針: RSSで候補を抽出し、可能なものはOpenAI公式、Databricks公式、arXiv、Forrester、ProductZine、TechCrunch本文で確認した。セキュリティ事案は一次レポート全文の確認が限定的だったため、Business InsiderとTom's Hardwareを二次情報として採用した。",
        "注意事項: OpenAI GPT-5.6の公開・政府協議はAxios報道に基づく。OpenAI側の一次発表が確認できるまで、モデル性能や提供範囲は断定しない。",
        "Product Huntは期間内にAIエージェント、IDE、セキュリティ系プロダクトの掲載を確認したが、個別プロダクトの実利用や市場影響までは検証できないため、主要トピックには採用しない。"
      ]
    },
    {
      "title": "エグゼクティブサマリー",
      "items": [
        "AI評価: OpenAIはSWE-Bench Proの約30%が破損タスクだと推定し、coding agent評価では評価データの品質監査が不可欠になった。",
        "開発者ツール: Databricksは自社コードベースでcoding agentを評価し、モデル、harness、タスク難度、タスク単位コストを分けて見る必要を示した。",
        "セキュリティ: JadePuffer報道とClaude Code悪用実証は、エージェントの実行権限、間接指示、外部通信が攻撃面になることを示した。",
        "市場: Lovableの評価額倍増交渉報道は、vibe codingが非開発者向けアプリ生成市場として資本を集めていることを示すが、資金調達完了前の報道として扱う。",
        "プロダクト: AI引用時代には、検索流入だけでなく、AIが正しく引用できる情報構造、著者信頼、出典表示、エコシステム設計が競争軸になる。"
      ]
    },
    {
      "title": "テーマ別の調査結果",
      "items": [
        "1. 今週の大きな変化 / OpenAIがSWE-Bench Proの約30%に破損タスクがあると公表。出典: OpenAI。公開日: 2026-07-08。想定影響: AI coding tool導入では、公開ベンチマーク点数を鵜呑みにせず、自社タスクと評価データ品質を監査する必要がある。",
        "2. 開発者・インフラ動向 / Databricksが自社コードベースでcoding agentの価格対効果を検証。出典: Databricks。公開日: 2026-07-08。想定影響: モデル単価ではなく、タスク単位コスト、harness、文脈投入量、タスク難度で運用を最適化する必要がある。",
        "3. セキュリティ/規制/標準化 / JadePuffer報道がagentic ransomwareの防御時間を秒単位に縮める。出典: Business Insider。公開日: 2026-07-06。想定影響: AI agentを攻撃者が使う前提で、認証情報、DB権限、出口通信、実行ログを自動制御する必要がある。",
        "4. スタートアップ/市場/資本 / Lovableの評価額倍増報道がvibe coding市場の過熱を示す。出典: TechCrunch。公開日: 2026-07-08。想定影響: 非開発者がアプリを作れる市場が拡大するほど、生成アプリの品質保証、保守、セキュリティ責任が重要になる。",
        "5. 未来予測・技術ロードマップ / AIモデル公開は企業判断だけでなく政府との実時間協議の対象になりつつある。出典: Axios。公開日: 2026-07-08。想定影響: 重要業務で基盤モデルを使う企業は、モデル公開や利用制限が政策判断で変わるリスクを調達計画に入れる必要がある。",
        "6. プロダクト戦略 / AI引用時代に、発見導線とエコシステム設計がプロダクト課題になる。出典: ProductZine。公開日: 2026-07-09。想定影響: 公開コンテンツを持つプロダクトは、AIに読まれる構造化データ、canonical、著者情報、引用ポリシーを見直すべき。",
        "7. 重要な新規情報なし / ブラウザ/OS/モバイルの大規模仕様変更は今週採用すべき一次情報なし。主要確認入口を確認したが、直ちに戦略変更を要する公式一次情報は採用しない。"
      ]
    },
    {
      "title": "注目すべき仮説と解くべき課題",
      "items": [
        "仮説: coding agentのROIは、モデルのベンチマーク順位より、自社タスクに対するharness、文脈管理、レビュー工数、失敗時の手戻りで決まる可能性が高い。",
        "反証すべき点: Databricksのような社内評価を小規模組織でも低コストに作れるか。評価セット作成コストが導入効果を上回らないか。",
        "仮説: agentic securityは入口検知よりも権限分離、実行前承認、ネットワーク制御、秘密情報分離、自動封じ込めで差が出る。",
        "解くべき課題: AI agentが読んだREADME、実行したコマンド、参照した外部DNS/URL、取得した秘密情報を、開発体験を壊さず監査する方法。",
        "解くべき課題: vibe codingで作られたアプリを、誰が所有し、誰がレビューし、誰が障害対応し、どのデータへ接続してよいかを運用ルールにすること。",
        "見逃し注意: AIモデル公開が政府との任意テストや協議に左右される場合、リリース計画、地域提供、契約上のSLAに遅延リスクが出る。"
      ]
    },
    {
      "title": "今週検討すべき対応アクション",
      "items": [
        "エンジニアリング: 自社PRからcoding agent評価用タスクを作り、公開ベンチマークと社内タスクで判断がずれるかを確認する。",
        "セキュリティ: 開発用AI agentの実行権限を、読み取り、編集、コマンド実行、ネットワーク、秘密情報参照に分けて承認フローを設計する。",
        "FinOps: AI coding toolの費用を、月額席数ではなくタスク単位コスト、レビュー工数、再実行回数、失敗時の手戻りで測る。",
        "プロダクト: vibe codingを業務で使う場合、公開不可データ、顧客データ、決済、権限管理へ接続できる条件を明文化する。",
        "コンテンツ/メディア: AI引用経由の発見に備え、構造化データ、著者情報、出典リンク、引用ポリシー、AI bot向けアクセス方針を棚卸しする。"
      ]
    },
    {
      "title": "継続ウォッチすべきテーマ",
      "items": [
        "SWE-Bench Proの修正、代替coding benchmark、社内評価データセット構築のベストプラクティス。",
        "Databricks、Microsoft、GitHub、OpenAI、Anthropic、Cursorなどによるcoding agentの企業導入データ。",
        "agentic ransomware、間接プロンプト注入、DNS/外部URL経由の命令取得、秘密情報窃取に対する実運用の防御策。",
        "Lovable、Replit、Cursor、Factoryなどvibe coding/agentic development市場の売上、評価額、顧客構成、セキュリティ事故。",
        "高性能モデル公開をめぐる政府テスト、任意協議、輸出管理、地域別利用制限。",
        "AI引用時代のSEO、AIO、コンテンツ権利、引用補償、プラットフォーム設計。"
      ]
    },
    {
      "title": "取得エラー",
      "items": [
        "主要確認入口7件はすべて取得可能。取得エラーなし。"
      ]
    }
  ]
};
