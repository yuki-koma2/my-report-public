export const reports = [
  {
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
  },
  {
    id: "academic-vc-weekly-2026-07-01",
    title: "Academic VC / スタートアップ投資動向週次レポート 2026-07-01週",
    category: "Academic VC / スタートアップ投資",
    articleType: "weekly",
    articleTypeLabel: "週次最新情報",
    cadence: "週次で自動更新・追加",
    tags: ["VC", "スタートアップ", "資金調達", "AI", "市場インテリジェンス"],
    summary:
      "2026年6月24日00:00 JSTから2026年7月1日13:14 JSTまでにRSS/Atomで確認できた公開情報を中心に、VCファンド形成、スタートアップ資金調達、AIインフラ、deeptech、ヘルスケア、公共市場・政策の投資判断材料を整理した週次レポートです。",
    publishedAt: "2026-07-01",
    checkedAt: "2026-07-01",
    sources: [
      {
        title: "Sifted: Tapestry VC launches $80m fund aimed at backing repeat founders",
        url: "https://sifted.eu/articles/tapestry-vc-london-office-vc-fund-openai/",
        type: "メディア記事",
        publishedAt: "2026-07-01",
        checkedAt: "2026-07-01"
      },
      {
        title: "Sifted: Ex-Speedinvest partner Rick Hao closes $50m solo GP fund for deeptech startups",
        url: "https://sifted.eu/articles/rick-hao-50m-solo-gp-fund-deeptech-startups/",
        type: "メディア記事",
        publishedAt: "2026-07-01",
        checkedAt: "2026-07-01"
      },
      {
        title: "TechCrunch: Wayve launches $85M employee tender offer at $8.5B valuation",
        url: "https://techcrunch.com/2026/06/30/wayve-launches-85m-employee-tender-offer-at-8-5b-valuation/",
        type: "メディア記事",
        publishedAt: "2026-07-01",
        checkedAt: "2026-07-01"
      },
      {
        title: "TechCrunch: Nvidia competitor Etched hits $5B valuation, $1B in sales for AI chip",
        url: "https://techcrunch.com/2026/06/30/nvidia-competitor-etched-hits-5b-valuation-1b-in-sales-for-ai-chip/",
        type: "メディア記事",
        publishedAt: "2026-06-30",
        checkedAt: "2026-07-01"
      },
      {
        title: "VC News Daily: Straiker Lands $64M Series A",
        url: "https://vcnewsdaily.com/straiker/venture-capital-funding/rympgkvlkx",
        type: "資金調達記事",
        publishedAt: "2026-06-30",
        checkedAt: "2026-07-01"
      },
      {
        title: "VC News Daily: Reed Semiconductor Announces $100M Funding",
        url: "https://vcnewsdaily.com/reed-semiconductor/venture-capital-funding/rqpspfnywn",
        type: "資金調達記事",
        publishedAt: "2026-06-30",
        checkedAt: "2026-07-01"
      },
      {
        title: "FinanceAsia: Airwallex raises $320m to build out AI financial software",
        url: "https://www.financeasia.com/article/airwallex-raises-320m-to-build-out-ai-financial-software/507943",
        type: "メディア記事",
        publishedAt: "2026-06-28",
        checkedAt: "2026-07-01"
      },
      {
        title: "VC News Daily: Tetrix Announces $15M Series A Financing",
        url: "https://vcnewsdaily.com/tetrix/venture-capital-funding/rnzmprrjyv",
        type: "資金調達記事",
        publishedAt: "2026-07-01",
        checkedAt: "2026-07-01"
      },
      {
        title: "VC News Daily: Caplight Closes $16M Series A Round",
        url: "https://vcnewsdaily.com/caplight/venture-capital-funding/zqjsvjrngc",
        type: "資金調達記事",
        publishedAt: "2026-06-25",
        checkedAt: "2026-07-01"
      },
      {
        title: "VC Cafe: Israel's $30B AI Sovereignty Bet",
        url: "https://www.vccafe.com/israels-30b-ai-sovereignty-bet/",
        type: "VCブログ",
        publishedAt: "2026-06-28",
        checkedAt: "2026-07-01"
      },
      {
        title: "Tomasz Tunguz: When AI Costs More Than the Engineer",
        url: "https://www.tomtunguz.com/ai-spend-breakeven-2029/",
        type: "VCブログ",
        publishedAt: "2026-06-29",
        checkedAt: "2026-07-01"
      },
      {
        title: "VC News Daily: Upside Grabs $20M Series A Financing",
        url: "https://vcnewsdaily.com/upside/venture-capital-funding/xfvnxvxvml",
        type: "資金調達記事",
        publishedAt: "2026-06-25",
        checkedAt: "2026-07-01"
      },
      {
        title: "David Teten: How to Invest in Y Combinator Companies at Demo Day and Before",
        url: "https://teten.com/how-to-invest-in-y-combinator-companies-at-demo-day-and-before/",
        type: "投資家ブログ",
        publishedAt: "2026-06-28",
        checkedAt: "2026-07-01"
      },
      {
        title: "Sifted: University of Edinburgh spinouts looking to raise",
        url: "https://sifted.eu/articles/university-of-edinburgh-spinouts-looking-to-raise/",
        type: "メディア記事",
        publishedAt: "2026-07-01",
        checkedAt: "2026-07-01"
      }
    ],
    highlights: [
      "欧州ではTapestry VCの80百万ドルファンド、Rick Hao氏の50百万ドルsolo GPファンドなど、リピート創業者とdeeptechに絞る小中規模ファンド形成が続いた。",
      "AIインフラ、エージェント、AIセキュリティ、AIチップ、金融AIで大型資金調達・高評価額の記事が集中し、投資家はGPU、推論コスト、実運用ROIを分けて見る必要がある。",
      "Wayveの85百万ドル従業員テンダーは、後期AI企業が未上場のまま人材維持と流動性を設計する動きとして重要。",
      "Airwallexの320百万ドル調達、Tetrixの15百万ドルSeries A、CaplightのBlackRock主導Series A、Tomasz Tunguz氏の公開SaaSセクター比較は、AI金融ソフトウェアと流動性インフラを継続ウォッチ対象にする材料。",
      "取得エラーは4フィード。該当媒体は確認不能として扱い、推測で補完しない。"
    ],
    lead: {
      title: "今週の投資判断ポイント",
      body:
        "今週は、欧州VCの資金供給体制、AIインフラ/エージェント資金調達、後期AI企業の流動性設計、金融・ヘルスケア領域のAI実装が同時に動いた。対象期間内のRSS候補だけで十分な更新があったため、過去14日への遡りは行っていない。",
      quote:
        "創業者向けの資金供給は広く浅い資金ではなく、repeat founder、deeptech、AI実装、流動性インフラへ選別されている。"
    },
    dashboardMetrics: [
      {
        label: "対象期間内候補",
        value: "175件",
        caption: "重複URL正規化後、2026-06-24 00:00 JST以降の記事",
        tone: "primary"
      },
      {
        label: "投資関連候補",
        value: "109件",
        caption: "VC、資金調達、AI、市場、規制などのキーワードで一次選別",
        tone: "high"
      },
      {
        label: "高優先度",
        value: "5テーマ",
        caption: "VC資金供給、AIインフラ、流動性、金融AI、ヘルスケアAI",
        tone: "high"
      },
      {
        label: "取得エラー",
        value: "4件",
        caption: "404、403、非XML、timeoutを明記し推測補完しない",
        tone: "watch"
      }
    ],
    topicCards: [
      {
        theme: "VCファンド形成",
        title: "欧州でリピート創業者・deeptech向けの新ファンド形成が続く",
        summary:
          "Siftedは、Tapestry VCがリピート創業者を狙う80百万ドルファンドを立ち上げたこと、元SpeedinvestのRick Hao氏がdeeptechスタートアップ向け50百万ドルsolo GPファンドをクローズしたことを報じた。",
        date: "2026-07-01",
        sourceTitle: "Sifted: Tapestry VC launches $80m fund aimed at backing repeat founders",
        sourceUrl: "https://sifted.eu/articles/tapestry-vc-london-office-vc-fund-openai/",
        sourceType: "メディア記事",
        priority: "高",
        timing: "すぐ",
        relevance: 94,
        relatedTags: ["VC", "スタートアップ", "資金調達"],
        affected: ["欧州VC", "LP", "repeat founder", "deeptech創業者", "solo GP"],
        change: "欧州初期投資で、汎用シードではなく創業者属性や技術領域を絞った資金供給が目立つ。",
        importance: "LPは小規模・専門型GPの差別化を評価し、創業者は資金だけでなく領域理解とネットワークを選別しやすくなる。",
        implication: "日本やアジアのAcademic VC文脈でも、大学発deeptech、2回目創業者、研究者創業者に絞った小型ファンド設計を比較対象にできる。",
        uncertainty: "ファンドのLP構成、投資済み案件、実際の初回チェックサイズはRSS確認範囲では未確認。"
      },
      {
        theme: "AIインフラ",
        title: "AIインフラとエージェント周辺で大型資金調達が集中",
        summary:
          "EtchedはAI推論チップで5十億ドル評価、Reed Semiconductorは100百万ドル調達、Sail Researchは長期ホライゾンAIエージェント向けインフラで80百万ドル、Straikerはエージェントセキュリティで64百万ドルSeries Aを報じられた。",
        date: "2026-06-30",
        sourceTitle: "TechCrunch: Nvidia competitor Etched hits $5B valuation, $1B in sales for AI chip",
        sourceUrl: "https://techcrunch.com/2026/06/30/nvidia-competitor-etched-hits-5b-valuation-1b-in-sales-for-ai-chip/",
        sourceType: "メディア記事",
        priority: "高",
        timing: "すぐ",
        relevance: 96,
        relatedTags: ["AI", "資金調達", "市場インテリジェンス"],
        affected: ["AIインフラ企業", "半導体スタートアップ", "エンタープライズAI", "AIセキュリティ企業", "VC"],
        change: "AI投資の焦点がアプリ単体から、推論コスト、長期タスク、セキュリティ、専用チップへ広がっている。",
        importance: "AIアプリの粗利と継続利用は、モデル性能だけでなく推論単価、セキュリティ、運用信頼性に左右される。",
        implication: "投資判断では、GPU依存の軽減、顧客の実運用データ、セキュリティ要件、売上予約や契約済み需要を分けて確認する必要がある。",
        uncertainty: "評価額、契約額、売上予約の会計上の扱い、量産リスク、顧客集中は追加確認が必要。"
      },
      {
        theme: "後期AI・流動性",
        title: "Wayveの従業員テンダーが未上場AI企業の人材維持策を示す",
        summary:
          "TechCrunchは、Wayveが85百万ドルの従業員テンダーを8.5十億ドル評価で実施すると報じた。未上場AI企業が採用・定着のために流動性を設計する動きとして扱う。",
        date: "2026-07-01",
        sourceTitle: "TechCrunch: Wayve launches $85M employee tender offer at $8.5B valuation",
        sourceUrl: "https://techcrunch.com/2026/06/30/wayve-launches-85m-employee-tender-offer-at-8-5b-valuation/",
        sourceType: "メディア記事",
        priority: "中",
        timing: "1か月以内",
        relevance: 86,
        relatedTags: ["AI", "VC", "市場インテリジェンス"],
        affected: ["後期AIスタートアップ", "従業員株主", "既存投資家", "セカンダリー投資家"],
        change: "IPO前の人材維持と株式流動性を、資金調達イベントとは別に設計する企業が増えている。",
        importance: "流動性が報酬競争力を左右し、次回ラウンドやIPO時のキャップテーブル管理にも影響する。",
        implication: "後期投資では、評価額だけでなくテンダー条件、参加投資家、従業員持分、将来の希薄化を確認すべき。",
        uncertainty: "売出参加率、買い手、優先株条件、次回ラウンドへの影響はRSS確認範囲では未確認。"
      },
      {
        theme: "金融AI・市場",
        title: "AI金融ソフトウェアとオルタナ投資データで大型調達が続く",
        summary:
          "FinanceAsiaはAirwallexの320百万ドル調達を報じ、VC News DailyはTetrixの15百万ドルSeries A、Caplightの16百万ドルSeries Aを伝えた。決済、代替資産、セカンダリー/非公開株流動性のデータ化が投資対象として継続している。",
        date: "2026-06-28",
        sourceTitle: "FinanceAsia: Airwallex raises $320m to build out AI financial software",
        sourceUrl: "https://www.financeasia.com/article/airwallex-raises-320m-to-build-out-ai-financial-software/507943",
        sourceType: "メディア記事",
        priority: "中",
        timing: "1か月以内",
        relevance: 84,
        relatedTags: ["資金調達", "市場インテリジェンス", "AI"],
        affected: ["フィンテック", "LP", "オルタナ投資家", "セカンダリー市場", "金融SaaS"],
        change: "金融ソフトウェアは、決済インフラからAI活用、オルタナ市場データ、非公開株流動性へ論点が広がる。",
        importance: "公開市場が選別的な中、非公開市場の価格発見、データ、流動性支援はLP/GP双方の意思決定に直結する。",
        implication: "金融AI投資では、規制対応、データ権利、実顧客のワークフロー統合、BlackRockなど戦略投資家の関与を確認する。",
        uncertainty: "各社のARR、粗利、規制ライセンス、地域別売上構成は追加確認が必要。"
      },
      {
        theme: "ヘルスケア・ライフサイエンス",
        title: "ロボティック薬局、高齢者支援、住居安定AIに資金が入る",
        summary:
          "VC News DailyではQueueの12.6百万ドルSeed、Heraの27百万ドルSeries A、Upsideの20百万ドルSeries Aが確認できた。薬局自動化、高齢者支援、住居安定のような医療・介護周辺の運用課題にAI/自動化が入り込んでいる。",
        date: "2026-06-30",
        sourceTitle: "VC News Daily: Queue Launches With $12.6M Seed",
        sourceUrl: "https://vcnewsdaily.com/queue/venture-capital-funding/qpdtwmrmvj",
        sourceType: "資金調達記事",
        priority: "中",
        timing: "継続ウォッチ",
        relevance: 82,
        relatedTags: ["スタートアップ", "資金調達", "AI"],
        affected: ["ヘルスケアVC", "医療機関", "薬局", "高齢者支援事業者", "AIロボティクス企業"],
        change: "ヘルスケアAIは診断支援だけでなく、薬局自動化、住居安定、高齢者支援のオペレーションへ広がる。",
        importance: "規制・現場導入の難しさは残るが、労働集約的な医療周辺業務はAI/自動化のROIを説明しやすい。",
        implication: "投資判断では、臨床有効性よりも業務削減、既存制度との接続、導入現場の責任分界、払い手を明確にする必要がある。",
        uncertainty: "医療規制、保険償還、施設導入数、臨床データの詳細は各社一次情報で追加確認が必要。"
      },
      {
        theme: "規制・政策",
        title: "AI主権、防衛投資、EU AI Actがスタートアップ市場の前提になる",
        summary:
          "VC CafeはイスラエルのAI主権投資、Siftedは英国の防衛投資計画へのスタートアップ反応、deutsche-startups.deはEU AI Actがスタートアップのマーケティングに与える透明性義務を取り上げた。",
        date: "2026-06-28",
        sourceTitle: "VC Cafe: Israel's $30B AI Sovereignty Bet",
        sourceUrl: "https://www.vccafe.com/israels-30b-ai-sovereignty-bet/",
        sourceType: "VCブログ",
        priority: "中",
        timing: "継続ウォッチ",
        relevance: 80,
        relatedTags: ["AI", "VC", "市場インテリジェンス"],
        affected: ["防衛tech", "AIインフラ企業", "欧州スタートアップ", "政策担当者", "VC"],
        change: "AIと防衛・国家インフラの結びつきが強まり、透明性義務や国産/域内インフラの論点が資金調達環境に影響する。",
        importance: "補助金、政府調達、輸出規制、AI表示義務は、スタートアップの販売先とコスト構造を変える可能性がある。",
        implication: "政策ドリブン市場では、技術優位だけでなく調達要件、データ所在、輸出管理、コンプライアンス対応力を投資DDに入れる。",
        uncertainty: "政策規模、実際の公募条件、対象企業、規制の執行時期は一次情報の追加確認が必要。"
      },
      {
        theme: "重要な新規情報なし",
        title: "Academic VC / 大学発スタートアップは今週採用すべき新規情報なし",
        summary:
          "SiftedのUniversity of Edinburgh spinouts記事など大学発・spinout関連候補は確認したが、RSS本文だけでは個別企業の資金調達、研究成果、投資判断に足る詳細を確認できなかった。",
        date: "2026-07-01",
        sourceTitle: "Sifted: University of Edinburgh spinouts looking to raise",
        sourceUrl: "https://sifted.eu/articles/university-of-edinburgh-spinouts-looking-to-raise/",
        sourceType: "メディア記事",
        priority: "低",
        timing: "継続ウォッチ",
        relevance: 68,
        relatedTags: ["VC", "スタートアップ", "市場インテリジェンス"],
        affected: ["大学発スタートアップ", "研究者創業者", "Academic VC", "deeptech投資家"],
        change: "対象期間内に、投資判断へ採用できるだけの詳細をRSS本文から確認できるAcademic VC / 大学発スタートアップ情報はなかった。",
        importance: "空情報を明示すると、調査漏れではなく確認範囲内で採用材料が不足していたことを読者が判断できる。",
        implication: "大学発deeptechとspinout資金調達は継続ウォッチし、個別企業の調達額、研究成果、投資家、商用化状況を一次情報で確認できた時点で採用する。",
        uncertainty: "記事本文や各大学・企業の一次発表には追加情報がある可能性があり、RSS本文だけでは採用判断を完結しない。"
      }
    ],
    actionCards: [
      {
        owner: "VCリサーチ担当",
        action: "欧州の専門型ファンドとsolo GPの投資テーマ・LP構成を比較する",
        due: "2026-07-08まで",
        reason: "Academic VCや大学発deeptech向けファンド設計の比較対象にするため。"
      },
      {
        owner: "AI投資担当",
        action: "AIインフラ候補の推論単価、契約済み需要、セキュリティ要件を分けてDD項目化する",
        due: "すぐ",
        reason: "大型調達や高評価額が、売上、予約、技術リスクのどれに支えられているかを判別するため。"
      },
      {
        owner: "市場インテリジェンス担当",
        action: "Wayve型の従業員テンダーと後期未上場AI企業の流動性設計を継続ウォッチする",
        due: "1か月以内",
        reason: "採用競争力、セカンダリー価格、次回ラウンド評価の先行指標になりうるため。"
      },
      {
        owner: "ヘルスケア投資担当",
        action: "薬局自動化、高齢者支援、住居安定AIの払い手と導入現場を整理する",
        due: "2026-07-15まで",
        reason: "医療AIを診断支援だけでなく運用改善投資として評価するため。"
      }
    ],
    sections: [
      {
        title: "調査条件",
        items: [
          "主対象期間: 2026-06-24 00:00 JSTから2026-07-01 13:14 JSTまで。実行時点でRSS/Atomから取得できた公開情報を対象にした。",
          "対象フィード: 指定された42件のRSS/Atomフィード。重複フィード、同一記事、http/https差分、trailing slash差分、主要utmパラメータは正規化して統合した。",
          "取得結果: 42フィード中38フィードを取得。重複後の対象期間内記事は175件、VC・startup・funding・AI・market intelligence文脈のキーワード該当候補は109件。",
          "遡り条件: 対象期間内だけで重要候補が十分あったため、過去14日への遡りは行っていない。",
          "注意事項: RSS本文が短い媒体は、確認できたタイトル、公開日、URL、RSS要約を根拠にし、未確認の詳細は断定しない。"
        ]
      },
      {
        title: "エグゼクティブサマリー",
        items: [
          "VC資金供給: 欧州ではリピート創業者、deeptech、solo GPなど専門性を前面に出すファンド形成が継続している。",
          "AI投資: AIチップ、半導体、長期AIエージェント、エージェントセキュリティ、金融AIで大型調達が集中した。",
          "流動性: Wayveの従業員テンダーは、後期AI企業がIPO前に人材維持と株式流動性を設計する事例として重要。",
          "ヘルスケア: 薬局自動化、高齢者支援、住居安定のような現場運用領域にAI/自動化資金が入っている。",
          "政策・規制: AI主権、防衛投資、EU AI Actの透明性義務は、AIスタートアップの販売先、調達、コンプライアンスコストへ影響しうる。"
        ]
      },
      {
        title: "テーマ別の調査結果",
        items: [
          "1. VCファンド形成 / 見出し: 欧州でリピート創業者・deeptech向けの新ファンド形成が続く。媒体: Sifted。公開日: 2026-07-01。URL: https://sifted.eu/articles/tapestry-vc-london-office-vc-fund-openai/ および https://sifted.eu/articles/rick-hao-50m-solo-gp-fund-deeptech-startups/。要点: Tapestry VCの80百万ドルファンドと、元Speedinvest partnerのRick Hao氏による50百万ドルsolo GPファンドが確認された。投資・スタートアップ文脈での示唆: 欧州初期投資は、汎用的なシード資金ではなく、創業者属性やdeeptech知見を絞った資金供給へ分化している。",
          "2. AIインフラ / 見出し: AIインフラとエージェント周辺で大型資金調達が集中。媒体: TechCrunch、VC News Daily。公開日: 2026-06-25から2026-06-30。URL: https://techcrunch.com/2026/06/30/nvidia-competitor-etched-hits-5b-valuation-1b-in-sales-for-ai-chip/ ほか。要点: Etched、Reed Semiconductor、Sail Research、Straikerなど、推論チップ、半導体、長期AIエージェント、AIセキュリティの調達が確認された。投資・スタートアップ文脈での示唆: AIアプリの評価では、モデル性能だけでなく、推論コスト、契約済み需要、セキュリティ、運用信頼性をDDする必要がある。",
          "3. 後期AI・流動性 / 見出し: Wayveの従業員テンダーが未上場AI企業の人材維持策を示す。媒体: TechCrunch。公開日: 2026-07-01。URL: https://techcrunch.com/2026/06/30/wayve-launches-85m-employee-tender-offer-at-8-5b-valuation/。要点: Wayveは85百万ドルの従業員テンダーを8.5十億ドル評価で実施すると報じられた。投資・スタートアップ文脈での示唆: 後期未上場AI企業では、採用競争と従業員流動性が資本政策の重要論点になっている。",
          "4. 金融AI・市場 / 見出し: AI金融ソフトウェアとオルタナ投資データで大型調達が続く。媒体: FinanceAsia、VC News Daily。公開日: 2026-06-25から2026-07-01。URL: https://www.financeasia.com/article/airwallex-raises-320m-to-build-out-ai-financial-software/507943、https://vcnewsdaily.com/tetrix/venture-capital-funding/rnzmprrjyv、https://vcnewsdaily.com/caplight/venture-capital-funding/zqjsvjrngc。要点: Airwallexの320百万ドル調達、Tetrixの15百万ドルSeries A、Caplightの16百万ドルSeries Aが確認された。投資・スタートアップ文脈での示唆: 非公開市場、オルタナ、セカンダリー、決済のデータ化とAI活用はLP/GP双方の意思決定インフラになりうる。",
          "5. ヘルスケア・ライフサイエンス / 見出し: ロボティック薬局、高齢者支援、住居安定AIに資金が入る。媒体: VC News Daily。公開日: 2026-06-25から2026-06-30。URL: https://vcnewsdaily.com/queue/venture-capital-funding/qpdtwmrmvj ほか。要点: Queue、Hera、Upsideなど、医療・高齢者支援の運用課題に関わる資金調達が確認された。投資・スタートアップ文脈での示唆: 医療AIは診断支援だけでなく、薬局、住居、介護周辺の労働集約業務へ広がっている。",
          "6. 規制・政策 / 見出し: AI主権、防衛投資、EU AI Actがスタートアップ市場の前提になる。媒体: VC Cafe、Sifted、deutsche-startups.de。公開日: 2026-06-26から2026-06-28。要点: イスラエルのAI主権投資、英国防衛投資計画へのスタートアップ反応、EU AI Actの透明性義務が確認された。投資・スタートアップ文脈での示唆: 政策ドリブン市場では、政府調達、輸出管理、データ所在、透明性表示を初期から事業計画に入れる必要がある。",
          "7. Academic VC / 大学発スタートアップ / 今週確認できた重要な新規情報なし。SiftedのUniversity of Edinburgh spinouts記事など関連候補は確認したが、RSS本文だけでは個別企業の資金調達・研究成果・投資判断に足る詳細を確認できなかった。大学発deeptechとspinout資金調達は継続ウォッチする。"
        ]
      },
      {
        title: "今週検討すべき対応アクション",
        items: [
          "欧州の専門型VCファンドについて、ファンドサイズ、投資領域、LP、初回チェックサイズ、投資済みポートフォリオを比較表にする。",
          "AIインフラ投資候補について、推論単価、契約済み需要、GPU/半導体供給リスク、セキュリティ要件、顧客集中をDD項目に追加する。",
          "後期AI企業のテンダー、セカンダリー、従業員流動性イベントを、次回ラウンド評価と採用競争力の先行指標として継続収集する。",
          "ヘルスケアAI/ロボティクスでは、臨床アウトカムよりも先に、現場業務削減、払い手、責任分界、導入オペレーションを確認する。",
          "AI主権・防衛・EU AI Act関連は、政策発表だけで投資判断せず、公募条件、調達要件、執行時期、対象企業の一次情報を確認する。"
        ]
      },
      {
        title: "継続ウォッチすべきテーマ",
        items: [
          "欧州deeptech/solo GP/専門型ファンドの資金調達と実際の投資先。",
          "AIチップ、推論最適化、エージェントセキュリティ、長期タスクAIの売上化と粗利。",
          "後期未上場AI企業のセカンダリー、従業員テンダー、IPO準備。",
          "金融AI、非公開市場データ、オルタナ投資プラットフォームの規制対応。",
          "大学発spinout、研究者創業、Academic VCに直結する資金調達・制度更新。"
        ]
      },
      {
        title: "取得エラー",
        items: [
          "VC Adventure: https://www.sethlevine.com/feed / failure type: 404 Not Found",
          "FinMasters: https://finmasters.com/feed/ / failure type: 403 Forbidden",
          "CFA Institute Enterprising Investor: https://blogs.cfainstitute.org/investor/feed/ / failure type: not xml feed",
          "The Twenty Minute VC: https://thetwentyminutevc.libsyn.com/rss / failure type: timeout"
        ]
      }
    ]
  },
  {
    id: "healthcare-care-weekly-2026-06-30",
    title: "医療・介護領域の最新動向調査レポート 2026-06-30週",
    category: "医療・介護",
    articleType: "weekly",
    articleTypeLabel: "週次最新情報",
    cadence: "週次で自動更新・追加",
    tags: ["医療", "介護", "AI", "エンジニアリング", "制度", "DX"],
    summary:
      "2026年6月24日から6月30日までに公開・更新された一次情報を中心に、医療・介護制度、補助金、公募、医療DX、標準型電子カルテ、現場運用への影響を整理した週次レポートです。",
    publishedAt: "2026-06-30",
    checkedAt: "2026-06-30",
    sources: [
      {
        title: "厚生労働省 新着情報RSS",
        url: "https://www.mhlw.go.jp/stf/news.rdf"
      },
      {
        title: "厚生労働省 医療施設等施設整備費補助金の内示",
        url: "https://www.mhlw.go.jp/stf/newpage_74196.html"
      },
      {
        title: "厚生労働省 地域介護・福祉空間整備等施設整備交付金の内示",
        url: "https://www.mhlw.go.jp/stf/hard2026-1_00001.html"
      },
      {
        title: "厚生労働省 第135回社会保障審議会介護保険部会",
        url: "https://www.mhlw.go.jp/stf/newpage_74114.html"
      },
      {
        title: "厚生労働省 介護保険制度における預貯金等の把握等に係る検討の場",
        url: "https://www.mhlw.go.jp/stf/newpage_74167.html"
      },
      {
        title: "厚生労働省 療養病床の在り方等に関する検討会",
        url: "https://www.mhlw.go.jp/stf/shingi2/0000096887.html"
      },
      {
        title: "厚生労働省 抗菌薬等医薬品備蓄体制整備事業 公募",
        url: "https://www.mhlw.go.jp/stf/newpage_74146.html"
      },
      {
        title: "デジタル庁 医療DX関連ワーキンググループ構成員決定",
        url: "https://www.digital.go.jp/news/43124388-123a-484b-ac1b-350ee43dd679"
      }
    ],
    highlights: [
      "標準型電子カルテのプロダクトワーキンググループが始動し、UX、外部連携、導入・運用保守を含む実装論点が前面に出た。",
      "医療施設等施設整備費補助金と地域介護・福祉空間整備等施設整備交付金の内示が公表され、医療・介護双方で施設投資の実行確認が必要になった。",
      "介護保険部会で基本指針案や中山間・人口減少地域の論点が示され、自治体計画と介護事業者のサービス提供体制に影響しうる。",
      "抗菌薬等医薬品備蓄体制整備事業の2次公募は2026年7月31日必着で、供給不安対策に関わる事業者は短期対応が必要。",
      "報酬改定、AI医療規制、海外DXについては、今週確認できた重要な新規情報なし。推測で補わず継続ウォッチとする。"
    ],
    lead: {
      title: "今週の判断ポイント",
      body:
        "今週は、標準型電子カルテ、施設整備補助金、介護保険基本指針、医薬品備蓄の4領域で具体的な確認事項が出た。すぐ動くべきものは公募・内示・仕様ウォッチで、報酬改定やAI医療規制は新規重要情報なしとして継続監視に切り分ける。",
      quote:
        "仕様・補助金・制度検討が同じ週に並んだことで、医療・介護DXは単体機能ではなく、現場運用、地域連携、申請・調達支援まで含めた設計課題として見る必要がある。"
    },
    dashboardMetrics: [
      {
        label: "高優先度",
        value: "5件",
        caption: "すぐ確認すべき公募、内示、標準化論点",
        tone: "high"
      },
      {
        label: "一次情報",
        value: "8本",
        caption: "厚生労働省・デジタル庁の公表資料を中心に確認",
        tone: "primary"
      },
      {
        label: "最短期限",
        value: "7/31",
        caption: "抗菌薬等医薬品備蓄体制整備事業の2次公募",
        tone: "deadline"
      },
      {
        label: "新規情報なし",
        value: "3領域",
        caption: "報酬改定、AI医療規制、海外DXは推測で補わない",
        tone: "watch"
      }
    ],
    topicCards: [
      {
        theme: "医療DX・標準化",
        title: "標準型電子カルテ導入版の設計・開発で令和8年度PWGが決定",
        summary:
          "亀田医療情報、ヘルステックハブ、ウィーメックス、DONUTS、レスコが構成員として公表された。UX、処方、検査、診療情報提供書、レセコン、外注検査、導入・運用保守まで含めた仕様検討が進む。",
        date: "2026-06-26",
        sourceTitle: "デジタル庁 医療DX関連ワーキンググループ構成員決定",
        sourceUrl: "https://www.digital.go.jp/news/43124388-123a-484b-ac1b-350ee43dd679",
        sourceType: "一次情報",
        priority: "高",
        timing: "すぐ",
        relevance: 95,
        relatedTags: ["医療", "DX", "エンジニアリング"],
        affected: ["診療所", "中小病院", "電子カルテベンダー", "レセコンベンダー", "外注検査会社"],
        change: "標準型電子カルテの実装要件が、単体機能ではなく外部連携、UX、導入・保守まで含めて具体化される。",
        importance: "標準化は電子カルテ周辺の競争条件、連携仕様、導入支援の価格設計を変える可能性がある。",
        implication: "周辺SaaSは、標準型電子カルテへの接続、移行支援、運用監視、院内ワークフロー改善を商品化できる可能性がある。",
        uncertainty: "技術仕様の詳細、成果物の公開時期、参加企業以外の接続方針は未確認。"
      },
      {
        theme: "補助金・施設整備",
        title: "医療施設等施設整備費補助金の交付額内示が公表",
        summary:
          "重点医師偏在対策支援区域、へき地医療、院内感染対策、分娩取扱施設、臨床研修病院などの施設整備に関する内示が公表された。",
        date: "2026-06-30",
        sourceTitle: "厚生労働省 医療施設等施設整備費補助金の内示",
        sourceUrl: "https://www.mhlw.go.jp/stf/newpage_74196.html",
        sourceType: "一次情報",
        priority: "高",
        timing: "すぐ",
        relevance: 90,
        relatedTags: ["医療", "制度"],
        affected: ["都道府県", "病院", "診療所", "へき地医療拠点病院", "分娩取扱施設"],
        change: "施設整備対象の採択・内示状況が明らかになり、事業化、調達、導入準備が進む。",
        importance: "地域医療、医師偏在、感染対策、分娩体制などの投資が具体化するため、関係事業者は案件化のタイミングを把握できる。",
        implication: "医療機関向けベンダーは、採択地域の設備投資、導入支援、補助金事務支援を営業・CS計画に反映できる。",
        uncertainty: "施設別採択状況、補助率、補助上限額、対象外経費は添付資料・自治体公表情報の確認が必要。"
      },
      {
        theme: "介護制度",
        title: "介護保険部会で基本指針案と特定地域の考え方が提示",
        summary:
          "社会福祉法等の一部改正、基本指針案、中山間・人口減少地域の考え方が資料として公開された。",
        date: "2026-06-29",
        sourceTitle: "厚生労働省 第135回社会保障審議会介護保険部会",
        sourceUrl: "https://www.mhlw.go.jp/stf/newpage_74114.html",
        sourceType: "一次情報",
        priority: "高",
        timing: "3か月以内",
        relevance: 88,
        relatedTags: ["介護", "制度", "DX"],
        affected: ["自治体", "介護施設", "居宅介護支援事業所", "訪問介護", "利用者・家族"],
        change: "介護保険事業計画、地域包括ケア、人口減少地域でのサービス提供体制に関する論点が整理される。",
        importance: "自治体計画と事業者の体制整備、採用、連携、記録・報告業務に影響する可能性が高い。",
        implication: "介護SaaSは、地域特性、提供体制、自治体報告に関わる設定や帳票の柔軟性を高める余地がある。",
        uncertainty: "基本指針案の確定内容、自治体ごとの運用、事業者に求められる具体的対応は未確定。"
      },
      {
        theme: "公募・供給リスク",
        title: "抗菌薬等医薬品備蓄体制整備事業の2次公募が開始",
        summary:
          "医療上必要な医薬品の供給不安解消と、平時からの供給途絶リスクへの備えを目的に、実施事業者の2次公募が行われている。",
        date: "2026-06-29",
        sourceTitle: "厚生労働省 抗菌薬等医薬品備蓄体制整備事業 公募",
        sourceUrl: "https://www.mhlw.go.jp/stf/newpage_74146.html",
        sourceType: "一次情報",
        priority: "高",
        timing: "すぐ",
        relevance: 86,
        relatedTags: ["医療", "制度"],
        affected: ["医薬品製造販売業者", "卸", "医療機関", "薬局", "医薬品流通支援事業者"],
        change: "抗菌薬等の備蓄・供給安定化に関わる事業者選定が進む。公募締切は2026-07-31必着。",
        importance: "医療機関の診療継続、感染症対応、地域医療の安定性に直結する。",
        implication: "医薬品在庫管理、需要予測、供給可視化、医療機関向けアラート機能に事業機会がある。",
        uncertainty: "公募要領の対象範囲、補助条件、採択基準の精査が必要。"
      },
      {
        theme: "重要な新規情報なし",
        title: "報酬改定・AI医療規制・海外医療DXは今週採用すべき新規情報なし",
        summary:
          "厚生労働省、PMDA等の公的情報を確認した範囲では、報酬、加算、医療AI規制、SaMD、海外DXについて今週の意思決定に使うべき重要な新規一次情報は確認できなかった。",
        date: "2026-06-30",
        sourceTitle: "厚生労働省 新着情報RSS",
        sourceUrl: "https://www.mhlw.go.jp/stf/news.rdf",
        sourceType: "一次情報",
        priority: "低",
        timing: "継続ウォッチ",
        relevance: 62,
        relatedTags: ["AI", "制度", "DX"],
        affected: ["医療機関", "介護事業者", "AI医療ベンダー", "SaaS事業者"],
        change: "新規重要情報なしとして扱い、推測で補わない。",
        importance: "情報がないことを明示すると、調査漏れと制度未更新を分けて判断できる。",
        implication: "来週以降も一次情報だけを継続確認し、二次情報だけで実装判断しない。",
        uncertainty: "個別自治体・業界団体・企業公式発表には追加確認余地がある。"
      }
    ],
    actionCards: [
      {
        owner: "事業開発担当",
        action: "抗菌薬等医薬品備蓄体制整備事業の公募要領を確認する",
        due: "2026-07-05まで",
        reason: "応募対象、締切、必要書類、社内決裁日程を早期に固めるため。"
      },
      {
        owner: "医療機関向けプロダクト責任者",
        action: "標準型電子カルテの公開仕様・今後のPWG資料を追跡する",
        due: "すぐ",
        reason: "レセコン、外注検査、診療情報提供書、運用保守で接続・支援できる機能候補を洗い出すため。"
      },
      {
        owner: "介護領域の企画担当",
        action: "介護保険部会の基本指針案と特定地域の論点を読む",
        due: "3か月以内",
        reason: "自治体計画、地域包括ケア、中山間・人口減少地域で必要になる帳票・連携・説明支援を整理するため。"
      },
      {
        owner: "営業・CS担当",
        action: "補助金・交付金の内示地域を確認する",
        due: "すぐ",
        reason: "導入相談、見積支援、補助金事務支援の対象リストを作るため。"
      }
    ],
    sections: [
      {
        title: "調査条件",
        items: [
          "主対象期間: 2026-06-24から2026-06-30まで。実行日である2026-06-30時点で公開確認できた情報を対象にした。",
          "必要に応じて遡った期間: デジタル庁の医療DX関連ワーキンググループは、2026-06-26公開記事内に2026-06-03の活動開始が含まれるため背景として扱った。その他は主対象期間内の情報を中心にした。",
          "調査対象: 厚生労働省、デジタル庁、PMDA等の行政・公的情報を優先し、一次情報で確認できる内容を採用した。",
          "注意事項: 公募・補助金の補助率、上限額、対象経費などは公表資料の添付ファイル確認が必要な項目がある。本文では確認できた範囲と未確認点を分けて記載する。"
        ]
      },
      {
        title: "エグゼクティブサマリー",
        items: [
          "今週の重要トピック上位: 医療DX関連ワーキンググループ始動、医療施設整備補助金の内示、地域介護・福祉空間整備交付金の内示、介護保険部会の基本指針論点、抗菌薬等医薬品備蓄体制整備事業の2次公募。",
          "対応優先度の高い課題: 2026-07-31必着の抗菌薬等医薬品備蓄体制整備事業、公表された施設整備補助金・交付金の内示内容、標準型電子カルテの連携仕様・導入支援要件の継続確認。",
          "今すぐ追うべき制度・公募・期限: 抗菌薬等医薬品備蓄体制整備事業の2次公募締切、医療施設等施設整備費補助金の都道府県別内示、地域介護・福祉空間整備等施設整備交付金の一次協議分内示。",
          "事業機会として注目すべき変化: 標準型電子カルテの設計段階でUX、レセコン、外注検査、医療DX連携、導入・運用保守が明示され、周辺SaaSや導入支援の要件化が進む可能性がある。",
          "リスクとして警戒すべき変化: 介護保険の基本指針や預貯金把握の検討は、自治体、事業者、利用者家族の事務負担や説明責任を増やす可能性がある。現時点では検討段階のため、制度確定前の過剰実装は避ける。"
        ]
      },
      {
        title: "テーマ別の調査結果",
        items: [
          "1. 医療・介護制度改正 / 見出し: 第135回社会保障審議会介護保険部会で基本指針案と特定地域の考え方が提示。情報の概要: 社会福祉法等の一部改正、基本指針案、中山間・人口減少地域の考え方が資料として公開された。公開日または更新日: 2026-06-29。情報源リンク: https://www.mhlw.go.jp/stf/newpage_74114.html。一次情報か二次情報か: 一次情報。影響を受ける主体: 自治体、介護施設、居宅介護支援事業所、訪問介護、訪問看護、介護DXベンダー、利用者・家族。何が変わるのか: 介護保険事業計画、地域包括ケア、人口減少地域でのサービス提供体制に関する論点が整理される。なぜ重要なのか: 自治体計画と事業者の体制整備、採用、連携、記録・報告業務に影響する可能性が高い。今後対応が必要になりそうな課題: 基本指針確定後の自治体計画、地域区分、サービス提供体制、データ提出や説明資料の更新。プロダクト・事業・オペレーションへの示唆: 介護SaaSは地域特性、提供体制、自治体報告に関わる設定や帳票の柔軟性を高める余地がある。対応優先度: 高。対応時期の目安: 3か月以内。不確実性・追加確認が必要な点: 基本指針案の確定内容、自治体ごとの運用、事業者に求められる具体的対応は未確定。",
          "1. 医療・介護制度改正 / 見出し: 介護保険制度における預貯金等の把握に関する検討が継続。情報の概要: 第2回検討の場の資料として補足給付の現状資料が公開された。一部ヒアリング資料は非公表。公開日または更新日: 2026-06-30。情報源リンク: https://www.mhlw.go.jp/stf/newpage_74167.html。一次情報か二次情報か: 一次情報。影響を受ける主体: 自治体、介護施設、利用者、家族、ケアマネジャー、申請支援システム事業者。何が変わるのか: 補足給付や資産把握の確認手続きが今後見直される可能性がある。なぜ重要なのか: 申請・確認・説明・異議対応の実務負荷が大きくなりやすい領域であり、利用者家族とのコミュニケーションにも影響する。今後対応が必要になりそうな課題: 証憑管理、本人確認、金融資産確認、自治体への提出フロー、施設側の説明資料。プロダクト・事業・オペレーションへの示唆: 申請支援、証憑管理、利用者家族向け説明、自治体連携のワークフロー設計が事業機会になりうる。対応優先度: 中。対応時期の目安: 半年以内。不確実性・追加確認が必要な点: ヒアリング資料が非公表であり、制度変更の方向性と実施時期は未確認。",
          "2. 介護報酬・診療報酬・加算・算定要件の変更 / 今週確認できた重要な新規情報なし。厚生労働省の新着情報では医療費動向や介護給付費等実態統計は確認したが、2026-06-24から2026-06-30の範囲で報酬、加算、算定要件の新たな変更として意思決定に使うべき一次情報は確認できなかった。",
          "3. 政策・通知・審議会資料 / 見出し: 療養病床の在り方等に関する検討会で慢性期医療・介護資源の論点が整理。情報の概要: 療養病床の在り方、20対1・25対1医療療養病床と介護療養病床の比較、医療・介護資源の地域差、介護療養型老人保健施設などの資料が公開された。公開日または更新日: 2026-06-30。情報源リンク: https://www.mhlw.go.jp/stf/shingi2/0000096887.html。一次情報か二次情報か: 一次情報。影響を受ける主体: 病院、療養病床を持つ医療機関、介護医療院、自治体、地域医療連携部門、在宅医療事業者。何が変わるのか: 慢性期病床と介護サービスの役割分担、地域差を前提にした提供体制の見直しが議論される。なぜ重要なのか: 病床機能、退院調整、在宅・施設連携、収益構造に影響する可能性がある。今後対応が必要になりそうな課題: 病床機能転換、地域連携パス、退院支援、施設・在宅との情報連携。プロダクト・事業・オペレーションへの示唆: 地域医療連携、退院調整、施設空き状況、在宅移行支援のデータ連携機能が重要になる。対応優先度: 中。対応時期の目安: 半年以内。不確実性・追加確認が必要な点: 今回は論点整理段階であり、制度・報酬への反映時期は未確認。",
          "4. 医療DX・介護DX・電子カルテ・標準化 / 見出し: 標準型電子カルテ導入版の設計・開発で令和8年度プロダクトワーキンググループが決定。情報の概要: 参加企業は亀田医療情報、ヘルステックハブ、ウィーメックス、DONUTS、レスコ。技術仕様について、処方、検査、診療情報提供書、医療DX、レセコン、外注検査、導入・運用保守を含む観点で意見聴取しながら開発を進めるとされた。公開日または更新日: 2026-06-26。情報源リンク: https://www.digital.go.jp/news/43124388-123a-484b-ac1b-350ee43dd679。一次情報か二次情報か: 一次情報。影響を受ける主体: 診療所、中小病院、電子カルテベンダー、レセコンベンダー、外注検査会社、医療DX支援事業者、地域医療連携ベンダー。何が変わるのか: 標準型電子カルテの実装要件が、単体機能ではなく外部連携、UX、導入・保守まで含めて具体化される。なぜ重要なのか: 標準化は電子カルテ周辺の競争条件、連携仕様、導入支援の価格設計を変える可能性がある。今後対応が必要になりそうな課題: 技術仕様、API、データ標準、既存電子カルテ・レセコンとの接続、現場教育、運用保守責任の切り分け。プロダクト・事業・オペレーションへの示唆: 周辺SaaSは標準型電子カルテへの接続余地、移行支援、運用監視、院内ワークフロー改善を商品化できる可能性がある。対応優先度: 高。対応時期の目安: すぐ。不確実性・追加確認が必要な点: 技術仕様の詳細、成果物の公開時期、参加企業以外の接続方針は未確認。",
          "5. 補助金・助成金・公募 / 見出し: 医療施設等施設整備費補助金の交付額内示が公表。情報の概要: 重点医師偏在対策支援区域の診療所承継・開業支援、へき地診療所、へき地医療拠点病院、院内感染対策、解剖・死亡時画像診断、研修医施設、分娩取扱施設、臨床研修病院施設整備などの内示が公表された。公開日または更新日: 2026-06-30。情報源リンク: https://www.mhlw.go.jp/stf/newpage_74196.html。一次情報か二次情報か: 一次情報。影響を受ける主体: 都道府県、病院、診療所、へき地医療拠点病院、分娩取扱施設、医療機器・施設整備ベンダー。何が変わるのか: 施設整備対象の採択・内示状況が明らかになり、事業化・調達・導入準備が進む。なぜ重要なのか: 地域医療、医師偏在、感染対策、分娩体制などの投資が具体化するため、関係事業者は案件化のタイミングを把握できる。今後対応が必要になりそうな課題: 都道府県別の内示額・件数、対象施設、調達スケジュール、補助要件、実績報告。プロダクト・事業・オペレーションへの示唆: 医療機関向けベンダーは採択地域の設備投資、導入支援、補助金事務支援を営業・CS計画に反映できる。対応優先度: 高。対応時期の目安: すぐ。不確実性・追加確認が必要な点: 施設別採択状況や詳細条件は添付資料・自治体公表情報の確認が必要。施行日: 該当なし。適用開始日: 公表資料上は確認できず。公募開始日: 該当なし。公募締切: 該当なし。対象事業者: 都道府県および関係医療施設。対象経費: 施設整備費。補助率・補助上限額: 公表資料上は確認できず。対象地域: 各都道府県。必要な準備: 内示対象、交付条件、調達・契約手続きの確認。申請・対応上の注意点: 都道府県および厚生労働省の交付条件、実績報告、補助対象外経費を確認する。",
          "5. 補助金・助成金・公募 / 見出し: 地域介護・福祉空間整備等施設整備交付金の一次協議分内示が公表。情報の概要: 令和8年度地域介護・福祉空間整備等施設整備交付金の一次協議分について、内示資料が公開された。公開日または更新日: 2026-06-26。情報源リンク: https://www.mhlw.go.jp/stf/hard2026-1_00001.html。一次情報か二次情報か: 一次情報。影響を受ける主体: 自治体、介護施設、地域密着型サービス、施設整備事業者、介護設備ベンダー。何が変わるのか: 地域の介護・福祉施設整備に関する採択・内示状況が進み、改修、設備、施設整備案件の実行段階に入る。なぜ重要なのか: 介護現場の老朽化、安全対策、災害対応、業務環境改善に関わる投資につながる。今後対応が必要になりそうな課題: 内示対象施設、自治体手続き、施工・調達、補助対象経費、完了報告。プロダクト・事業・オペレーションへの示唆: 介護施設向け業務支援や設備導入支援は、内示地域に合わせた導入計画・見積支援が有効。対応優先度: 高。対応時期の目安: すぐ。 不確実性・追加確認が必要な点: PDF内の自治体別内示額・件数、対象事業の詳細確認が必要。施行日: 該当なし。適用開始日: 公表資料上は確認できず。公募開始日: 一次協議分として実施済み。公募締切: 今回ページでは確認できず。対象事業者: 自治体および介護・福祉施設等。対象経費: 施設整備等。補助率・補助上限額: 公表資料上は確認できず。対象地域: 各自治体。必要な準備: 内示内容、交付条件、工期、調達手続きの確認。申請・対応上の注意点: 自治体の実施要領、補助対象外経費、完了期限を確認する。",
          "5. 補助金・助成金・公募 / 見出し: 抗菌薬等医薬品備蓄体制整備事業の2次公募が開始。情報の概要: 医療上必要な医薬品の供給不安解消と、平時からの供給途絶リスクへの備えを目的に、実施事業者の2次公募が行われている。公開日または更新日: 2026-06-29。情報源リンク: https://www.mhlw.go.jp/stf/newpage_74146.html。一次情報か二次情報か: 一次情報。影響を受ける主体: 医薬品製造販売業者、卸、医療機関、薬局、医薬品流通支援事業者。何が変わるのか: 抗菌薬等の備蓄・供給安定化に関わる事業者選定が進む。なぜ重要なのか: 医療機関の診療継続、感染症対応、地域医療の安定性に直結する。今後対応が必要になりそうな課題: 応募可否、備蓄対象、供給計画、在庫管理、品質管理、報告義務。プロダクト・事業・オペレーションへの示唆: 医薬品在庫管理、需要予測、供給可視化、医療機関向けアラート機能に事業機会がある。対応優先度: 高。対応時期の目安: すぐ。 不確実性・追加確認が必要な点: 公募要領の対象範囲、補助条件、採択基準の精査が必要。施行日: 該当なし。適用開始日: 採択後の契約・交付条件による。公募開始日: 2026-06-29。公募締切: 2026-07-31必着。対象事業者: 公募要領で定める実施事業者。対象経費: 公募要領で確認が必要。補助率・補助上限額: 公募要領で確認が必要。対象地域: 全国と推定されるが公募要領確認が必要。必要な準備: 公募要領、様式、事業計画、備蓄・供給体制、提出書類の確認。申請・対応上の注意点: 締切が必着のため、郵送・提出方法と社内決裁を前倒しする。",
          "6. AI医療・生成AI・SaMD・医療AI規制・個人情報保護 / 今週確認できた重要な新規情報なし。PMDAのプログラム医療機器関連情報など公的ページは確認したが、2026-06-24から2026-06-30の範囲で医療AI規制やSaMD制度の重要な新規更新として採用すべき一次情報は確認できなかった。",
          "7. 病院・介護施設向け業務支援、業務効率化、採用・人材不足、経営支援 / 見出し: 医療施設動態調査と介護給付費等実態統計が更新。情報の概要: 医療施設数や介護給付費等の統計が更新され、供給体制や利用実態の基礎データとして参照できる。公開日または更新日: 医療施設動態調査は2026-06-30、介護給付費等実態統計は2026-06-24。情報源リンク: https://www.mhlw.go.jp/toukei/saikin/hw/iryosd/m26/is2604.html および https://www.mhlw.go.jp/toukei/saikin/hw/kaigo/kyufu/2026/03.html。一次情報か二次情報か: 一次情報。影響を受ける主体: 病院、診療所、介護施設、自治体、採用支援事業者、経営支援事業者、SaaSベンダー。何が変わるのか: 直接の制度変更ではないが、施設数、サービス利用、給付状況を基に市場・運用課題を再評価できる。なぜ重要なのか: 人材不足、経営支援、地域差、サービス需給を議論する際の基礎データになる。今後対応が必要になりそうな課題: 地域別・サービス別の変化、採用難や施設減少との関係、営業対象地域の優先順位づけ。プロダクト・事業・オペレーションへの示唆: 市場分析、営業テリトリー設計、導入優先地域、業務効率化ニーズの仮説検証に使える。対応優先度: 低。対応時期の目安: 1年以内。 不確実性・追加確認が必要な点: 今回の実装記事では統計値の詳細分析までは行っておらず、地域別の追加集計が必要。",
          "8. 主要プレイヤー・競合企業・スタートアップ動向 / 見出し: 医療DX関連ワーキンググループに民間企業5社が参加。分類: 行政・自治体との連携、制度対応、新サービス・新機能に近い設計開発関与。情報の概要: 亀田医療情報、ヘルステックハブ、ウィーメックス、DONUTS、レスコが構成員として公表された。公開日または更新日: 2026-06-26。情報源リンク: https://www.digital.go.jp/news/43124388-123a-484b-ac1b-350ee43dd679。一次情報か二次情報か: 一次情報。影響を受ける主体: 電子カルテベンダー、レセコンベンダー、医療DX支援事業者、診療所、競合SaaS事業者。何が変わるのか: 標準型電子カルテの仕様形成に関わるプレイヤーが明確になり、周辺ベンダーの戦略判断材料になる。なぜ重要なのか: 標準仕様が市場の接続条件や販売戦略に影響する可能性がある。今後対応が必要になりそうな課題: 参加企業の公開資料、仕様公開、周辺API、相互運用性、価格設計。プロダクト・事業・オペレーションへの示唆: 競合分析では、参加企業の既存電子カルテ、レセコン、医療情報連携機能との関係を追う必要がある。対応優先度: 高。対応時期の目安: すぐ。 不確実性・追加確認が必要な点: 各社の具体的役割、成果物、仕様反映範囲は未確認。",
          "9. 医療・介護現場の運用課題、社会課題、労働課題 / 見出し: 慢性期病床、へき地医療、分娩、介護施設整備、医薬品供給が同週に複数提示。情報の概要: 療養病床検討、医療施設整備補助金、介護施設整備交付金、抗菌薬備蓄公募が重なり、地域差、供給不足、施設老朽化、医療資源偏在が継続課題として浮上している。公開日または更新日: 2026-06-26から2026-06-30。情報源リンク: 厚生労働省各公表資料。一次情報か二次情報か: 一次情報。影響を受ける主体: 病院、診療所、介護施設、自治体、患者・利用者、家族、ベンダー。何が変わるのか: 直接の単一変更ではないが、複数政策が同じ構造課題を指している。なぜ重要なのか: 施設、人材、地域差、物資供給は単独では解けず、システム化・標準化・現場運用改善が必要になる。今後対応が必要になりそうな課題: 地域ごとの需要把握、施設投資、在庫・調達、退院・転院・在宅移行、自治体連携。プロダクト・事業・オペレーションへの示唆: 現場の単純な効率化だけでなく、地域連携と供給管理を含むプロダクト仮説が有効。対応優先度: 中。対応時期の目安: 半年以内。 不確実性・追加確認が必要な点: 個別地域の深掘りと、実際の採択施設・対象事業の確認が必要。",
          "10. 海外の医療・介護DX動向 / 今週確認できた重要な新規情報なし。日本市場に直接影響しうる海外一次情報として採用できるものは、今回の調査範囲では確認できなかった。"
        ]
      },
      {
        title: "今週検討すべき対応アクション",
        items: [
          "事業開発担当: 抗菌薬等医薬品備蓄体制整備事業の公募要領を確認し、応募対象・締切・必要書類・社内決裁日程を2026-07-05までに整理する。",
          "医療機関向けプロダクト責任者: 標準型電子カルテの公開仕様・今後のワーキンググループ資料を追跡し、レセコン、外注検査、診療情報提供書、運用保守で接続・支援できる機能候補を洗い出す。",
          "介護領域の企画担当: 介護保険部会の基本指針案と特定地域の論点を読み、自治体計画、地域包括ケア、中山間・人口減少地域で必要になる帳票・連携・説明支援を整理する。",
          "営業・CS担当: 医療施設整備補助金と地域介護・福祉空間整備交付金の内示地域を確認し、導入相談、見積支援、補助金事務支援の対象リストを作る。",
          "オペレーション設計担当: 預貯金等把握の検討について、補足給付申請、証憑管理、利用者家族説明、自治体提出フローに影響する可能性を業務フローとして仮置きする。",
          "調査担当: 報酬改定、AI医療規制、海外医療DXは今週重要な新規情報なしのため、来週も一次情報だけを継続確認する。"
        ]
      },
      {
        title: "継続ウォッチすべきテーマ",
        items: [
          "標準型電子カルテの技術仕様、API、データ標準、接続方針、導入・運用保守モデル。",
          "介護保険部会の基本指針案、社会福祉法等改正の具体的運用、特定地域の制度設計。",
          "療養病床の在り方に関する議論が、慢性期医療、介護医療院、在宅移行、報酬設計へどう接続されるか。",
          "医療施設・介護施設の補助金内示後の自治体別採択、交付要綱、対象経費、実施期限。",
          "抗菌薬等医薬品備蓄事業の採択結果、対象医薬品、在庫管理・供給報告の要件。",
          "AI医療、生成AI、SaMD、個人情報保護、医療データ利活用の一次情報更新。"
        ]
      },
      {
        title: "事業・プロダクト仮説",
        items: [
          "事実: デジタル庁の公表では、処方、検査、診療情報提供書、医療DX、レセコン、外注検査、導入・運用保守が論点として明示された。",
          "仮説: 標準型電子カルテの普及が進むほど、単体電子カルテ機能よりも、移行支援、周辺接続、運用監視、現場教育、帳票・データ連携の需要が増える。",
          "事実: 医療施設整備補助金、介護施設整備交付金、抗菌薬備蓄公募が同じ週に公表された。",
          "仮説: 医療・介護事業者の投資は、設備導入だけでなく、補助金事務、調達、導入後運用、実績報告まで支援できるベンダーに寄りやすくなる。",
          "事実: 介護保険部会では基本指針と特定地域の考え方が資料化された。",
          "仮説: 人口減少地域では、単一事業所の業務効率化よりも、自治体、医療機関、介護事業者をまたぐ情報共有・需給調整がプロダクト要件になりやすい。"
        ]
      },
      {
        title: "調査メモ",
        items: [
          "医療施設等施設整備費補助金と地域介護・福祉空間整備等施設整備交付金は、添付PDFや自治体別資料で内示額・件数・対象事業の詳細確認が必要。",
          "抗菌薬等医薬品備蓄体制整備事業は、公募要領と様式の精査が必要。本文では締切と目的を中心に扱った。",
          "介護保険制度における預貯金等の把握は、ヒアリング資料が非公表のため、現時点では制度化の方向性を断定しない。",
          "PMDA等の公的ページを確認した範囲では、今週採用すべきAI医療・SaMDの重要な新規情報は確認できなかった。",
          "海外医療・介護DXは、日本市場への直接影響を一次情報で確認できたものがなかったため、今回の記事では採用しない。"
        ]
      }
    ]
  }
];

export const tagDefinitions = [
  {
    name: "医療",
    description: "医療制度、医療DX、医療機関、医療データに関する情報"
  },
  {
    name: "介護",
    description: "介護制度、介護DX、介護事業者、介護現場の運用課題に関する情報"
  },
  {
    name: "AI",
    description: "生成AI、医療AI、AI規制、AIを使った業務改善に関する情報"
  },
  {
    name: "エンジニアリング",
    description: "技術選定、標準化、データ連携、開発・運用に関する情報"
  },
  {
    name: "制度",
    description: "法改正、報酬改定、通知、公募、補助金に関する情報"
  },
  {
    name: "DX",
    description: "医療DX、介護DX、行政DX、業務デジタル化に関する情報"
  },
  {
    name: "プロダクト",
    description: "プロダクト開発、PMM、顧客理解、UX、機能改善に関する情報"
  },
  {
    name: "スタートアップ",
    description: "新興企業、資金調達、買収、ローンチ、新規事業に関する情報"
  },
  {
    name: "マーケティング",
    description: "B2Bマーケティング、GTM、顧客獲得、市場理解に関する情報"
  },
  {
    name: "VC",
    description: "ベンチャーキャピタル、ファンド形成、LP、投資戦略に関する情報"
  },
  {
    name: "資金調達",
    description: "Seed、Series A以降、セカンダリー、テンダー、M&Aに関する情報"
  },
  {
    name: "市場インテリジェンス",
    description: "公共市場、規制、政策、競争環境、投資判断材料に関する情報"
  }
];

export function findReportById(id) {
  return reports.find((report) => report.id === id) ?? null;
}

export function getReportsByType(articleType) {
  return reports.filter((report) => report.articleType === articleType);
}

export function getReportsByTag(tag) {
  return reports.filter((report) => report.tags.includes(tag));
}

export function getTagSummaries() {
  return tagDefinitions.map((tag) => ({
    ...tag,
    count: getReportsByTag(tag.name).length
  }));
}
