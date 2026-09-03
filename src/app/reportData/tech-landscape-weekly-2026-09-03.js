export const report = {
  id: "tech-landscape-weekly-2026-09-03",
  title: "テック情勢週次レポート 2026-09-03週",
  category: "テック情勢",
  articleType: "weekly",
  articleTypeLabel: "週次最新情報",
  cadence: "週次で自動更新・追加",
  tags: ["AI", "エンジニアリング", "セキュリティ", "規制", "市場インテリジェンス"],
  summary: "2026年8月27日00:00 JSTから9月3日実行時点までの公開情報をもとに、Critical水準のAIサイバー能力、開発者AIの管理統制、EU AI Actの既存システム移行期限を整理した週次レポートです。",
  publishedAt: "2026-09-03",
  checkedAt: "2026-09-03",
  sources: [
    { title: "OpenAI: Path to Astra: critical capabilities and frontier safeguards", url: "https://openai.com/index/path-to-astra/", type: "一次情報", publishedAt: "2026-09-01", checkedAt: "2026-09-03" },
    { title: "GitHub Changelog: Content exclusions generally available in Copilot app and CLI", url: "https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli/", type: "一次情報", publishedAt: "2026-09-02", checkedAt: "2026-09-03" },
    { title: "GitHub Changelog: Copilot code review can now approve pull requests", url: "https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests/", type: "一次情報", publishedAt: "2026-09-01", checkedAt: "2026-09-03" },
    { title: "European Commission AI Act Service Desk: When does enforcement start?", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/faq/when-does-enforcement-start", type: "規制当局資料", checkedAt: "2026-09-03" },
    { title: "TechCrunch RSS", url: "https://techcrunch.com/feed/", type: "RSS", checkedAt: "2026-09-03" },
    { title: "Hacker News RSS", url: "https://news.ycombinator.com/rss", type: "RSS", checkedAt: "2026-09-03" },
    { title: "ProductZine RSS", url: "https://productzine.jp/rss/new/20/index.xml", type: "取得エラー", checkedAt: "2026-09-03" }
  ],
  highlights: [
    "OpenAIは9月1日、AstraがPreparedness FrameworkにおけるCriticalサイバー能力の閾値に達したと評価し、開発・配備の両方で追加の安全策が必要だと説明した。",
    "GitHub Copilotは、管理者が指定した除外ファイルをアプリとCLIの文脈に使わない機能を一般提供し、PR承認は既定で無効のまま組織・リポジトリ単位で有効化できる公開プレビューを開始した。",
    "EU AI Actでは透明性義務が適用・執行可能な状態にあり、2026年8月2日以前に市場投入されたAIシステムのArticle 50(2)に関する表示・検出義務は12月2日までの対応猶予が示されている。",
    "主要確認入口のうちProductZine RSSはHTTP 403で取得できなかった。ほかの6入口はHTTP 200で取得した。"
  ],
  lead: {
    title: "今週の判断ポイント",
    body: "AIエージェントの能力向上により、利用可否だけでなく、開発中の隔離、実行時の権限、コード文脈の持ち出し、AIレビューをマージ条件に算入する統制が一続きの設計課題になった。まず高権限ツール、秘密情報、除外すべきコード、AI承認の適用範囲を明文化し、規制対象の生成物は12月の移行期限より前に棚卸しする。",
    quote: "能力を採用する判断と、能力に渡す文脈・権限・承認を設計する判断を分離しないことが、エージェント時代の統制の出発点になる。"
  },
  dashboardMetrics: [
    { label: "対象期間", value: "7日", caption: "2026-08-27 00:00 JSTから2026-09-03実行時点まで。14日遡及なし", tone: "primary" },
    { label: "重要期限", value: "12/2", caption: "EU AI Actの既存システムに関するArticle 50(2)の対応猶予", tone: "deadline" },
    { label: "高優先度", value: "3テーマ", caption: "Critical能力の統制、コード文脈、規制対応", tone: "high" },
    { label: "取得エラー", value: "1件", caption: "ProductZine RSSがHTTP 403: Forbidden", tone: "primary" }
  ],
  topicCards: [
    {
      theme: "AI/LLM/エージェント",
      title: "OpenAIはAstraがCriticalサイバー能力の閾値に達したと評価",
      summary: "OpenAIは9月1日、Astraについて、適切なツールとアクセスがあれば人の誘導なしに未知の脆弱性を見つけ、保護されたシステムへの攻撃手段を開発し得るとして、Preparedness FrameworkのCritical閾値に達したと評価した。",
      date: "2026-09-01", sourceTitle: "OpenAI: Path to Astra: critical capabilities and frontier safeguards", sourceUrl: "https://openai.com/index/path-to-astra/", sourceType: "一次情報", priority: "高", timing: "すぐ", relevance: 99,
      relatedTags: ["AI", "セキュリティ", "エンジニアリング"], affected: ["AI基盤チーム", "セキュリティ担当", "評価・レッドチーム", "経営層"],
      change: "高度なエージェントの評価対象が、既知ベンチマークの正答率から、未知脆弱性の探索、ツール利用、隔離・監視を含む運用能力へ拡張された。",
      importance: "公開された評価は特定組織のモデルに関するものだが、強いコーディング・ツール利用モデルを扱う組織では、評価環境と本番環境の双方に追加の停止・監視・権限統制が必要になる。",
      implication: "高権限ツールを使うAIの導入・評価で、外向き通信、資格情報、共有ストレージ、実行承認、異常時の即時停止を設計レビューの必須項目にする。",
      uncertainty: "これはOpenAIによるAstraの評価であり、他社モデルや一般的なAI製品が同じ水準にあることを示すものではない。公開された評価手法だけでは外部での完全な再現はできない。"
    },
    {
      theme: "開発者・インフラ動向",
      title: "GitHub Copilotで文脈除外とPR承認を管理者統制へ組み込む選択肢が拡大",
      summary: "GitHubは9月1日から2日にかけて、Copilot appとCLIが管理者設定のcontent exclusionを尊重する一般提供と、Copilot code reviewがPR承認を提出できる公開プレビューを発表した。承認は既定で無効で、適用範囲を管理者が設定する。",
      date: "2026-09-02", sourceTitle: "GitHub Changelog: Content exclusions generally available in Copilot app and CLI", sourceUrl: "https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli/", sourceType: "一次情報", priority: "高", timing: "すぐ", relevance: 96,
      relatedTags: ["AI", "エンジニアリング", "セキュリティ"], affected: ["開発組織", "リポジトリ管理者", "セキュリティ担当", "コンプライアンス担当"],
      change: "AI支援開発は、モデル選択だけでなく、どのファイルを文脈に渡さないか、AIの承認をどのパスで有効にするかを管理者設定で扱う段階に進んだ。",
      importance: "秘密情報や規制対象コードを含むリポジトリでは、AIへ渡さない範囲とAI承認を人の承認とどう組み合わせるかが、導入速度と監査可能性を左右する。",
      implication: "除外パターンを秘密鍵・認証情報だけに限定せず、顧客データ、規制対象の設定、生成物を含む領域まで棚卸しする。AI承認は非重要パスから試し、CODEOWNERS、必須レビュー、変更後の承認失効と整合させる。",
      uncertainty: "機能の提供範囲、プラン、既存ポリシーとの優先関係、生成済みの会話や外部連携に対する扱いは、各組織のGitHub設定と公式ドキュメントで確認が必要。"
    },
    {
      theme: "セキュリティ/規制/標準化",
      title: "EU AI Actの既存システム向け透明性対応は12月2日までの猶予を確認",
      summary: "EUのAI Act Service Deskは、透明性義務が2026年8月2日から適用・執行可能である一方、その日より前に市場投入されたAIシステムのArticle 50(2)に関する表示・検出義務には2026年12月2日までの対応猶予があると案内している。",
      date: "2026-09-03", sourceTitle: "European Commission AI Act Service Desk: When does enforcement start?", sourceUrl: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/faq/when-does-enforcement-start", sourceType: "規制当局資料", priority: "高", timing: "2026-12-02まで", relevance: 93,
      relatedTags: ["AI", "規制", "市場インテリジェンス"], affected: ["EU向けAI提供者", "プロダクト責任者", "法務・コンプライアンス", "Trust & Safety"],
      change: "生成物の透明性を後回しにするのではなく、既存システムも含めて表示・検出の実装、運用責任、証跡を期限付きで管理する必要がある。",
      importance: "対象となるAI機能の分類を誤ると、実装・文書化・利用者への情報提供が期限直前に集中する。",
      implication: "EU提供の有無、初回市場投入日、生成・操作コンテンツの種類、表示・検出の実装状況、利用者向け文書を台帳化し、法務判断を前提に対応計画を作る。",
      uncertainty: "個別製品の義務該当性は提供形態・用途・地域で異なる。これは一般的な案内であり、法的助言ではない。"
    },
    {
      theme: "重要な新規情報なし",
      title: "半導体・資本市場・ブラウザ/OSは今週採用すべき大規模な一次情報なし",
      summary: "主要フィードと公式入口を確認したが、今回の事業・技術判断を直ちに変える大規模な半導体、資本市場、ブラウザ、OS、モバイルの一次情報は採用しなかった。",
      date: "2026-09-03", sourceTitle: "Hacker News RSS", sourceUrl: "https://news.ycombinator.com/rss", sourceType: "RSS", priority: "低", timing: "継続ウォッチ", relevance: 60,
      relatedTags: ["エンジニアリング", "市場インテリジェンス"], affected: ["プロダクト責任者", "AI基盤チーム"],
      change: "今週確認できた重要な新規情報なし。",
      importance: "話題量ではなく、公式な製品提供、仕様変更、規制・資本の一次情報で採用可否を判断する。",
      implication: "主要ベンダーの公式発表、脆弱性、投資・供給網の更新を来週も継続確認する。",
      uncertainty: "個別の小規模更新や報道は、今回の大きな変化の選定外。"
    }
  ],
  actionCards: [
    { owner: "AI基盤・セキュリティ責任者", action: "高権限AIの評価・実行環境で通信、資格情報、ツール権限、停止手順を棚卸しする", due: "2週間以内", reason: "強いツール利用モデルでは、能力評価と周辺システムの境界統制を分けられないため。" },
    { owner: "開発基盤・リポジトリ管理者", action: "AIに渡さないコード範囲とAI承認を許可するパスを定義する", due: "1か月以内", reason: "文脈除外とAI承認が管理者設定で運用できるようになったため。" },
    { owner: "プロダクト・法務責任者", action: "EU向けAI機能の透明性義務と既存システムの市場投入日を台帳化する", due: "2026-10-31まで", reason: "2026年12月2日の対応猶予終了前に該当性と実装を確認するため。" }
  ],
  sections: [
    { title: "調査条件", items: [
      "主対象期間: 2026-08-27 00:00 JSTから2026-09-03実行時点まで。直近7日で重要な一次情報を確認できたため、過去14日への遡りは行っていない。",
      "主要確認入口: TechCrunch、Hacker News、Product Hunt、ProductZine、Forrester Blogs、TechFeed Startup / Innovation、TechFeed Marketing。",
      "確認方針: フィードで候補を抽出し、OpenAI、GitHub、欧州委員会の公開資料を優先した。製品提供の可否や規制該当性は組織・製品ごとに追加確認が必要である。"
    ] },
    { title: "エグゼクティブサマリー", items: [
      "AI能力: 高度なサイバー能力を持つモデルの評価・配備では、ツール、権限、監視、即時停止を同時に設計する。",
      "開発統制: AIに渡す文脈とAIが承認できる変更範囲は、コード所有と同じく明示的なポリシーにする。",
      "規制: EU向け既存AIシステムは、透明性義務の該当性と12月2日までの対応を先に確認する。"
    ] },
    { title: "テーマ別の調査結果", items: ["AI/LLM/エージェント、開発者統制、規制対応を、重要度、影響、反証点とともにカードで整理した。"] },
    { title: "注目すべき仮説と解くべき課題", items: [
      "仮説: AIエージェントのリスクはモデル能力の上昇よりも、モデルに渡す権限・文脈・外部ツールの組み合わせで急増する。反証には、同じタスクを厳格な最小権限・通信分離下で測定し、業務価値が維持できるかを確かめる必要がある。",
      "仮説: コード文脈除外とAI承認を一体で管理できる組織ほど、AI支援開発を速く拡大できる。反証には、除外範囲や必須レビューが開発速度・障害率・漏えいリスクへ与える影響を計測する必要がある。",
      "解くべき課題: AIが扱うファイル、秘密情報、ツール権限、AI承認、監査ログを単一の変更管理フローで追跡する。",
      "解くべき課題: EU AI Actに関する対象判定、実装、利用者通知、検出可能性、証跡をプロダクトごとに責任者付きで管理する。",
      "大きな問題: 個別ベンダーの能力評価や製品機能の公表だけで、組織固有の安全性・法的該当性を判断することはできない。"
    ] },
    { title: "今週検討すべき対応アクション", items: [] },
    { title: "継続ウォッチすべきテーマ", items: [
      "OpenAI Astraの追加安全策、配備方針、第三者検証の更新。",
      "AIコードレビューの誤検知、見落とし、承認権限と既存のブランチ保護の整合。",
      "Copilotのcontent exclusionが各クライアント・連携先でどう適用されるか。",
      "EU AI Actの実務ガイダンス、執行事例、透明性義務の実装方法。"
    ] },
    { title: "取得エラー", items: ["ProductZine RSS（https://productzine.jp/rss/new/20/index.xml）: HTTP 403: Forbidden。TechCrunch、Hacker News、Product Hunt、Forrester Blogs、TechFeed Startup / Innovation、TechFeed MarketingはHTTP 200で取得した。"] }
  ]
};
