import { report } from '../src/app/reportData/tech-landscape-weekly-2026-08-06.js';
it('8月6日週は遡及参照と確認日を明示する',()=>{
 expect(report.dashboardMetrics[0]?.caption).toContain('08:00 JST');
 expect(report.topicCards[0]?.timing).toContain('対象期間外');
 expect(report.topicCards.at(-1)?.dateLabel).toBe('確認日');
});
