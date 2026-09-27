import { report } from '../src/app/reportData/tech-landscape-weekly-2026-09-03.js';
it('9月3日週のFAQとRSSは確認日として表示する',()=>{
 for(const topic of report.topicCards.filter(c=>c.date==='2026-09-03')) expect(topic.dateLabel).toBe('確認日');
});
