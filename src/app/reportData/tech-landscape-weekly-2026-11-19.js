export const report = {
  id: 'tech-landscape-weekly-2026-11-19',
  title: 'テック情勢週次レポート 2026-11-19週',
  category: 'テック情勢',
  articleType: 'weekly',
  articleTypeLabel: '週次最新情報',
  cadence: '週次で自動更新・追加',
  tags: ['AI', 'セキュリティ', '開発者ツール', 'プロダクト戦略', 'テック情勢'],
  summary: '2026年11月12日08:00 JSTから11月19日08:00 JSTまでの公開情報をもとに、API向けモデル更新、エージェントによる購入での本人承認、AIを使うサイバー防御の運用条件を整理した週次レポートです。いずれも発表元の提供・利用条件または事例であり、性能、注文成立、脆弱性検出を一般化していません。過去14日への遡及調査は行っていません。',
  publishedAt: '2026-11-19',
  checkedAt: '2026-11-19',
  sources: [
    { title: 'OpenAI: Model Release Notes', url: 'https://help.openai.com/en/articles/9624314-model-release-notes', type: '一次情報', publishedAt: '2026-11-17', checkedAt: '2026-11-19' },
    { title: 'OpenAI: ChatGPT Wallet release notes', url: 'https://openai.com/products/release-notes/', type: '一次情報', publishedAt: '2026-11-13', checkedAt: '2026-11-19' },
    { title: 'OpenAI: Strengthening NATO and allied cyber defenses with AI', url: 'https://openai.com/index/strengthening-nato-allied-cyber-defences-ai/', type: '一次情報', publishedAt: '2026-11-17', checkedAt: '2026-11-19' },
    { title: 'TechCrunch RSS', url: 'https://techcrunch.com/feed/', type: 'RSS', checkedAt: '2026-11-19' },
    { title: 'Hacker News RSS', url: 'https://news.ycombinator.com/rss', type: 'RSS', checkedAt: '2026-11-19' },
    { title: 'Product Hunt RSS', url: 'https://www.producthunt.com/feed', type: 'RSS', checkedAt: '2026-11-19' },
    { title: 'ProductZine RSS', url: 'https://productzine.jp/rss/new/20/index.xml', type: 'RSS', checkedAt: '2026-11-19', failureType: 'HTTP 403: Forbidden' },
    { title: 'Forrester Blogs RSS', url: 'https://go.forrester.com/blogs/feed/', type: 'RSS', checkedAt: '2026-11-19' },
    { title: 'TechFeed Startup / Innovation', url: 'https://techfeed.io/feeds/categories/Startup%20%2F%20Innovation?userId=667a89b3185e12081e95a7b5', type: 'RSS', checkedAt: '2026-11-19' },
    { title: 'TechFeed Marketing', url: 'https://techfeed.io/feeds/categories/Marketing?userId=667a89b3185e12081e95a7b5', type: 'RSS', checkedAt: '2026-11-19' }
  ],
  highlights: [
    'OpenAIは11月17日、GPT-6.2 AstraとGPT-6.2 SolをAPIで提供開始した。モデル名の更新を性能・費用・互換性の改善と同一視せず、対象タスク、品質、失敗時の挙動、実測コストで評価する必要がある。',
    'OpenAIは11月13日、購入直前に利用者が加盟店、商品、総額、支払カードを確認し、生体認証で承認するChatGPT Walletの段階的提供を案内した。承認済みでも注文完了とは限らないため、確定結果と取消・問い合わせの導線が必要である。',
    'OpenAIは11月17日、NATO・欧州機関等におけるAI利用のサイバー防御事例を公表した。脆弱性候補の価値は、保守者の確認、影響検証、修正、開示までの人間主導の工程で決まる。',
    'ProductZine RSSはHTTP 403で取得できなかった。ほかの主要6入口はHTTP 200を確認した。'
  ],
  lead: {
    title: '今週の判断ポイント',
    body: 'エージェントの能力拡大は、モデル選定、外部行為の承認、セキュリティ検証を別々の問題として扱えなくしている。導入判断では、ベンチマークや発表だけでなく、権限の最小化、利用者による確定、独立した検証、例外時の停止・復旧、監査可能性までを一連の運用として確認する必要がある。',
    quote: '自律性を高めるほど、能力の比較より先に、誰が何を確定し、失敗を誰が検証・回復できるかを設計する。'
  },
  dashboardMetrics: [
    { label: '対象期間', value: '7日', caption: '2026-11-12 08:00 JSTから2026-11-19 08:00 JSTまで。過去14日への遡及調査なし', tone: 'primary' },
    { label: '高優先度', value: '3テーマ', caption: 'APIモデル更新、エージェント購入の承認、AIサイバー防御の検証', tone: 'high' },
    { label: '提供条件', value: '段階的', caption: 'ChatGPT Walletは米国の対象Pro利用者などへ段階的に提供', tone: 'deadline' },
    { label: '取得エラー', value: '1件', caption: 'ProductZine RSSがHTTP 403。ほか6つの主要確認入口はHTTP 200', tone: 'primary' }
  ],
  topicCards: [
    {
      theme: 'AI/LLM/エージェント', title: 'OpenAIはGPT-6.2 AstraとGPT-6.2 SolをAPIで提供開始',
      summary: 'OpenAIは11月17日、GPT-6.2 AstraとGPT-6.2 SolをResponses APIおよびChat Completions APIで利用可能にしたと案内した。リリースノートでは、Astraを高度な推論・コーディング・専門業務向け、Solを速度と低コストを重視する複数ステップの業務向けとしている。両モデルの入出力形式はテキスト・画像入力、テキスト出力と説明されている。',
      date: '2026-11-17', sourceTitle: 'OpenAI: Model Release Notes', sourceUrl: 'https://help.openai.com/en/articles/9624314-model-release-notes', sourceType: '一次情報', priority: '高', timing: 'モデル更新・調達・評価を決める前', relevance: 96,
      relatedTags: ['AI', '開発者ツール', 'プロダクト戦略'], affected: ['AI基盤担当', '開発者ツール担当', 'プロダクト責任者'],
      change: 'APIで選択できるモデル群に、用途別の位置付けを持つGPT-6.2 AstraとGPT-6.2 Solが加わった。',
      importance: 'モデル名や提供開始の告知だけでは、既存ワークロードでの精度、遅延、ツール利用時の信頼性、総コスト、移行リスクは分からない。',
      implication: '固定した代表タスクと失敗ケースで、旧モデルを含む比較評価を行い、品質、待ち時間、入力・出力トークン、再試行、監督工数を記録して切替条件を決める。',
      uncertainty: '本カードは提供元の製品説明に基づく。各組織のデータ、プロンプト、ツール、負荷、契約プランでの性能・費用・提供可否を保証するものではない。'
    },
    {
      theme: 'プロダクト戦略', title: 'ChatGPT Walletはエージェント購入で利用者の確認・生体認証を求める段階的提供を案内',
      summary: 'OpenAIは11月13日、ChatGPT Walletについて、エージェントが購入を行う前に利用者が加盟店、商品、総額、選択したカードを確認し、生体認証で承認する仕組みを案内した。実カード情報をエージェントや事業者へ渡さないための代替決済資格情報を用いるとしている。提供は米国の条件を満たす18歳以上のChatGPT Pro利用者などへ段階的に行われ、対応しないサイトがあること、承認自体は注文確定を意味しないことも明記している。',
      date: '2026-11-13', sourceTitle: 'OpenAI: ChatGPT Wallet release notes', sourceUrl: 'https://openai.com/products/release-notes/', sourceType: '一次情報', priority: '高', timing: '購入・予約を伴うエージェント機能の設計前', relevance: 98,
      relatedTags: ['AI', 'プロダクト戦略', 'セキュリティ'], affected: ['AIプロダクト責任者', '決済・予約連携担当', 'Trust & Safety担当'],
      change: '検索・提案だけでなく、利用者の明示承認を挟んで外部サービスの購入へ進むエージェント機能の提供条件が具体化された。',
      importance: '金銭・予約・契約に関わる代理行為では、意図確認と支払承認だけでは不十分であり、外部事業者の確定結果、重複実行、取消、返金、障害対応を追跡できなければ利用者保護が損なわれる。',
      implication: '代理購入・予約の導線では、確定前に対象・金額・相手先・有効期限を利用者へ表示し、外部の注文番号を含む確定結果、失敗・重複時の回復、取消・問い合わせ経路を設計する。',
      uncertainty: '本カードはOpenAIの特定機能と米国向けの段階的提供条件の説明であり、日本での利用可否、他社エージェント、加盟店ごとの注文成立や消費者保護上の扱いを示すものではない。'
    },
    {
      theme: 'セキュリティ/規制/標準化', title: 'OpenAIはNATO・欧州機関等でのAIを使うサイバー防御事例を公表',
      summary: 'OpenAIは11月17日、NATOの機関、ENISA、CERT Polskaなどとのサイバー防御に関する取り組みを公表した。発表では、ENISAとCERT-EUの11月の共同報告が、フロンティアモデル等で27件のソフトウェアプロジェクトをレビューし、保守者が評価した88件の候補のうち95%が有効な問題だったと記載している。CERT Polskaの事例では、研究者が作業を指揮し、実システムで影響を検証し、ベンダーと開示を調整したとしている。',
      date: '2026-11-17', sourceTitle: 'OpenAI: Strengthening NATO and allied cyber defenses with AI', sourceUrl: 'https://openai.com/index/strengthening-nato-allied-cyber-defences-ai/', sourceType: '一次情報', priority: '高', timing: 'AI支援の脆弱性発見・修正フローを導入する前', relevance: 95,
      relatedTags: ['AI', 'セキュリティ', '開発者ツール'], affected: ['セキュリティ責任者', 'ソフトウェア保守者', '脆弱性対応チーム'],
      change: 'AIを脆弱性候補の探索に用いつつ、人間の保守者・研究者が有効性、影響、修正、開示を担う運用事例が公表された。',
      importance: '候補の検出数や確認率を自組織の安全性向上と短絡すると、対象範囲、テスト条件、誤検知、悪用可能性、修正リードタイムを見落とす。',
      implication: 'AI支援の脆弱性調査は、許可済み環境、再現手順、保守者の確認基準、重大度判定、修正検証、責任ある開示、監査記録を必須のゲートとして導入する。',
      uncertainty: '数値と事例はOpenAIの発表に記載された特定の取り組みに基づく。モデル単独の有効性や、異なるコードベース・組織・脅威環境での再現性を示すものではない。'
    }
  ],
  actionCards: [
    { owner: 'AI基盤・開発者ツール担当', action: 'モデル切替候補を固定タスクと失敗ケースで比較し、品質、遅延、コスト、再試行、監督工数を記録する', due: '本番モデルの更新前', reason: '提供開始の告知を、自組織のワークロードでの優位性とみなさないため。' },
    { owner: 'AIプロダクト・決済・Trust & Safety担当', action: '代理購入・予約で、確定前確認、外部の確定結果、重複防止、取消、返金、問い合わせの責任分界を点検する', due: '金銭または予約を伴う機能の提供前', reason: '承認画面だけでは、外部サービス側の失敗や注文後の利用者救済をカバーできないため。' },
    { owner: 'セキュリティ・ソフトウェア保守担当', action: 'AI支援の脆弱性調査に、許可範囲、保守者の検証、修正確認、責任ある開示、監査記録のゲートを設ける', due: 'AI支援セキュリティ運用の導入前', reason: '候補生成を、検証・修正・開示まで完了した防御成果と混同しないため。' }
  ],
  sections: [
    { title: '調査条件', items: ['主対象期間: 2026-11-12 08:00 JSTから2026-11-19 08:00 JSTまで。重要情報が確認できたため、過去14日への遡及調査は行わなかった。', '主要確認入口: TechCrunch、Hacker News、Product Hunt、ProductZine、Forrester Blogs、TechFeed Startup / Innovation、TechFeed Marketing。候補抽出後、OpenAIの製品・サポート・政策に関する一次情報を優先して確認した。', '確認方針: APIの提供開始、限定的な地域・利用者条件を持つ機能、組織・事例に依存するセキュリティ成果を区別し、性能優位、注文完了、脆弱性検出の一般化は行わない。', '取得エラー: ProductZine RSSはHTTP 403: Forbidden。ほかの主要6入口はHTTP 200を確認した。'] },
    { title: 'エグゼクティブサマリー', items: ['AI基盤: 新モデルは、固定タスクの品質・コスト・信頼性で既存モデルと比較してから切り替える。', 'エージェント: 金銭や予約を伴う操作では、明示承認に加えて外部側の確定結果、取消、救済まで設計する。', 'セキュリティ: AI支援の候補検出は、人間の検証、修正、責任ある開示を含む工程で評価する。'] },
    { title: 'テーマ別の調査結果', items: ['AI/LLM/エージェント: APIモデル更新と外部行為を伴うエージェント機能を、重要度、影響、検証条件とともにカードで整理した。', '開発者・インフラ動向: 今週の主要確認入口と一次情報の調査範囲では、上記のモデル提供開始以外に、独立カードにすべきクラウド、半導体、データ基盤、OSSの重要な新規情報は確認できなかった。', 'セキュリティ/規制/標準化: AIを使うサイバー防御事例をカードで整理した。規制・標準化については、この調査範囲で独立カードにすべき重要な新規情報は確認できなかった。', 'スタートアップ/市場/資本: 今週の主要確認入口と一次情報の調査範囲では、独立カードにすべき重要な新規情報は確認できなかった。'] },
    { title: '注目すべき仮説と解くべき課題', items: ['仮説: モデルの能力差が縮小するほど、AI導入の差はモデル名よりも、評価セット、ツール権限、監督・再試行の運用に現れる。反証には、同じ業務・品質基準・リスク上限での再現可能な比較が必要である。', '課題: 購入や予約を担うエージェントで、利用者の承認を最終的な取引完了と混同しないこと。解決には、外部の確定状態、重複実行、取消・返金、証跡、問い合わせ窓口を一続きで扱う必要がある。', '課題: AIが出した脆弱性候補を未検証のまま運用・公開しないこと。解決には、許可済み環境での再現、保守者の検証、影響評価、修正確認、責任ある開示を人間の責任で実施する必要がある。'] },
    { title: '今週見直すべき意思決定', items: ['事業・プロダクト: 外部サービスへ作用するエージェントについて、利用者が確定する範囲と、障害・取消時の責任者を定義する。', 'エンジニアリング: モデル更新を、評価データ、ツール連携、再試行、監査を含む本番条件で比較する。', 'リスク管理: AI支援セキュリティ運用の検証・修正・開示ゲートを定義し、検出件数だけをKPIにしない。'] },
    { title: '今週検討すべき対応アクション', items: [] }
  ]
};
