import { report } from '../src/app/reportData/tech-landscape-weekly-2026-10-22.js';
import { cleanup, render, screen } from '@testing-library/react';
import { createElement } from 'react';
import { afterEach } from 'vitest';
import App from '../src/app/ui/App.jsx';

afterEach(() => {
  cleanup();
  window.location.hash = '';
});

it('10月22日週は7日間の対象期間、一次情報、取得エラーを記録する', () => {
  expect(report.id).toBe('tech-landscape-weekly-2026-10-22');
  expect(report.dashboardMetrics[0]?.value).toBe('7日');
  expect(report.dashboardMetrics[0]?.caption).toContain('2026-10-15 08:00 JSTから2026-10-22 08:00 JSTまで');
  expect(report.topicCards).toHaveLength(4);
  expect(report.topicCards.filter((card) => card.priority === '高')).toHaveLength(3);
  expect(report.dashboardMetrics.find((metric) => metric.label === '高優先度')?.value).toBe('3テーマ');
  expect(report.topicCards.find((card) => card.title.includes('独立評価者'))?.sourceType).toBe('一次情報');
  expect(report.sources.find((source) => source.title === 'ProductZine RSS')?.failureType).toBe('HTTP 403: Forbidden');
});

it('10月22日週の詳細ページに判断ポイント、仮説、対応アクションを表示する', () => {
  window.location.hash = '#/reports/tech-landscape-weekly-2026-10-22';
  render(createElement(App));

  expect(screen.getByRole('heading', { name: 'テック情勢週次レポート 2026-10-22週', level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: '今週の判断ポイント' })).toBeInTheDocument();
  expect(screen.getAllByText(/独立評価/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/ProductZine RSSはHTTP 403/).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: '今週検討すべき対応アクション' })).toBeInTheDocument();
  expect(screen.getByText('AIガバナンス責任者')).toBeInTheDocument();
  expect(screen.getByText('AI開発・研究責任者')).toBeInTheDocument();
});
