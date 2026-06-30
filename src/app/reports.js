export const reports = [
  {
    id: "healthcare-care-weekly-2026-06-30",
    title: "医療・介護領域 週次最新情報サンプル",
    category: "医療・介護",
    articleType: "weekly",
    articleTypeLabel: "週次最新情報",
    cadence: "週次で自動更新・追加",
    tags: ["医療", "介護", "AI", "制度", "DX"],
    summary:
      "医療・介護制度、補助金、公募、医療DX、介護DX、AI医療、企業動向を週次で整理するサンプルです。",
    publishedAt: "2026-06-30",
    checkedAt: "2026-06-30",
    sources: [
      {
        title: "厚生労働省 公開資料",
        url: "https://www.mhlw.go.jp/"
      }
    ],
    highlights: [
      "直近7日間の公開・更新情報を優先",
      "制度・公募・期限情報を意思決定向けに整理",
      "重要な新規情報がないテーマも明示する"
    ]
  },
  {
    id: "medical-dx-standardization-deep-dive-2026",
    title: "医療DX標準化の深掘り調査サンプル",
    category: "医療DX",
    articleType: "deep",
    articleTypeLabel: "深掘り調査",
    cadence: "不定期で公開",
    tags: ["医療", "AI", "エンジニアリング", "DX"],
    summary:
      "医療DX標準化、電子カルテ、医療情報連携基盤に関する公開資料を横断し、プロダクト・事業上の論点を深く整理するサンプルです。",
    publishedAt: "2026-06-30",
    checkedAt: "2026-06-30",
    sources: [
      {
        title: "デジタル庁 公開資料",
        url: "https://www.digital.go.jp/"
      }
    ],
    highlights: [
      "背景理解が必要なテーマを不定期で深掘り",
      "一次情報と二次情報を区別",
      "事実、解釈、仮説を分けて記載する"
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
