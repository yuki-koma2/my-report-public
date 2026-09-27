import { report } from '../src/app/reportData/tech-landscape-weekly-2026-08-13.js';
it('8月13日週は予定日・適用日・確認日を区別する',()=>{
 expect(report.topicCards[0]?.dateLabel).toBe('終了予定日');
 expect(report.topicCards[1]?.dateLabel).toContain('対象期間外');
 expect(report.topicCards.at(-1)?.dateLabel).toBe('確認日');
 expect(report.dashboardMetrics[0]?.caption).not.toContain('00:00');
});
