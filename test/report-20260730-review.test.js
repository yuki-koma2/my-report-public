import {report} from '../src/app/reportData/tech-landscape-weekly-2026-07-30.js';
it('7月30日週は期間外参照とMeta・欧州委員会の別発表を区別する',()=>{
 for(const domain of ['openai.com','nvidia.com']) {
  expect(report.sources.find(s=>s.url.includes(domain))?.type).toContain('対象期間外');
 }
 expect(report.topicCards.find(t=>t.sourceUrl.includes('digital-strategy'))).toMatchObject({date:'2025-07-18',sourceType:'対象期間外の規制当局資料'});
 expect(report.topicCards.find(t=>t.sourceUrl.includes('transparency-of-ai-generated'))?.summary).toContain('2026年7月28日');
});
