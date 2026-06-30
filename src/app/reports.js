export const reports = [
  {
    id: "local-government-dx-2026",
    title: "自治体DX公開資料の読み取りサンプル",
    category: "行政",
    summary:
      "自治体が公開している計画資料や予算資料をもとに、住民向け手続きのオンライン化方針を整理したサンプルです。",
    publishedAt: "2026-06-30",
    checkedAt: "2026-06-30",
    sources: [
      {
        title: "総務省 自治体DX関連公開資料",
        url: "https://www.soumu.go.jp/"
      }
    ],
    highlights: [
      "公開資料だけで確認できる内容に限定",
      "未確認の施策効果は断定しない",
      "確認日を明示して情報の鮮度を追えるようにする"
    ]
  },
  {
    id: "healthcare-open-data-2026",
    title: "医療公開データ確認レポートのサンプル",
    category: "医療",
    summary:
      "行政機関や公的団体が公開する統計情報を使い、地域医療に関する公開データの見方を整理したサンプルです。",
    publishedAt: "2026-06-30",
    checkedAt: "2026-06-30",
    sources: [
      {
        title: "厚生労働省 公開資料",
        url: "https://www.mhlw.go.jp/"
      }
    ],
    highlights: [
      "数値の出典を明示",
      "古くなりやすい情報には確認日を併記",
      "判断根拠と事実を分けて書く"
    ]
  }
];

export function findReportById(id) {
  return reports.find((report) => report.id === id) ?? null;
}
