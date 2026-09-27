import { report } from '../src/app/reportData/tech-landscape-weekly-2026-08-20.js';
it('8月20日週は最大20日の参照とRSS確認範囲を示す',()=>{
 expect(report.dashboardMetrics[0]?.caption).toContain('20日');
 expect(report.topicCards.at(-1)?.summary).toContain('Hacker News');
 expect(report.topicCards.at(-1)?.dateLabel).toBe('確認日');
});
