export const report = {
  "id": "tech-landscape-weekly-2026-07-01",
  "title": "テック情勢週次レポート 2026-07-01週",
  "category": "テック情勢",
  "articleType": "weekly",
  "articleTypeLabel": "週次最新情報",
  "cadence": "週次で自動更新・追加",
  "tags": [
    "テック情勢",
    "AI",
    "エンジニアリング",
    "半導体",
    "セキュリティ",
    "開発者ツール",
    "規制",
    "スタートアップ"
  ],
  "summary": "2026年6月25日から2026年7月1日までに確認できた公開情報を中心に、AIエージェント、開発者ツール、AIインフラ、セキュリティ、規制、スタートアップ投資の変化を整理した週次レポートです。",
  "publishedAt": "2026-07-01",
  "checkedAt": "2026-07-01",
  "sources": [
    {
      "title": "Figma Config 2026: New materials, new tools and a more expressive canvas",
      "url": "https://www.figma.com/blog/config-2026-recap/",
      "sourceType": "一次情報",
      "publishedAt": "2026-06-24"
    },
    {
      "title": "Figma年次カンファレンス「Config 2026」で全面刷新を発表",
      "url": "https://productzine.jp/article/detail/4393",
      "sourceType": "二次情報",
      "publishedAt": "2026-06-25"
    },
    {
      "title": "AI時代に「売れるプロダクト」の正体を問う",
      "url": "https://productzine.jp/article/detail/4397",
      "sourceType": "二次情報",
      "publishedAt": "2026-06-29"
    },
    {
      "title": "Lupe、リサーチプラットフォームに「コンテキスト」機能を追加",
      "url": "https://productzine.jp/article/detail/4398",
      "sourceType": "二次情報",
      "publishedAt": "2026-06-29"
    },
    {
      "title": "Axios: Gottheimer and Moolenaar roll out AI cloud security bill",
      "url": "https://www.axios.com/2026/06/26/gottheimer-moolenaar-ai-cloud-security-bill",
      "sourceType": "二次情報",
      "publishedAt": "2026-06-26"
    },
    {
      "title": "Qualcomm to Acquire Modular",
      "url": "https://www.qualcomm.com/news/releases/2026/06/qualcomm-to-acquire-modular",
      "sourceType": "一次情報",
      "publishedAt": "2026-06-24"
    },
    {
      "title": "Wired: Qualcomm Buys Buzzy Chip Startup Modular for Nearly $4 Billion",
      "url": "https://www.wired.com/story/qualcomm-buys-buzzy-chip-startup-modular-for-nearly-dollar4-billion",
      "sourceType": "二次情報",
      "publishedAt": "2026-06-24"
    },
    {
      "title": "WSJ: Qualcomm to Acquire AI Software Firm Modular in $3.9 Billion Stock Deal",
      "url": "https://www.wsj.com/tech/ai/qualcomm-to-acquire-ai-software-firm-modular-in-3-9-billion-stock-deal-7b620c7c",
      "sourceType": "二次情報",
      "publishedAt": "2026-06-24"
    },
    {
      "title": "Tom's Hardware: South Korea unveils $520 billion investment plan with Samsung and SK Hynix",
      "url": "https://www.tomshardware.com/tech-industry/semiconductors/south-korea-unveils-usd520-billion-investment-plan-with-samsung-and-sk-hynix-to-expand-memory-chip-dominance-plan-includes-four-new-fabs-and-hbm-facilities-amid-strong-government-support",
      "sourceType": "二次情報",
      "publishedAt": "2026-06-29"
    },
    {
      "title": "arXiv: Can Open-Source LLM Agents Replace Static Application Security Testing Tools?",
      "url": "https://arxiv.org/abs/2606.11672",
      "sourceType": "研究論文",
      "publishedAt": "2026-06-10"
    },
    {
      "title": "arXiv: ADK Arena: Evaluating Agent Development Kits via LLM-as-a-Developer",
      "url": "https://arxiv.org/abs/2606.05548",
      "sourceType": "研究論文",
      "publishedAt": "2026-06-04"
    }
  ],
  "highlights": [
    "Figma Config 2026 は、コードレイヤー、Motion、Shaders、生成プラグイン、Figma agent の skills / connectors を発表し、デザインキャンバスがコード・AIエージェント・制作ワークフローの接点へ寄る流れを示した。",
    "Qualcomm による Modular 買収報道は、AI計算の差別化がチップ単体だけでなく、CUDA対抗の開発者向けソフトウェア層まで拡張していることを示す。",
    "韓国の大規模半導体投資報道は、HBM・メモリ・先端パッケージングがAIインフラ競争の国家政策テーマになっていることを改めて示した。",
    "米国のAIクラウドセキュリティ法案報道は、チップ輸出規制だけではなく、クラウド経由の高度計算利用を監視・報告対象にする方向を示す。",
    "AIエージェントのSAST代替可能性に関する研究は、現時点のオープンソースLLMエージェントを既存SASTの単純な代替として扱う仮説に反証を与えている。"
  ],
  "lead": {
    "title": "今週の判断ポイント",
    "body": "今週は、AIエージェントが単体チャットから業務ツール、デザインキャンバス、開発・セキュリティ実務へ入り込む一方で、実運用に必要な権限管理、検証、ソフトウェア供給網、計算資源の制約が前面に出た。短期では、AI導入の論点を「使うかどうか」ではなく「どの権限で、どの証跡を残し、どの失敗を検知するか」へ移す必要がある。",
    "quote": "AIエージェント普及の主戦場はモデル性能だけではなく、ワークフロー、権限境界、監査可能性、チップ非依存の実行基盤へ移っている。"
  },
  "dashboardMetrics": [
    {
      "label": "高優先度",
      "value": "3件",
      "caption": "topicCardsで重要度 高 とした対象期間内・持ち越し主要トピック",
      "tone": "high"
    },
    {
      "label": "一次情報",
      "value": "2本",
      "caption": "Figma公式発表とQualcomm公式リリースを直接確認",
      "tone": "primary"
    },
    {
      "label": "短期期限",
      "value": "7月",
      "caption": "Figma code layers は2026年7月から早期アクセス開始予定",
      "tone": "deadline"
    },
    {
      "label": "取得エラー",
      "value": "5件",
      "caption": "TechCrunch、HN、Product Hunt、Forrester、TechFeedの一部取得に失敗",
      "tone": "watch"
    }
  ],
  "topicCards": [
    {
      "theme": "AI/LLM/エージェント",
      "title": "FigmaがAIエージェント、コードレイヤー、Motion、Shadersを同じキャンバスへ集約",
      "summary": "FigmaはConfig 2026で、コードレイヤー、Figma Motion、Shader fills/effects、生成プラグイン、Weave tools、Figma agentのskillsやconnectorsを発表した。コードレイヤーは2026年7月から早期アクセス開始予定。",
      "date": "2026-06-24",
      "sourceTitle": "Figma Config 2026",
      "sourceUrl": "https://www.figma.com/blog/config-2026-recap/",
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
        "デザイナー",
        "フロントエンドエンジニア",
        "プロダクトマネージャー",
        "デザインシステム担当",
        "制作会社"
      ],
      "change": "デザイン、コード、モーション、生成AIワークフロー、外部ツール連携が同じFigmaキャンバス上で扱われる方向が明確になった。",
      "importance": "プロダクト開発のレビュー単位が、静的な画面デザインから、動くコード、AI生成物、チーム固有のagent skillまで広がる。",
      "implication": "デザインシステムや実装レビューは、Figmaファイルだけでなく、生成されたコード、MCP経由の実装、AIエージェントへの指示まで含めて管理する必要がある。",
      "uncertainty": "code layersの実際の品質、既存リポジトリとの同期精度、権限管理、チーム展開時の監査方法は早期アクセス後の確認が必要。"
    },
    {
      "theme": "半導体・AIインフラ",
      "title": "QualcommがModular買収でAIソフトウェア層を取り込みへ",
      "summary": "Qualcommは2026年6月24日、AIソフトウェア企業Modularを買収すると発表した。Modularは異なるチップ環境にAIソフトウェアを展開しやすくする基盤で知られる。",
      "date": "2026-06-24",
      "sourceTitle": "Qualcomm to Acquire Modular",
      "sourceUrl": "https://www.qualcomm.com/news/releases/2026/06/qualcomm-to-acquire-modular",
      "sourceType": "一次情報",
      "priority": "高",
      "timing": "3か月以内",
      "relevance": 91,
      "relatedTags": [
        "半導体",
        "AI",
        "開発者ツール"
      ],
      "affected": [
        "AIインフラ企業",
        "半導体企業",
        "クラウド事業者",
        "MLエンジニア",
        "開発者ツール企業"
      ],
      "change": "AIチップ競争の焦点が、アクセラレータ性能だけでなく、開発者が複数ハードウェアへ展開できるソフトウェア層へ広がった。",
      "importance": "Nvidia CUDA依存をどう下げるかは、クラウドコスト、モデル移植性、オンデバイスAI、調達リスクに直結する。",
      "implication": "AI基盤選定では、GPU単価だけでなく、コンパイラ、ランタイム、モデル移植、既存MLOpsとの接続性を評価軸に入れる必要がある。",
      "uncertainty": "買収完了条件、Modularの既存顧客・OSS戦略、Qualcommのデータセンター戦略への統合範囲は今後の追加開示確認が必要。"
    },
    {
      "theme": "セキュリティ/規制/標準化",
      "title": "米国でAIクラウド利用の報告・監視を狙う法案が報じられる",
      "summary": "Axiosは、米下院議員Josh Gottheimer氏とJohn Moolenaar氏が、外国主体による高度AI計算のクラウド利用を米商務省へ報告できるようにするCloud Security Actを準備していると報じた。",
      "date": "2026-06-26",
      "sourceTitle": "Axios AI cloud security bill",
      "sourceUrl": "https://www.axios.com/2026/06/26/gottheimer-moolenaar-ai-cloud-security-bill",
      "sourceType": "二次情報",
      "priority": "高",
      "timing": "3か月以内",
      "relevance": 88,
      "relatedTags": [
        "規制",
        "セキュリティ",
        "AI"
      ],
      "affected": [
        "クラウド事業者",
        "AIスタートアップ",
        "大規模モデル開発企業",
        "法務・セキュリティ担当",
        "海外顧客を持つSaaS"
      ],
      "change": "チップ輸出規制の抜け道としてクラウド経由の高度計算利用が政策論点になっている。",
      "importance": "AIモデル開発のコンプライアンスは、チップ購入だけでなくクラウド利用者確認、ログ、異常利用検知へ広がる可能性がある。",
      "implication": "クラウド上でGPUや大規模推論を提供する企業は、顧客審査、利用目的確認、地理・法人属性、監査ログの整備を先回りして確認すべき。",
      "uncertainty": "法案本文、成立可能性、対象クラウド、報告義務の範囲、国外企業への影響は未確認。"
    },
    {
      "theme": "半導体・AIインフラ",
      "title": "韓国がSamsung・SK Hynixと大規模メモリ投資を進めるとの報道",
      "summary": "Tom's Hardwareは、韓国がSamsung ElectronicsとSK Hynixを含む官民投資計画で、メモリ、HBM、先端パッケージング、AIデータセンター関連の増強を進めると報じた。",
      "date": "2026-06-29",
      "sourceTitle": "Tom's Hardware 韓国半導体投資報道",
      "sourceUrl": "https://www.tomshardware.com/tech-industry/semiconductors/south-korea-unveils-usd520-billion-investment-plan-with-samsung-and-sk-hynix-to-expand-memory-chip-dominance-plan-includes-four-new-fabs-and-hbm-facilities-amid-strong-government-support",
      "sourceType": "二次情報",
      "priority": "中",
      "timing": "半年以内",
      "relevance": 84,
      "relatedTags": [
        "半導体",
        "AI"
      ],
      "affected": [
        "AIデータセンター",
        "クラウド事業者",
        "半導体サプライチェーン",
        "調達担当",
        "AIサービス企業"
      ],
      "change": "AI需要を前提に、メモリ・HBM・パッケージングが国家レベルの産業政策としてさらに強化される。",
      "importance": "大規模AIのコストと供給制約は、GPUだけでなくHBM、電力、パッケージング、地域集中リスクに左右される。",
      "implication": "AIサービスの中長期計画では、モデル選定と同時に、推論単価、供給リスク、リージョン分散、クラウド契約条件を継続ウォッチする必要がある。",
      "uncertainty": "投資額の公的内訳、実際の稼働時期、各社の設備投資コミット、輸出管理との関係は一次情報で追加確認が必要。"
    },
    {
      "theme": "注目すべき仮説",
      "title": "オープンソースLLMエージェントはSASTの単純代替にはまだ不十分という研究結果",
      "summary": "arXivの研究は、Ollama上のオープンソースモデルを使ったLLMエージェントをBanditと比較し、現実的条件では既存SASTの代替に適しているとは言いにくいと結論づけた。",
      "date": "2026-06-10",
      "sourceTitle": "Can Open-Source LLM Agents Replace Static Application Security Testing Tools?",
      "sourceUrl": "https://arxiv.org/abs/2606.11672",
      "sourceType": "研究論文",
      "priority": "中",
      "timing": "すぐ",
      "relevance": 82,
      "relatedTags": [
        "セキュリティ",
        "AI",
        "エンジニアリング"
      ],
      "affected": [
        "セキュリティエンジニア",
        "開発組織",
        "AIコーディングツール導入担当",
        "SaaS事業者"
      ],
      "change": "AIエージェントを既存セキュリティ検査の置換として扱う仮説に、実証面の制約が示された。",
      "importance": "AI導入でセキュリティレビューを省略する判断は、誤検知・見逃し・説明不能性のリスクを増やす。",
      "implication": "AIエージェントはSASTの前後で補助的に使い、CI上の既存検査、レビュー、脅威モデリングを残したまま運用するのが現実的。",
      "uncertainty": "研究対象モデルやタスクは限定的で、商用モデル、専用エージェント、組織内コードベースでは追加検証が必要。"
    }
  ],
  "actionCards": [
    {
      "owner": "プロダクト責任者",
      "action": "AI機能の権限境界と監査ログを棚卸しする",
      "due": "2026-07-12まで",
      "reason": "AIエージェントを業務ツールへ入れる際、モデル性能より先に権限・証跡・取り消し可能性が運用リスクになるため。"
    },
    {
      "owner": "フロントエンド/デザインシステム担当",
      "action": "Figma code layers、Motion、agent skillsが既存開発フローに入る場合のレビュー手順を仮設計する",
      "due": "7月中",
      "reason": "デザイン成果物とコード成果物の境界が曖昧になり、レビュー対象が変わるため。"
    },
    {
      "owner": "AI基盤担当",
      "action": "チップ非依存ランタイム、推論コスト、クラウド移植性を技術選定表に追加する",
      "due": "3か月以内",
      "reason": "Modular買収報道が示す通り、AIインフラの競争軸がハードウェア単体からソフトウェア層へ広がっているため。"
    },
    {
      "owner": "セキュリティ担当",
      "action": "AIエージェントによるコード検査をSAST代替ではなく補助として位置づける",
      "due": "すぐ",
      "reason": "研究上、現時点のオープンソースLLMエージェントを既存SASTの代替とみなす根拠は弱いため。"
    }
  ],
  "sections": [
    {
      "title": "調査条件",
      "items": [
        "主対象期間: 2026-06-25 00:00 JSTから2026-07-01の実行時点まで。指定スケジュールは木曜実行だが、今回の実行日が2026-07-01のため、この範囲で公開確認できた情報を対象にした。",
        "対象期間外の持ち越し主要トピック: 2026-06-24公開のFigma公式発表とQualcomm公式リリースは主対象期間の1日前だが、ProductZineの2026-06-25記事で再確認され、AIエージェント開発体験とAIソフトウェア基盤の文脈理解に必要なため、今週の新規情報ではなく持ち越し採用として区別した。",
        "対象期間外の背景情報: AIエージェントのセキュリティ仮説を扱うため、2026-06-10公開のSAST代替可能性研究と2026-06-04公開のADK Arena研究を背景として採用した。これは2026-07-01から14日以内ではないため、今週の新規出来事ではなく、仮説検証の背景情報として明記する。",
        "調査対象: 指定RSS、ProductZine個別記事、Figma公式発表、Qualcomm公式発表、主要ニュース記事、arXiv研究を確認した。一次情報を優先し、一次情報を確認できない法案・半導体投資は二次情報として明記した。",
        "注意事項: Cloud Security Actと韓国半導体投資は、今回確認できた範囲ではニュース記事に基づく。意思決定では法案本文、政府発表、企業IR資料を追加確認すること。"
      ]
    },
    {
      "title": "エグゼクティブサマリー",
      "items": [
        "今週の大きな変化: FigmaがAIエージェント、コード、モーション、生成プラグインをキャンバスへ統合し、制作・設計・実装の境界をさらに曖昧にした。",
        "未来予測・ロードマップ: Figma code layers は2026年7月から早期アクセス予定で、デザインファイル内でコードを比較・抽出・同期する実験が始まる。",
        "AI/LLM/エージェント: 業務ツール内のAIは、単独チャットからチーム内の共有エージェント、MCP、外部コネクタ、組織固有skillへ移っている。",
        "開発者・インフラ動向: Modular買収報道は、AIインフラ競争がGPU性能だけでなく、開発者向けランタイム、コンパイラ、ハードウェア抽象化へ広がったことを示す。",
        "セキュリティ/規制/標準化: AIクラウド利用の報告・監視を狙う法案報道とSAST研究を合わせると、AI活用は権限、監査、検査精度をセットで設計する段階に入っている。",
        "スタートアップ/市場/資本: AIインフラ・AIエージェント周辺の投資テーマは、モデルそのものから、実行基盤、セキュアな権限管理、業務ワークフロー統合へ移っている。"
      ]
    },
    {
      "title": "テーマ別の調査結果",
      "items": [
        "Figma Config 2026、Qualcomm/Modular買収報道、AIクラウド規制報道、韓国半導体投資報道、AIエージェントSAST研究を、重要度、関連度、対象者、出典付きのトピックカードとして整理した。FigmaとQualcommは2026-06-24公開のため、主対象期間外の持ち越し主要トピックとして扱う。"
      ]
    },
    {
      "title": "今週検討すべき対応アクション",
      "items": [
        "プロダクト責任者: AI機能の権限境界と監査ログを棚卸しする (2026-07-12まで)",
        "フロントエンド/デザインシステム担当: Figma code layers、Motion、agent skillsが既存開発フローに入る場合のレビュー手順を仮設計する (7月中)",
        "AI基盤担当: チップ非依存ランタイム、推論コスト、クラウド移植性を技術選定表に追加する (3か月以内)",
        "セキュリティ担当: AIエージェントによるコード検査をSAST代替ではなく補助として位置づける (すぐ)"
      ]
    },
    {
      "title": "今週見直すべき意思決定",
      "items": [
        "事業観点: AI機能を追加するだけの計画から、誰が承認し、どの権限で実行し、どのログを残すかまでを商品要件に含める。",
        "プロダクト観点: FigmaやSlackのような既存業務面にAIが入る前提で、自社プロダクトの情報設計、権限モデル、監査画面を再点検する。",
        "エンジニアリング観点: AI生成コードやAIエージェントの出力を、既存テスト、SAST、レビュー、リリースゲートから独立させず、同じ検証経路へ流す。",
        "調達観点: AI基盤は単一GPUベンダー、単一クラウド、単一モデルAPIに寄せすぎず、移植性と出口戦略を明文化する。"
      ]
    },
    {
      "title": "注目すべき仮説",
      "items": [
        "仮説: AIエージェントの価値は、モデルの回答精度よりも、既存業務ツールの文脈を安全に読めること、許可された操作だけ実行できること、結果を監査できることに移る。",
        "反証方法: AI導入PoCでは、回答品質だけでなく、誤操作、権限昇格、不要な情報参照、ログ欠落、差し戻し工数を測る。",
        "仮説: デザインツールと開発環境の境界はさらに縮み、Figma上のコード・Motion・agent skillが実装レビューの入口になる。",
        "反証方法: 早期アクセス後、生成コードの保守性、アクセシビリティ、レスポンシブ品質、既存コンポーネント再利用率を実プロジェクトで測る。",
        "仮説: AIインフラの競争優位は、GPU調達力だけでなく、ハードウェア非依存のランタイム、コンパイラ、モデル移植性を握る企業へ広がる。",
        "反証方法: 同一モデルを複数チップ・複数クラウドで動かし、性能、費用、運用負荷、デバッグ容易性を比較する。"
      ]
    },
    {
      "title": "解くべき課題",
      "items": [
        "AIエージェントの権限管理: 人間ユーザーの権限を丸ごと委譲せず、操作単位、データ範囲、承認フロー、取り消しを分けて設計する必要がある。",
        "AI生成物の検証: デザイン、コード、セキュリティ検査、リサーチ要約のいずれも、AI出力を最終成果物として扱わず、検証可能な中間成果物として管理する必要がある。",
        "AIクラウド利用のコンプライアンス: 顧客属性、国・地域、利用目的、モデル訓練/推論の区別、異常利用検知をクラウド利用ログと結びつける必要がある。",
        "AIインフラの供給制約: HBM、電力、リージョン、輸出規制、クラウド契約条件がサービス提供価格とSLAに与える影響を継続的に見直す必要がある。"
      ]
    },
    {
      "title": "見逃し注意",
      "items": [
        "ProductZineでは、Figma Config 2026、AI時代のSaaS/プロダクト戦略、AIを使ったリサーチ・要件定義・顧客インサイト管理の話題が複数確認された。出典追跡性を保つため、RSSではなく採用した個別記事URLを出典に残した。",
        "AIセキュリティ研究は対象期間より少し前の公開だが、今週のAIエージェント実装・クラウド規制報道と合わせて読むと、導入側が検証責任を過小評価しやすい点を補強する。",
        "ニュース記事だけで確認した買収・政策・半導体投資は、正式リリース、SEC/IR、法案本文、政府発表で更新確認が必要。"
      ]
    },
    {
      "title": "取得エラー",
      "items": [
        "TechCrunch: https://techcrunch.com/feed/ / failure type: web.open returned no usable feed content in this run.",
        "Hacker News: https://news.ycombinator.com/rss / failure type: web.open returned no usable feed content in this run.",
        "Product Hunt: https://www.producthunt.com/feed / failure type: web.open returned no usable feed content in this run.",
        "Forrester Blogs: https://go.forrester.com/blogs/feed/ / failure type: JavaScript disabled challenge page returned instead of RSS.",
        "TechFeed Startup / Innovation and Marketing: https://techfeed.io/feeds/categories/Startup%20%2F%20Innovation?userId=667a89b3185e12081e95a7b5 ; https://techfeed.io/feeds/categories/Marketing?userId=667a89b3185e12081e95a7b5 / failure type: web.open returned no usable feed content in this run."
      ]
    }
  ]
};
