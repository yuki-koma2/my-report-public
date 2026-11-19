import { report } from '../src/app/reportData/tech-landscape-weekly-2026-11-19.js';
import { cleanup, render, screen } from '@testing-library/react';
import { createElement } from 'react';
import { afterEach, expect, it } from 'vitest';
import App from '../src/app/ui/App.jsx';

afterEach(() => {
  cleanup();
  window.location.hash = '';
});

it('11月19日週は7日間の対象期間、一次情報、取得エラーを記録する', () => {
  expect(report.id).toBe('tech-landscape-weekly-2026-11-19');
  expect(report.dashboardMetrics[0]?.caption).toContain('2026-11-12 08:00 JSTから2026-11-19 08:00 JSTまで');
  expect(report.topicCards).toHaveLength(3);
  expect(report.topicCards.filter((card) => card.priority === '高')).toHaveLength(3);
  expect(report.topicCards.find((card) => card.title.includes('GPT-6.2'))?.sourceType).toBe('一次情報');
  expect(report.sources.find((source) => source.title === 'ProductZine RSS')?.failureType).toBe('HTTP 403: Forbidden');
});

it('11月19日週の詳細ページに判断ポイント、仮説、対応アクションを表示する', () => {
  window.location.hash = '#/reports/tech-landscape-weekly-2026-11-19';
  render(createElement(App));

  expect(screen.getByRole('heading', { name: 'テック情勢週次レポート 2026-11-19週', level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: '今週の判断ポイント' })).toBeInTheDocument();
  expect(screen.getAllByText(/ChatGPT Wallet/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/2026-11-19/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/ProductZine RSSはHTTP 403/).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: '今週検討すべき対応アクション' })).toBeInTheDocument();
  expect(screen.getByText('AIプロダクト・決済・Trust & Safety担当')).toBeInTheDocument();
});
