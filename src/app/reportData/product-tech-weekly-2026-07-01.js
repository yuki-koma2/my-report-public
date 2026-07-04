export const report = {
    id: "product-tech-weekly-2026-07-01",
    title: "プロダクト・テック週次レポート 2026-07-01週",
    category: "プロダクト・テック",
    articleType: "weekly",
    articleTypeLabel: "週次最新情報",
    cadence: "週次で自動更新・追加",
    tags: ["プロダクト", "スタートアップ", "マーケティング", "AI", "エンジニアリング", "DX"],
    summary:
      "2026年6月25日から7月1日までに公開・配信されたプロダクト、AIエージェント、開発者ツール、B2Bマーケティング、国内プロダクト開発記事を整理した週次レポートです。",
    publishedAt: "2026-07-01",
    checkedAt: "2026-07-01",
    sources: [
      {
        title: "Anthropic Introducing Claude Sonnet 5",
        url: "https://www.anthropic.com/news/claude-sonnet-5",
        type: "一次情報",
        publishedAt: "2026-06-30",
        checkedAt: "2026-07-01"
      },
      {
        title: "Google Research Introducing TabFM",
        url: "https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data/",
        type: "一次情報",
        publishedAt: "2026-06-30",
        checkedAt: "2026-07-01"
      },
      {
        title: "Forrester Stripe's New Stablecoin Bet: The Open USD",
        url: "https://www.forrester.com/blogs/stripes-new-stablecoin-bet-the-open-usd/",
        type: "配信元リンク",
        publishedAt: "2026-07-01",
        checkedAt: "2026-07-01"
      },
      {
        title: "Forrester Customer Zero Programs Prove That AI Works When Humans Change",
        url: "https://www.forrester.com/blogs/customer-zero-programs-prove-that-ai-works-when-humans-change/",
        type: "配信元リンク",
        publishedAt: "2026-06-30",
        checkedAt: "2026-07-01"
      },
      {
        title: "ProductZine Figma年次カンファレンス Config 2026",
        url: "https://productzine.jp/article/detail/4393",
        type: "配信元リンク",
        checkedAt: "2026-07-01"
      },
      {
        title: "ProductZine Tayori API公開",
        url: "https://productzine.jp/article/detail/4402",
        type: "配信元リンク",
        checkedAt: "2026-07-01"
      },
      {
        title: "ProductZine Lupe コンテキスト機能",
        url: "https://productzine.jp/article/detail/4398",
        type: "配信元リンク",
        checkedAt: "2026-07-01"
      },
      {
        title: "Publickey QualcommがModular買収を発表",
        url: "https://www.publickey1.jp/blog/26/pythonmojomodularai.html",
        type: "配信元リンク",
        publishedAt: "2026-07-01",
        checkedAt: "2026-07-01"
      },
      {
        title: "Hacker News RSS",
        url: "https://news.ycombinator.com/rss",
        type: "配信元フィード",
        checkedAt: "2026-07-01"
      },
      {
        title: "Product Hunt feed",
        url: "https://www.producthunt.com/feed",
        type: "配信元フィード",
        checkedAt: "2026-07-01"
      },
      {
        title: "TechFeed Startup / Innovation RSS",
        url: "https://techfeed.io/feeds/categories/Startup%20%2F%20Innovation?userId=667a89b3185e12081e95a7b5",
        type: "配信元フィード",
        checkedAt: "2026-07-01"
      },
      {
        title: "TechFeed Marketing RSS",
        url: "https://techfeed.io/feeds/categories/Marketing?userId=667a89b3185e12081e95a7b5",
        type: "配信元フィード",
        checkedAt: "2026-07-01"
      }
    ],
    highlights: [
      "Claude Sonnet 5、Product Hunt上のCursor for iOSやv0 Design Systems 2.0、ProductZineのFigma/AI関連記事が並び、AIエージェントは開発・デザイン・業務実行の通常ワークフローへ入り始めている。",
      "Google ResearchのTabFMは、表形式データの分類・回帰をゼロショット化し、BigQueryのAI.PREDICTへ統合予定とされ、業務データ分析の入口がSQL寄りに広がる。",
      "ForresterはOpen USD、Customer Zero、CIOのAI変革責任、B2B GTMの変化を連続して扱い、AI導入はモデル選定より運用実証・組織設計・市場投入プロセスの問題になっている。",
      "国内ではProductZineとTechFeedで、Tayori API、Lupeのリサーチ文脈機能、Figma Config 2026、Qualcomm/Modular買収など、顧客理解と開発基盤のニュースが目立った。",
      "TechCrunch指定URLはCrunch HypeというBloggerサイトへ解決され、対象期間のTechCrunch配信元としては扱えなかったため取得エラーとして明記する。"
    ],
    lead: {
      title: "今週の判断ポイント",
      body:
        "今週はAIエージェントの実行力、表形式データ向け基盤モデル、B2BのAI導入実証、国内プロダクト開発支援が同時に進んだ。プロダクト責任者は、新機能そのものよりも、既存業務へ組み込む導線、評価指標、導入後に人の行動が変わるかを確認すべき週だった。",
      quote:
        "AI機能を追加するだけでは差別化しにくい。今週の情報は、顧客の既存ツール、既存データ、既存意思決定へどう接続するかが競争軸になっていることを示している。"
    },
    dashboardMetrics: [
      {
        label: "高優先度",
        value: "3件",
        caption: "AIエージェント、表形式AI、GTM",
        tone: "high"
      },
      {
        label: "一次情報",
        value: "2本",
        caption: "企業公式と研究ブログを確認",
        tone: "primary"
      },
      {
        label: "最短期限",
        value: "8/31",
        caption: "Claude Sonnet 5の導入価格期間として公表",
        tone: "deadline"
      },
      {
        label: "取得エラー",
        value: "1件",
        caption: "TechCrunch指定URLがCrunch Hypeへ解決",
        tone: "watch"
      }
    ],
    topicCards: [
      {
        theme: "技術・開発者動向",
        title: "Claude Sonnet 5がエージェント実行とコスト効率を前面に出して公開",
        summary:
          "Anthropicは2026年6月30日、Claude Sonnet 5を公開した。全プラン、Claude Code、Claude Platformで利用可能とし、8月31日までの導入価格も示した。",
        date: "2026-06-30",
        sourceTitle: "Anthropic Introducing Claude Sonnet 5",
        sourceUrl: "https://www.anthropic.com/news/claude-sonnet-5",
        sourceType: "一次情報",
        priority: "高",
        timing: "すぐ",
        relevance: 94,
        relatedTags: ["AI", "エンジニアリング", "プロダクト"],
        affected: ["開発者", "AIエージェント導入企業", "SaaS事業者", "社内自動化チーム"],
        change: "Sonnetクラスのモデルが、ブラウザやターミナルを使う長めの実行タスクを低コスト帯で担う選択肢として提示された。",
        importance: "AIエージェント機能のプロダクト設計では、モデル性能だけでなく、価格、レート制限、セーフガード、失敗時の人間確認を含めた運用設計が必要になる。",
        implication: "既存プロダクトにAI作業代行を組み込むチームは、短いチャット応答ではなく、計画、ツール使用、検証、監査ログを前提に評価すべき。",
        uncertainty: "公開ベンチマークは提供元の評価であり、自社データ、権限境界、失敗コストでの検証が必要。"
      },
      {
        theme: "技術・開発者動向",
        title: "Google Researchが表形式データ向け基盤モデルTabFMを公開",
        summary:
          "Google Researchは2026年6月30日、表形式データの分類・回帰をゼロショットで扱うTabFMを発表し、Hugging FaceとGitHubで公開した。BigQueryへのAI.PREDICT統合予定も示した。",
        date: "2026-06-30",
        sourceTitle: "Google Research Introducing TabFM",
        sourceUrl: "https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data/",
        sourceType: "一次情報",
        priority: "高",
        timing: "3か月以内",
        relevance: 91,
        relatedTags: ["AI", "エンジニアリング", "DX"],
        affected: ["データサイエンスチーム", "分析SaaS", "BigQuery利用企業", "業務アプリ開発者"],
        change: "従来は特徴量設計やチューニングが重かった表形式予測に、単一の推論パスで使える基盤モデル型の選択肢が示された。",
        importance: "業務データの多くは表形式であり、専門MLチームが薄い企業でも予測機能を試しやすくなる可能性がある。",
        implication: "プロダクト側は、予測精度だけでなく、説明性、入力データ品質、既存BI/SQLワークフローとの接続を設計課題に置くべき。",
        uncertainty: "BigQuery統合の具体時期、料金、対象データサイズ、監査・説明可能性の運用要件は追加確認が必要。"
      },
      {
        theme: "マーケティング・市場",
        title: "ForresterがAI時代のGTM、Customer Zero、CIO責任を連続して提示",
        summary:
          "Forresterの6月30日から7月1日のブログでは、B2B GTMの変化、Customer Zeroプログラム、CIOのAI変革責任、Open USDのような決済インフラ動向が扱われた。",
        date: "2026-06-30",
        sourceTitle: "Forrester Featured Blogs",
        sourceUrl: "https://www.forrester.com/blogs/feed/",
        sourceType: "配信元リンク",
        priority: "高",
        timing: "3か月以内",
        relevance: 88,
        relatedTags: ["マーケティング", "DX", "プロダクト"],
        affected: ["B2Bマーケティング", "RevOps", "CIO", "エンタープライズSaaS"],
        change: "AI導入は部門内のツール導入から、GTM、顧客実証、IT財務、決済インフラまで横断した変革課題として語られている。",
        importance: "AI機能の訴求は、精度や自動化率だけではなく、実際に社内で使い切った証拠と業務変化の証明が求められやすい。",
        implication: "B2B SaaSは、デモだけでなくCustomer Zero事例、運用前後の定量指標、営業・CS・開発の横断資料を準備する価値がある。",
        uncertainty: "Forrester記事は分析・解説であり、個別市場の数値判断には追加の一次データが必要。"
      },
      {
        theme: "プロダクト・スタートアップ注目",
        title: "Product HuntでAIエージェント、モバイル開発、デザインシステム支援が上位に並ぶ",
        summary:
          "Product Huntの対象期間フィードでは、Pluno、Cursor for iOS、v0 Design Systems 2.0、Clade、Folio AIなど、AIがブラウザ、開発、デザイン、業務実行に入り込む新製品が目立った。",
        date: "2026-06-29",
        sourceTitle: "Product Hunt feed",
        sourceUrl: "https://www.producthunt.com/feed",
        sourceType: "配信元リンク",
        priority: "中",
        timing: "継続ウォッチ",
        relevance: 82,
        relatedTags: ["プロダクト", "スタートアップ", "AI"],
        affected: ["スタートアップ", "プロダクトマネージャー", "デザイナー", "開発者"],
        change: "AIネイティブ製品の訴求が、単体チャットから既存作業面への常駐、モバイル化、デザイン資産連携へ広がっている。",
        importance: "新規プロダクトはAI機能の有無ではなく、既存ワークフローのどこで時間短縮するかを具体化しないと埋もれやすい。",
        implication: "競合調査では、AIモデル名よりも、接続先ツール、利用場所、初回価値までの時間、データ持ち込み方法を比較軸に置く。",
        uncertainty: "Product Hunt掲載情報はローンチ情報であり、利用実績、継続率、セキュリティ要件は各プロダクトの追加確認が必要。"
      },
      {
        theme: "日本語記事・国内向け示唆",
        title: "国内ではTayori API、Lupeのリサーチ文脈機能、Figma Config 2026が注目材料",
        summary:
          "ProductZineの個別記事では、TayoriのAPI公開、Lupeのコンテキスト機能、Figma Config 2026が確認できた。顧客接点データ、リサーチ文脈、デザイン資産を開発へつなぐ動きとして扱う。",
        date: "2026-06-30",
        sourceTitle: "ProductZine Tayori API公開",
        sourceUrl: "https://productzine.jp/article/detail/4402",
        sourceType: "配信元リンク",
        priority: "中",
        timing: "3か月以内",
        relevance: 85,
        relatedTags: ["プロダクト", "マーケティング", "DX"],
        affected: ["国内SaaS", "リサーチ担当", "CS", "新規事業開発"],
        change: "国内プロダクト開発では、顧客接点データ、問い合わせ、リサーチ文脈、デザイン資産を開発へつなぐ動きが強い。",
        importance: "AI導入が進むほど、入力される顧客文脈や運用データの質がプロダクト改善速度を左右する。",
        implication: "CS、リサーチ、開発のデータ連携を先に整えると、AI要約やAI設問生成の精度を上げやすい。",
        uncertainty: "個別機能の利用条件、API仕様、料金、導入事例の成果指標は各社公式情報の確認が必要。"
      },
      {
        theme: "見逃し注意",
        title: "QualcommのModular買収報道はAIインフラのソフトウェア競争として見る",
        summary:
          "TechFeedの日次ランキングでは、QualcommがPythonライクなMojoの開発元Modularを買収するとのPublickey記事が複数日で上位に入った。",
        date: "2026-07-01",
        sourceTitle: "TechFeed Startup / Innovation RSS",
        sourceUrl: "https://techfeed.io/feeds/categories/Startup%20%2F%20Innovation?userId=667a89b3185e12081e95a7b5",
        sourceType: "配信元リンク",
        priority: "中",
        timing: "継続ウォッチ",
        relevance: 80,
        relatedTags: ["スタートアップ", "エンジニアリング", "AI"],
        affected: ["AIインフラ企業", "半導体企業", "開発者ツール", "ML基盤チーム"],
        change: "AIデータセンター競争はチップ単体ではなく、言語、コンパイラ、推論ランタイム、開発者体験を含む垂直統合に向かっている。",
        importance: "AI基盤の採用判断では、性能だけでなく、既存Python資産、推論運用、ハードウェア選択肢を横断した移行コストが重要になる。",
        implication: "開発者向けプロダクトは、GPU/アクセラレータの抽象化、コンパイル、観測性、再現性を差別化軸にできる。",
        uncertainty: "買収条件、完了時期、Modular製品のロードマップ変更は、QualcommやModularの公式確認が必要。"
      },
      {
        theme: "取得エラー",
        title: "TechCrunch指定フィードはCrunch Hypeへ解決され対象外",
        summary:
          "指定URL http://feeds.feedburner.com/TechCrunch/ は、今回の取得ではCrunch HypeというBloggerフィードに解決され、TechCrunchの対象期間ニュースとして扱えなかった。",
        date: "2026-07-01",
        sourceTitle: "Crunch Hype RSS",
        sourceUrl: "http://feeds.feedburner.com/TechCrunch/",
        sourceType: "取得エラー",
        priority: "低",
        timing: "次回まで",
        relevance: 40,
        relatedTags: ["プロダクト"],
        affected: ["レポート運用", "RSS取得"],
        change: "対象フィードのURLが意図した配信元として機能していない。",
        importance: "誤ったフィードを通常ニュース源として採用すると、レポートの出典品質が下がる。",
        implication: "次回以降はTechCrunch公式RSSの有効URLへ差し替えるか、対象フィードから除外する判断が必要。",
        uncertainty: "FeedBurner側の恒久的な移管か一時的な解決先変更かは未確認。"
      }
    ],
    actionCards: [
      {
        owner: "プロダクト責任者",
        action: "AIエージェント機能の評価軸を、計画、ツール使用、検証、監査ログに分ける",
        due: "すぐ",
        reason: "Claude Sonnet 5などの新モデル評価を、単発回答品質ではなく実行ワークフローとして判断するため。"
      },
      {
        owner: "データ/分析担当",
        action: "TabFMとBigQuery AI.PREDICTの適用候補テーブルを棚卸しする",
        due: "3か月以内",
        reason: "表形式予測の試作コストが下がる可能性があり、既存BIやSQLワークフローへ接続しやすいため。"
      },
      {
        owner: "B2Bマーケティング",
        action: "Customer Zero型の導入実証ストーリーを1件作る",
        due: "2026-07中",
        reason: "AI機能の訴求で、実際に自社や先行顧客が使い切った証拠が重要になっているため。"
      },
      {
        owner: "リサーチ/CS",
        action: "問い合わせ、FAQ、顧客インタビュー、開発タスクの連携先を整理する",
        due: "3か月以内",
        reason: "Tayori APIやLupeのように、顧客文脈をAI活用へ渡す製品価値が高まっているため。"
      }
    ],
    sections: [
      {
        title: "調査条件",
        items: [
          "主対象期間: 2026-06-25から2026-07-01まで。実行日である2026-07-01時点で公開確認できた情報を対象にした。",
          "過去14日への遡及: 直近7日で重要トピックが十分に確認できたため、過去14日までは遡っていない。",
          "調査対象: 指定7フィード、配信元リンク、企業公式・研究ブログ・配信元記事を確認した。",
          "採用基準: プロダクト、スタートアップ、マーケティング、市場・顧客理解、開発者動向、日本語記事への示唆があるものを優先した。",
          "注意事項: Product HuntとTechFeedは配信元ランキング・ローンチ情報であり、利用実績や公式仕様は個別に追加確認が必要。"
        ]
      },
      {
        title: "エグゼクティブサマリー",
        items: [
          "今日ではなく今週の重要トピック: AIエージェントの実行力向上、表形式AIの業務データ接続、B2BのAI導入実証、国内プロダクト開発支援の4点。",
          "プロダクト/スタートアップ注目: Product Huntでは、ブラウザエージェント、Cursor for iOS、v0 Design Systems 2.0など、AIを既存作業場へ持ち込む製品が目立った。",
          "マーケティング/市場・顧客理解: Forresterは、GTM、Customer Zero、CIO責任、Open USDを通じて、AI時代の販売・運用・決済基盤の変化を示した。",
          "技術・開発者動向: Claude Sonnet 5とTabFMは、開発者がAIを試す対象をチャットからエージェント実行、表形式予測、SQL連携へ広げる材料になる。",
          "日本語記事・国内向け示唆: ProductZineでは、Tayori API、Lupeのリサーチ文脈機能、Figma Config 2026など、顧客文脈、問い合わせ、デザイン資産と開発の接続が多かった。",
          "見逃し注意: Qualcomm/Modular買収は、半導体ニュースではなく、AIインフラにおける開発者体験とソフトウェアスタック獲得の文脈で見る必要がある。"
        ]
      },
      {
        title: "テーマ別の調査結果",
        items: [
          "1. 今日ではなく今週の重要トピック / 見出し: AIエージェント、表形式AI、GTM変革、国内顧客文脈データが並行して進んだ。情報源リンク: Anthropic、Google Research、Forrester、ProductZine、Product Hunt、TechFeed。一次情報か二次情報か: 一次情報と配信元リンクの併用。影響を受ける主体: SaaS、B2Bマーケティング、開発者、データ分析チーム。なぜ重要なのか: AIを機能として足す段階から、既存業務に組み込み、評価し、顧客文脈を渡す段階へ進んでいるため。",
          "2. プロダクト/スタートアップ注目 / 見出し: Product HuntでAIエージェントと開発/デザイン支援が目立つ。情報の概要: Pluno、Cursor for iOS、v0 Design Systems 2.0、Clade、Folio AIなどが対象期間に配信された。公開日または更新日: 2026-06-25から2026-06-30。情報源リンク: https://www.producthunt.com/feed。一次情報か二次情報か: 配信元リンク。示唆: AI機能の差別化は、モデル名よりも利用場所、既存ツール連携、初回価値までの短さに移っている。",
          "3. マーケティング/市場・顧客理解 / 見出し: ForresterがCustomer ZeroとGTM変化を提示。情報の概要: 6月30日から7月1日の記事で、Customer Zero、B2B GTM、CIO責任、Open USDが扱われた。情報源リンク: https://www.forrester.com/blogs/feed/。一次情報か二次情報か: 配信元リンク。示唆: AIプロダクトの営業資料では、機能一覧よりも実運用で人の行動がどう変わったかを示す必要がある。",
          "4. 技術・開発者動向 / 見出し: Claude Sonnet 5とTabFMが開発者のAI利用範囲を広げる。情報の概要: Claude Sonnet 5はエージェント実行と導入価格、TabFMは表形式データのゼロショット予測とBigQuery統合予定を示した。情報源リンク: https://www.anthropic.com/news/claude-sonnet-5 および https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data/。一次情報か二次情報か: 一次情報。示唆: 開発・分析プロダクトは、AIの出力だけでなく、検証、監査、SQL/BI接続を含めるべき。",
          "5. 日本語記事・国内向け示唆 / 見出し: 顧客文脈と開発をつなぐ国内記事が多い。情報の概要: Tayori API、Lupeのコンテキスト機能、Figma Config 2026。情報源リンク: https://productzine.jp/article/detail/4402、https://productzine.jp/article/detail/4398、https://productzine.jp/article/detail/4393。一次情報か二次情報か: 配信元リンク。示唆: 国内SaaSでは、CS、FAQ、リサーチ、デザイン資産、開発を接続するデータ基盤がAI活用の前提になる。",
          "6. 見逃し注意 / 見出し: Qualcomm/Modular買収はAIインフラの開発者体験競争。情報の概要: TechFeedの日次ランキングでPublickey記事が複数日上位に入った。情報源リンク: https://techfeed.io/feeds/categories/Startup%20%2F%20Innovation?userId=667a89b3185e12081e95a7b5。一次情報か二次情報か: 配信元リンク。示唆: AI基盤の競争はチップ性能だけでなく、Python互換、コンパイラ、推論運用、既存コード移行の総合戦になっている。",
          "7. 取得エラー / 見出し: TechCrunch指定URLはCrunch Hypeへ解決。情報の概要: http://feeds.feedburner.com/TechCrunch/ はタイトルがCrunch Hype、リンクが techncruncher.blogspot.com のBloggerフィードとして取得された。failure type: wrong-feed。対応: 今回はTechCrunch配信元として採用しない。"
        ]
      },
      {
        title: "今週検討すべき対応アクション",
        items: [
          "プロダクト責任者: AIエージェント機能の評価軸を、計画、ツール使用、検証、監査ログに分ける。",
          "データ/分析担当: TabFMとBigQuery AI.PREDICTの適用候補テーブルを棚卸しする。",
          "B2Bマーケティング: Customer Zero型の導入実証ストーリーを1件作る。",
          "リサーチ/CS: 問い合わせ、FAQ、顧客インタビュー、開発タスクの連携先を整理する。",
          "レポート運用担当: TechCrunch指定フィードを公式RSSへ差し替えるか、次回までに対象フィードから除外する。"
        ]
      },
      {
        title: "継続ウォッチすべきテーマ",
        items: [
          "Claude Sonnet 5の導入価格終了後の費用、レート制限、セーフガード、企業利用条件。",
          "TabFMのBigQuery統合時期、料金、対象データサイズ、説明可能性、監査要件。",
          "Product Hunt上のAIエージェント/デザイン支援製品の継続率、セキュリティ、企業導入事例。",
          "国内SaaSの顧客文脈データ連携、API公開、AIリサーチ支援機能の利用実績。",
          "Qualcomm/Modular買収の公式発表、完了時期、MojoやMAXなどの製品ロードマップ変更。"
        ]
      },
      {
        title: "調査メモ",
        items: [
          "TechCrunch指定URLのfailure type: wrong-feed。通信自体は成功したが、配信元タイトルがCrunch Hypeで、TechCrunch本体ではなかった。",
          "TechFeedの週次エントリには2026-07-05の未来タイムスタンプが含まれたため、今回の判断では2026-07-01までの日次エントリを優先した。",
          "Product Huntはupdatedでは古い公開日の投稿も再浮上するため、publishedが対象期間内の項目を中心に扱った。",
          "Forresterは一部ページがブラウザではチャレンジ表示になったが、RSS本文と個別記事URLは確認できた。",
          "過去14日への遡及はしていない。直近7日で十分な重要トピックが確認できたため。"
        ]
      }
    ]
  };
