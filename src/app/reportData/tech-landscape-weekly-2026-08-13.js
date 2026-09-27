export const report = {
  "id": "tech-landscape-weekly-2026-08-13",
  "title": "テック情勢週次レポート 2026-08-13週",
  "category": "テック情勢",
  "articleType": "weekly",
  "articleTypeLabel": "週次最新情報",
  "cadence": "週次で自動更新・追加",
  "tags": [
    "AI",
    "エンジニアリング",
    "セキュリティ",
    "規制",
    "半導体",
    "市場インテリジェンス"
  ],
  "summary": "2026年8月6日00:00 JSTから8月13日08:00 JSTまでの公開情報をもとに、ブラウザ型エージェントの終了・移行、EU AI Act透明性義務の適用、AI需要を映す半導体売上を整理した週次レポートです。",
  "publishedAt": "2026-08-13",
  "checkedAt": "2026-08-13",
  "sources": [
    {
      "title": "OpenAI Help Center: Evolving Atlas into ChatGPT for browser-based agentic work",
      "url": "https://help.openai.com/en/articles/20001371-evolving-atlas-into-chatgpt-for-browser-based-agentic-work",
      "type": "一次情報",
      "checkedAt": "2026-08-13"
    },
    {
      "title": "European Commission: Transparency obligations under Article 50 of the AI Act",
      "url": "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      "type": "規制当局資料",
      "publishedAt": "2026-07-24",
      "checkedAt": "2026-08-13"
    },
    {
      "title": "TSMC: 2026 Monthly Revenue",
      "url": "https://investor.tsmc.com/english/monthly-revenue/2026",
      "type": "一次情報",
      "publishedAt": "2026-08-10",
      "checkedAt": "2026-08-13"
    },
    {
      "title": "TechCrunch RSS",
      "url": "https://techcrunch.com/feed/",
      "type": "RSS",
      "checkedAt": "2026-08-13"
    },
    {
      "title": "Hacker News RSS",
      "url": "https://news.ycombinator.com/rss",
      "type": "RSS",
      "checkedAt": "2026-08-13"
    },
    {
      "title": "Product Hunt RSS",
      "url": "https://www.producthunt.com/feed",
      "type": "RSS",
      "checkedAt": "2026-08-13"
    },
    {
      "title": "Forrester Blogs RSS",
      "url": "https://go.forrester.com/blogs/feed/",
      "type": "RSS",
      "checkedAt": "2026-08-13"
    },
    {
      "title": "TechFeed Startup / Innovation",
      "url": "https://techfeed.io/feeds/categories/Startup%20%2F%20Innovation?userId=667a89b3185e12081e95a7b5",
      "type": "RSS",
      "checkedAt": "2026-08-13"
    },
    {
      "title": "TechFeed Marketing",
      "url": "https://techfeed.io/feeds/categories/Marketing?userId=667a89b3185e12081e95a7b5",
      "type": "RSS",
      "checkedAt": "2026-08-13"
    }
  ],
  "highlights": [
    "OpenAIはAtlasを2026年8月9日に終了予定とし、ブラウザ型エージェント機能をChatGPTとCodexへ移す方針を示した。ブックマーク、開いているタブ、履歴は自動移行されない。",
    "EU AI ActのArticle 50透明性義務は8月2日から適用された。直接対話するAIの通知、生成・操作コンテンツの機械可読な標識、一定のdeepfakeや公益事項テキストの表示が論点になる。",
    "TSMCの2026年7月連結売上高は4,675億8,000万台湾ドル、前年同月比44.7％増となった。月次売上は未監査であり、単月指標を個別企業の需要予測に直結させない。"
  ],
  "lead": {
    "title": "今週の判断ポイント",
    "body": "今週はAIの新機能競争よりも、既存のエージェント利用をどの環境へ移し、どのデータを保全し、公開コンテンツの透明性をどう実装・説明するかが具体的な運用課題になった。半導体の高い売上成長はAI計算需要の強さを示すが、供給集中、調達リードタイム、投資回収を分けて評価する必要がある。",
    "quote": "エージェントの導入判断は、機能の追加だけでなく、終了・移行・監査・表示義務を含むライフサイクル全体で評価する。"
  },
  "dashboardMetrics": [
    {
      "label": "対象期間",
      "value": "7日",
      "caption": "2026-08-06 08:00 JSTから2026-08-13 08:00 JSTまで。ECの7月24日資料を背景参照",
      "tone": "primary"
    },
    {
      "label": "対応期限",
      "value": "12/2",
      "caption": "既存の生成AIシステムに対するArticle 50(2)の限定的な移行期限",
      "tone": "deadline"
    },
    {
      "label": "高優先度",
      "value": "2テーマ",
      "caption": "ブラウザ型エージェント移行、AI透明性義務",
      "tone": "high"
    },
    {
      "label": "取得エラー",
      "value": "1件",
      "caption": "ProductZine RSSがHTTP 403: Forbidden",
      "tone": "primary"
    }
  ],
  "topicCards": [
    {
      "theme": "AI/LLM/エージェント",
      "title": "Atlasの終了でブラウザ型エージェントの移行とデータ保全が運用課題になる",
      "summary": "OpenAIはAtlasを2026年8月9日に終了予定とし、ブラウザ型エージェントの機能をChatGPTとCodexへ移すとしている。Atlasのブックマーク、開いているタブ、履歴は自動では移行されず、Cookieやセッションファイルは機微情報として扱う必要がある。",
      "date": "2026-08-09",
      "sourceTitle": "OpenAI Help Center: Evolving Atlas into ChatGPT for browser-based agentic work",
      "sourceUrl": "https://help.openai.com/en/articles/20001371-evolving-atlas-into-chatgpt-for-browser-based-agentic-work",
      "sourceType": "一次情報",
      "priority": "高",
      "timing": "すぐ",
      "relevance": 97,
      "relatedTags": [
        "AI",
        "エンジニアリング",
        "セキュリティ"
      ],
      "affected": [
        "AI基盤チーム",
        "業務部門",
        "IT管理者",
        "セキュリティ担当"
      ],
      "change": "ブラウザ型エージェントの提供終了により、利用環境と保存データを個別に移行・再検証する必要が生じた。",
      "importance": "自動移行されないデータを放置すると、業務の再現性や重要URLへのアクセスを失う。Cookie・セッションの不用意な共有はアカウント侵害にもつながりうる。",
      "implication": "Atlas利用者、保存対象、接続先、代替環境、管理者設定を棚卸しし、代表ワークフローをChatGPT/Codexまたは承認済みブラウザで検証する。",
      "uncertainty": "代替機能の利用可否はプラン、地域、端末、ワークスペース設定に依存する。既存ワークフローと同等の挙動は実機で確認が必要。",
      "dateLabel": "終了予定日"
    },
    {
      "theme": "セキュリティ/規制/標準化",
      "title": "EU AI Actの透明性義務が適用され、実装証跡の確認局面へ移る",
      "summary": "対象期間外の制度の継続対応。European CommissionのFAQによると、Article 50は2026年8月2日から適用された。提供者は直接対話するAIで利用者への通知と、生成・操作コンテンツの機械可読な標識を求められる。人の最終確認を伴わない公益事項のAI生成テキスト、deepfake等には導入者側の明確な表示も論点となる。",
      "date": "2026-08-02",
      "sourceTitle": "European Commission: Transparency obligations under Article 50 of the AI Act",
      "sourceUrl": "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      "sourceType": "規制当局資料",
      "priority": "高",
      "timing": "2026-12-02まで",
      "relevance": 99,
      "relatedTags": [
        "AI",
        "規制",
        "セキュリティ"
      ],
      "affected": [
        "生成AI提供者",
        "公開メディア運営者",
        "法務・コンプライアンス",
        "プロダクト責任者"
      ],
      "change": "透明性義務は将来の準備事項ではなく適用済みになった。8月2日以前に市場投入されたシステムでも、生成物の標識・検出義務には12月2日までの限定的な移行期間がある。",
      "importance": "人のレビューや編集責任の有無、提供者・導入者の役割、コンテンツ種別により必要な表示と証跡が変わる。形式的な校正だけは人のレビューとして扱われない。",
      "implication": "EUで利用されるAI機能と公開コンテンツを棚卸しし、AI対話通知、機械可読標識、visible label、人の実質的レビュー、責任者、証跡を機能単位で記録する。",
      "uncertainty": "適用範囲と適切な手段は機能・提供形態・公開文脈に依存する。コード署名は任意で、未署名の場合も同等の適合手段を示す必要がある。",
      "dateLabel": "適用開始日（対象期間外）"
    },
    {
      "theme": "クラウド/半導体/市場",
      "title": "TSMCの7月売上は前年比44.7％増、AI需要の強さと供給集中を同時に示す",
      "summary": "TSMCの2026年7月連結売上高は4,675億8,000万台湾ドルで、前年同月比44.7％増。1〜7月累計は2兆8,720億6,400万台湾ドル、前年同期比37.0％増となった。",
      "date": "2026-08-10",
      "sourceTitle": "TSMC: 2026 Monthly Revenue",
      "sourceUrl": "https://investor.tsmc.com/english/monthly-revenue/2026",
      "sourceType": "一次情報",
      "priority": "中",
      "timing": "継続ウォッチ",
      "relevance": 90,
      "relatedTags": [
        "半導体",
        "AI",
        "市場インテリジェンス"
      ],
      "affected": [
        "クラウド事業者",
        "AIインフラ調達",
        "半導体設計企業",
        "投資担当"
      ],
      "change": "AI計算資源の供給網で重要な製造企業の月次売上成長が高水準で続いている。",
      "importance": "AI需要の強さを示す有力な観測点だが、売上は顧客別の需要、価格、製品構成、在庫の寄与を分離していない。供給集中リスクも残る。",
      "implication": "GPU・先端パッケージングを含む調達計画では、単月売上を需要予測の根拠にせず、複数供給源、リードタイム、予約容量、撤退条件を確認する。",
      "uncertainty": "月次数値は未監査で、TSMCは個別顧客・用途別の内訳をこの表で開示していない。AI由来の寄与を定量化するには追加の一次資料が必要。"
    },
    {
      "theme": "重要な新規情報なし",
      "title": "ブラウザ/OS/モバイルの新規大型一次情報は今回の採用対象外",
      "summary": "主要フィードと公式入口を確認したが、今回の事業・技術判断を直ちに変えるブラウザ、OS、モバイルの大型一次情報は、Atlas終了を除き採用しなかった。 公式入口の個別URLは未記録であり、新規発表が存在しないとの結論ではない。",
      "date": "2026-08-13",
      "sourceTitle": "Hacker News RSS",
      "sourceUrl": "https://news.ycombinator.com/rss",
      "sourceType": "RSS",
      "priority": "低",
      "timing": "継続ウォッチ",
      "relevance": 60,
      "relatedTags": [
        "エンジニアリング",
        "市場インテリジェンス"
      ],
      "affected": [
        "Web開発者",
        "モバイル開発者",
        "プロダクト責任者"
      ],
      "change": "今週確認できた重要な新規情報なし。",
      "importance": "話題量ではなく、公式な配信、仕様、セキュリティ、規約の変更で判断する。",
      "implication": "主要ベンダーの公式発表と脆弱性情報を継続確認する。",
      "uncertainty": "個別の小規模更新や脆弱性は今回の大きな変化の選定外。",
      "dateLabel": "確認日"
    }
  ],
  "actionCards": [
    {
      "owner": "AI基盤・IT管理責任者",
      "action": "Atlas利用の有無と保存対象を棚卸しし、移行後のブラウザ運用を検証する",
      "due": "直ちに",
      "reason": "Atlas終了後はブックマーク、タブ、履歴が自動移行されず、業務継続と機密情報管理の確認が必要なため。"
    },
    {
      "owner": "法務・プロダクト責任者",
      "action": "EU向けAI機能の透明性表示と人のレビュー証跡を機能単位で確認する",
      "due": "2026-12-02まで",
      "reason": "Article 50の透明性義務は適用済みで、既存システムの標識・検出義務にも限定的な移行期限があるため。"
    },
    {
      "owner": "調達・FinOps責任者",
      "action": "AI計算資源の調達計画を供給集中、予約容量、リードタイム、撤退条件で見直す",
      "due": "次回調達判断まで",
      "reason": "高い半導体売上成長を需要の強さとして観測しつつ、単一供給源への依存を別途管理するため。"
    }
  ],
  "sections": [
    {
      "title": "調査条件",
      "items": [
        "主対象期間: 2026-08-06 08:00 JSTから2026-08-13 08:00 JSTまで。直近7日で重要な移行・規制適用・供給網の変化を確認できたため、ECの7月24日FAQを対象期間外の背景資料として参照した。",
        "主要確認入口: TechCrunch、Hacker News、Product Hunt、ProductZine、Forrester Blogs、TechFeed Startup / Innovation、TechFeed Marketing。候補は公式発表・規制当局・企業IRで裏取りした。"
      ]
    },
    {
      "title": "エグゼクティブサマリー",
      "items": [
        "エージェント運用: Atlas終了により、機能比較ではなく、データ移行、利用者周知、代替環境の権限・監査までを含む移行計画が必要になった。",
        "規制: EU AI Act Article 50は適用済みである。生成・操作コンテンツの標識、公開時の表示、人の実質的レビュー、責任者の証跡を実装・運用の双方で確認する。",
        "市場: TSMCの月次売上は高い成長を示すが、AI需要の強さと供給集中リスクを分けて扱い、単月の数字だけで投資・調達を判断しない。"
      ]
    },
    {
      "title": "テーマ別の調査結果",
      "items": [
        "AI/LLM/エージェント、規制、半導体市場を、重要度、影響、反証点とともにカードで整理した。"
      ]
    },
    {
      "title": "注目すべき仮説と解くべき課題",
      "items": [
        "仮説: ブラウザ型エージェントの競争力は単発の操作能力より、利用者データの可搬性、ログ、権限、移行手順の一貫性で決まる。反証には複数環境での業務完遂率と移行失敗率を測る必要がある。",
        "仮説: AI透明性対応は可視ラベルの追加だけでは不十分で、生成経路・人の実質レビュー・編集責任を追えることが信頼と監査効率を左右する。",
        "解くべき課題: Cookieやセッションファイルを移行作業で扱う際に、業務継続と秘密情報管理を両立する。",
        "解くべき課題: 提供者と導入者が分かれるAI機能で、Article 50における標識・通知・公開表示・証跡の責任分界を明文化する。",
        "大きな問題: AI計算需要が強いほど、先端製造の供給集中、調達リードタイム、過剰予約による固定費リスクが同時に高まる。"
      ]
    },
    {
      "title": "今週検討すべき対応アクション",
      "items": []
    },
    {
      "title": "継続ウォッチすべきテーマ",
      "items": [
        "ChatGPT/Codexにおけるブラウザ型エージェント機能の提供範囲、ワークスペース管理、移行ガイダンス。",
        "EU AI Act Article 50の各国当局による執行、コード署名企業、実務的な標識・表示の解釈。",
        "半導体供給網の先端製造・パッケージング能力、クラウド予約容量、AIインフラ投資の回収状況。"
      ]
    },
    {
      "title": "取得エラー",
      "items": [
        "ProductZine RSS: https://productzine.jp/rss/new/20/index.xml — HTTP 403: Forbidden"
      ]
    }
  ]
};
