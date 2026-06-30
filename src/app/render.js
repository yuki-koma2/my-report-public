import { findReportById, reports } from "./reports.js";

export function getRoute(hash) {
  const route = hash.replace(/^#/, "") || "/";
  const normalized = route.startsWith("/") ? route : `/${route}`;

  if (normalized === "/" || normalized === "/policy") {
    return { name: normalized === "/" ? "home" : "policy" };
  }

  const reportMatch = normalized.match(/^\/reports\/([^/]+)$/);
  if (reportMatch) {
    return { name: "report", id: decodeURIComponent(reportMatch[1]) };
  }

  return { name: "notFound" };
}

export function renderRoute(hash) {
  const route = getRoute(hash);

  if (route.name === "home") {
    return renderHome();
  }

  if (route.name === "policy") {
    return renderPolicy();
  }

  if (route.name === "report") {
    const report = findReportById(route.id);
    return report ? renderReport(report) : renderNotFound();
  }

  return renderNotFound();
}

function renderHome() {
  const cards = reports
    .map(
      (report) => `
        <article class="report-card">
          <div class="report-card__meta">
            <span>${escapeHtml(report.category)}</span>
            <time datetime="${escapeHtml(report.publishedAt)}">${escapeHtml(report.publishedAt)}</time>
          </div>
          <h2>${escapeHtml(report.title)}</h2>
          <p>${escapeHtml(report.summary)}</p>
          <a class="text-link" href="#/reports/${encodeURIComponent(report.id)}">レポートを読む</a>
        </article>
      `
    )
    .join("");

  return `
    <section class="page-heading">
      <p class="eyebrow">Public source reports</p>
      <h1>公開情報から確認できるレポート</h1>
      <p>
        出典、確認日、判断根拠を明示し、読者が検証しやすい形で公開するためのサンプルページです。
      </p>
    </section>

    <section class="section">
      <div class="section__header">
        <h2>最新レポート</h2>
        <p>${reports.length}件のサンプルを掲載中</p>
      </div>
      <div class="report-grid">${cards}</div>
    </section>
  `;
}

function renderPolicy() {
  return `
    <section class="page-heading">
      <p class="eyebrow">Editorial policy</p>
      <h1>レポート作成方針</h1>
      <p>公開情報から確認できる内容だけを扱い、未確認情報を事実として扱わない方針です。</p>
    </section>

    <section class="policy-list" aria-label="作成方針">
      <article>
        <h2>出典を明示する</h2>
        <p>レポート本文には、参照した公開資料の URL と確認日を記録します。</p>
      </article>
      <article>
        <h2>事実と判断を分ける</h2>
        <p>資料から直接確認できる内容と、そこから読み取れる判断を分けて記述します。</p>
      </article>
      <article>
        <h2>古くなりやすい情報を明示する</h2>
        <p>制度、組織、予算、数値など変わりうる情報には確認日を併記します。</p>
      </article>
    </section>
  `;
}

function renderReport(report) {
  const sourceItems = report.sources
    .map(
      (source) => `
        <li>
          <a href="${escapeAttribute(source.url)}" target="_blank" rel="noreferrer">
            ${escapeHtml(source.title)}
          </a>
        </li>
      `
    )
    .join("");

  const highlights = report.highlights
    .map((highlight) => `<li>${escapeHtml(highlight)}</li>`)
    .join("");

  return `
    <article class="report-detail">
      <a class="back-link" href="#/">一覧へ戻る</a>
      <p class="eyebrow">${escapeHtml(report.category)}</p>
      <h1>${escapeHtml(report.title)}</h1>
      <dl class="report-facts">
        <div>
          <dt>公開日</dt>
          <dd>${escapeHtml(report.publishedAt)}</dd>
        </div>
        <div>
          <dt>確認日</dt>
          <dd>${escapeHtml(report.checkedAt)}</dd>
        </div>
      </dl>
      <p class="lead">${escapeHtml(report.summary)}</p>

      <section>
        <h2>確認したポイント</h2>
        <ul>${highlights}</ul>
      </section>

      <section>
        <h2>出典</h2>
        <ul>${sourceItems}</ul>
      </section>
    </article>
  `;
}

function renderNotFound() {
  return `
    <section class="page-heading">
      <p class="eyebrow">Not found</p>
      <h1>ページが見つかりません</h1>
      <p>指定されたページは存在しません。</p>
      <a class="text-link" href="#/">一覧へ戻る</a>
    </section>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
