export const report = {
  id: 'tech-landscape-weekly-2026-11-12',
  title: 'テック情勢週次レポート 2026-11-12週',
  category: 'テック情勢',
  articleType: 'weekly',
  articleTypeLabel: '週次最新情報',
  cadence: '週次で自動更新・追加',
  tags: ['AI', 'セキュリティ', '規制', '市場インテリジェンス', 'プロダクト戦略', 'テック情勢'],
  summary: '2026年11月5日08:00 JSTから11月12日08:00 JSTまでの公開情報をもとに、AI関連フリーランス需要の観測、AIサービスの利用ポリシー適用、端末上のエージェント機能の地域展開を整理した週次レポートです。いずれも事業者または研究主体の発表であり、経済全体への因果や地域での実利用可能性を一般化していません。過去14日への遡及調査は行っていません。',
  publishedAt: '2026-11-12',
  checkedAt: '2026-11-12',
  sources: [
    { title: 'OpenAI: Work at the Frontier: AI’s effect on freelance work', url: 'https://openai.com/index/ai-effect-on-freelance-work/', type: '一次情報', publishedAt: '2026-11-10', checkedAt: '2026-11-12' },
    { title: 'Anthropic: 2026 Usage Policy update', url: 'https://www.anthropic.com/news/2026-usage-policy-update', type: '一次情報', publishedAt: '2026-10-08', checkedAt: '2026-11-12' },
    { title: 'Google: Gemini Intelligence: New features, on more devices', url: 'https://blog.google/products-and-platforms/platforms/android/gemini-intelligence-november-features-devices/', type: '一次情報', publishedAt: '2026-11-10', checkedAt: '2026-11-12' },
    { title: 'TechCrunch RSS', url: 'https://techcrunch.com/feed/', type: 'RSS', checkedAt: '2026-11-12' },
    { title: 'Hacker News RSS', url: 'https://news.ycombinator.com/rss', type: 'RSS', checkedAt: '2026-11-12' },
    { title: 'Product Hunt RSS', url: 'https://www.producthunt.com/feed', type: 'RSS', checkedAt: '2026-11-12' },
    { title: 'ProductZine RSS', url: 'https://productzine.jp/rss/new/20/index.xml', type: 'RSS', checkedAt: '2026-11-12', failureType: 'HTTP 403: Forbidden' },
    { title: 'Forrester Blogs RSS', url: 'https://go.forrester.com/blogs/feed/', type: 'RSS', checkedAt: '2026-11-12' },
    { title: 'TechFeed Startup / Innovation', url: 'https://techfeed.io/feeds/categories/Startup%20%2F%20Innovation?userId=667a89b3185e12081e95a7b5', type: 'RSS', checkedAt: '2026-11-12' },
    { title: 'TechFeed Marketing', url: 'https://techfeed.io/feeds/categories/Marketing?userId=667a89b3185e12081e95a7b5', type: 'RSS', checkedAt: '2026-11-12' }
  ],
  highlights: [
    'OpenAIとUpworkは、AI関連案件で異なるスキルの組合せと、より大きい予算・長い作業時間が観測されたとする調査を11月10日に公開した。これはUpwork上のフリーランス市場に関する観測であり、雇用市場全体の予測ではない。',
    'Anthropicは、長時間・自律的な作業を行うClaudeの利用を念頭に、欺瞞的活動、自律的な物理的行為、高リスク用途などを明確化したUsage Policyを11月12日から適用するとした。ポリシー更新は実装済みの安全策や法令順守を代替しない。',
    'Googleは11月10日、Gemini Intelligenceのタスク自動化を日本、英国、インドへ拡大すると発表した。地域展開の発表であり、端末、アプリ、地域、利用者ごとの提供状況や完了率は別途確認が必要である。',
    'ProductZine RSSはHTTP 403で取得できなかった。ほかの主要6入口はHTTP 200を確認した。'
  ],
  lead: {
    title: '今週の判断ポイント',
    body: 'AIの価値検証は、モデル導入件数ではなく、仕事の分解、責任分界、監督、例外処理、実際の提供条件まで含めて行う局面に入っている。市場調査は対象プラットフォームの観測として扱い、ポリシーと端末機能の更新は、利用可能地域・機能・失敗時の運用を確認したうえで製品設計に反映する必要がある。',
    quote: 'AIを実務に組み込む評価軸は、性能だけでなく、誰が何を委任し、どの失敗を検知・停止・説明できるかへ移る。'
  },
  dashboardMetrics: [
    { label: '対象期間', value: '7日', caption: '2026-11-05 08:00 JSTから2026-11-12 08:00 JSTまで。過去14日への遡及調査なし', tone: 'primary' },
    { label: '高優先度', value: '3テーマ', caption: 'AI仕事市場の検証、利用ポリシー、端末上の自動化', tone: 'high' },
    { label: '適用日', value: '11/12', caption: 'Anthropicの2026 Usage Policyは2026年11月12日から適用予定', tone: 'deadline' },
    { label: '取得エラー', value: '1件', caption: 'ProductZine RSSがHTTP 403。ほか6つの主要確認入口はHTTP 200', tone: 'primary' }
  ],
  topicCards: [
    {
      theme: 'AI/LLM/エージェント', title: 'OpenAIとUpworkは、AI関連フリーランス案件のスキル構成と予算の変化を報告',
      summary: 'OpenAIとUpworkは11月10日、Upwork上のフリーランスサービス需要を分析した調査を公開した。発表では、AI関連プロジェクトで複数スキルの組合せ、より大きい予算、より長い作業時間が観測されたとしている。調査は現在のChatGPT利用とUpworkの市場を比較したもので、AIが支援できる全タスクや雇用市場全体を測るものではない。',
      date: '2026-11-10', sourceTitle: 'OpenAI: Work at the Frontier: AI’s effect on freelance work', sourceUrl: 'https://openai.com/index/ai-effect-on-freelance-work/', sourceType: '一次情報', priority: '高', timing: 'AI導入KPI・外部人材計画の見直し時', relevance: 94,
      relatedTags: ['AI', '市場インテリジェンス', 'プロダクト戦略'], affected: ['事業企画', 'プロダクト責任者', '外部人材を活用する組織'],
      change: 'AI関連の受託案件について、従来の単一職能だけではなく、複数スキルを組み合わせる需要の観測結果が示された。',
      importance: 'AI導入の効果を内製・外注の工数だけで測ると、要件定義、品質保証、データ管理、顧客対応など新たに必要な仕事を見落としうる。',
      implication: 'AIを使う業務では、削減時間だけでなく、増えた検証・監督・統合の工数、成果物の品質、再現性を同じKPIに置く。',
      uncertainty: 'Upwork上の観測とOpenAIの分析に基づく。地域、職種、雇用形態、AI以外の景気要因を含む市場全体へ因果を一般化できない。'
    },
    {
      theme: 'セキュリティ/規制/標準化', title: 'Anthropicの2026 Usage Policyが11月12日に適用、長時間・自律的な利用の統制を明確化',
      summary: 'Anthropicは10月8日に公開した2026 Usage Policy updateで、新しいポリシーを11月12日から適用するとした。欺瞞的なキャンペーンや人工的活動を禁じる節を整理し、医療・金融などの高リスク用途、自律的な物理的行為、モデルへの虐待的行為に関する要件を明確化したとしている。',
      date: '2026-11-12', dateLabel: '適用日', sourceTitle: 'Anthropic: 2026 Usage Policy update', sourceUrl: 'https://www.anthropic.com/news/2026-usage-policy-update', sourceType: '一次情報', priority: '高', timing: '2026-11-12から', relevance: 97,
      relatedTags: ['AI', 'セキュリティ', '規制'], affected: ['AIプロダクト責任者', 'Trust & Safety担当', '法務・コンプライアンス'],
      change: 'モデルの自律性が高まる利用を前提として、許容されない欺瞞行為と高リスク・物理行為での管理要件を、サービス利用ポリシーでより明示した。',
      importance: '外部AIを組み込む製品では、プロンプト制御だけではなく、利用者の本人性、権限、実行範囲、監査、エスカレーションを契約・製品・運用で整合させる必要がある。',
      implication: '利用中のAIサービスについて、改定されたポリシー、許可済み用途、代理実行の上限、承認者、停止手順、問い合わせ窓口を確認する。',
      uncertainty: '本カードはAnthropicのサービス利用ポリシーの説明であり、他社サービスや各国法令の適用を決めるものではない。個別の契約・法的判断は別途確認が必要である。'
    },
    {
      theme: 'プロダクト戦略', title: 'GoogleはGemini Intelligenceのタスク自動化を日本を含む3地域へ拡大すると発表',
      summary: 'Googleは11月10日、Gemini Intelligenceのタスク自動化について、食事注文、配車、予約などを対応アプリで扱う機能を、日本、英国、インドへ拡大すると発表した。同時に、対象端末の拡大と機能追加も説明している。',
      date: '2026-11-10', sourceTitle: 'Google: Gemini Intelligence: New features, on more devices', sourceUrl: 'https://blog.google/products-and-platforms/platforms/android/gemini-intelligence-november-features-devices/', sourceType: '一次情報', priority: '高', timing: 'モバイルの自動化機能を評価する前', relevance: 92,
      relatedTags: ['AI', 'プロダクト戦略', '市場インテリジェンス'], affected: ['モバイルプロダクト責任者', 'パートナー連携担当', 'カスタマーサポート'],
      change: '端末上のAI機能が要約・生成にとどまらず、外部アプリをまたぐ手配タスクへ地域展開される方向が示された。',
      importance: 'アプリ連携を伴う自動化では、指示内容、意図確認、注文・予約の確定、失敗時の回復、利用規約・責任分界がプロダクト品質を左右する。',
      implication: '類似機能を検討する場合は、利用可能な端末・地域・対応アプリを確認し、金銭または予約の確定前の確認画面、取り消し、監査ログ、問い合わせ導線を設計する。',
      uncertainty: 'Googleの地域拡大発表に基づく。日本の全端末、全利用者、全アプリでの利用可能性、機能の成功率や継続提供を示すものではない。'
    }
  ],
  actionCards: [
    { owner: 'AIプロダクト・Trust & Safety担当', action: '外部AIが代理実行する操作を棚卸しし、権限、承認、実行上限、停止、監査の責任者を明文化する', due: '利用ポリシー改定・新機能公開前', reason: '自律的な行為の統制を、プロンプトや注意書きだけに依存させないため。' },
    { owner: '事業企画・人材開発担当', action: 'AI導入KPIに、削減時間だけでなく検証・統合・監督の工数と成果品質を追加する', due: '次回のAI投資評価前', reason: '市場調査の観測を、そのまま自社の生産性や雇用の因果とみなさないため。' },
    { owner: 'モバイルプロダクト・連携担当', action: '外部アプリをまたぐ自動化について、確定操作前の確認、取消、障害時の復旧、問い合わせ導線を点検する', due: '連携機能の設計・提供前', reason: '端末上のエージェント機能では、実行結果と責任分界の体験設計が重要になるため。' }
  ],
  sections: [
    { title: '調査条件', items: ['主対象期間: 2026-11-05 08:00 JSTから2026-11-12 08:00 JSTまで。重要情報が確認できたため、過去14日への遡及調査は行わなかった。', '主要確認入口: TechCrunch、Hacker News、Product Hunt、ProductZine、Forrester Blogs、TechFeed Startup / Innovation、TechFeed Marketing。候補抽出後、OpenAI、Anthropic、Googleの一次情報を優先して確認した。', '確認方針: 調査の観測範囲、サービス利用ポリシーの適用、地域展開の発表を区別し、雇用市場全体の予測、法的助言、全利用者への提供完了は断定しない。', '取得エラー: ProductZine RSSはHTTP 403: Forbidden。ほかの主要6入口はHTTP 200を確認した。'] },
    { title: 'エグゼクティブサマリー', items: ['市場・人材: AI関連案件の変化は、特定プラットフォームでの観測と自社のKPIを分けて評価する。', '安全性・規約: 自律的なAI利用は、権限、承認、監査、停止を製品と運用に組み込む。', 'プロダクト: 外部アプリ連携を伴う自動化では、利用可能条件と例外時のUXを先に検証する。'] },
    { title: 'テーマ別の調査結果', items: ['AIの仕事市場、サービス利用ポリシー、端末上のタスク自動化を、重要度、影響、検証条件とともにカードで整理した。'] },
    { title: '注目すべき仮説と解くべき課題', items: ['仮説: AI導入の経済価値は、定型業務の時間短縮より、複数職能を横断して成果物を統合・検証できる組織で大きくなる。反証には、職種・案件・品質基準をそろえ、監督工数を含む総コストと成果を比較する必要がある。', '課題: 自律的なAI機能の安全性を、禁止語やモデルの拒否だけに依存しないこと。解決には、本人性、最小権限、承認、実行範囲、監査、異常停止、利用者救済を一貫して実装する必要がある。', '課題: 端末・外部アプリ連携の自動化で、宣伝上の提供地域と実際の利用可能性を混同しないこと。解決には、端末、OS、地域、対応アプリ、確定操作、失敗時の挙動を実機・契約条件で確認する必要がある。'] },
    { title: '今週見直すべき意思決定', items: ['事業・プロダクト: AIによる代理実行を許可する業務、金銭・予約などの確定前確認、利用者の取消可能性を定義する。', 'エンジニアリング: AI導入の評価で、モデル利用時間以外にレビュー、統合テスト、監査、例外対応の工数を測る。', 'リスク管理: 利用中のAIサービスのポリシー改定を確認し、許可用途・責任者・エスカレーションを更新する。'] },
    { title: '今週検討すべき対応アクション', items: [] }
  ]
};
