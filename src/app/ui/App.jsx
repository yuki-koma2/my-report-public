import { motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { trackEvent, trackPageView } from "../analytics.js";
import { findReportById, getReportsByTag, getReportsByType, getTagSummaries, reports, tagDefinitions } from "../reports.js";
import { getRoute } from "../routes.js";

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return useMemo(() => getRoute(hash), [hash]);
}

export default function App() {
  const route = useHashRoute();

  useEffect(() => {
    trackPageView(route);
  }, [route]);

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#050505]">
      <Header />
      <main id="main-content" className="mx-auto min-h-[calc(100vh-152px)] w-[min(1160px,calc(100%-32px))] py-8 outline-none md:py-12">
        {route.name === "home" && <HomePage />}
        {route.name === "policy" && <PolicyPage />}
        {route.name === "report" && <ReportPage id={route.id} />}
        {route.name === "tag" && <TagPage tag={route.tag} />}
        {route.name === "notFound" && <NotFoundPage />}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-[#050505]/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] w-[min(1160px,calc(100%-32px))] flex-col justify-center gap-3 py-4 md:flex-row md:items-center md:justify-between md:gap-6 md:py-0">
        <a className="inline-flex items-center gap-3 font-mono text-sm font-black uppercase tracking-[0.08em] text-[#050505] no-underline" href="#/">
          <motion.span
            className="h-3 w-3 bg-[#0718c8]"
            animate={shouldReduceMotion ? undefined : { rotate: [0, 90, 90, 180], scale: [1, 1.35, 1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          My Report Public
        </a>
        <nav className="flex flex-wrap gap-2 text-sm font-semibold" aria-label="主要ナビゲーション">
          <a className="rounded-full border border-[#050505] bg-white px-3 py-1.5 text-[#050505] transition hover:-translate-y-0.5 hover:bg-[#0718c8] hover:text-white" href="#/">
            レポート一覧
          </a>
          <a className="rounded-full border border-[#050505] bg-white px-3 py-1.5 text-[#050505] transition hover:-translate-y-0.5 hover:bg-[#0718c8] hover:text-white" href="#/tags/医療">
            タグ
          </a>
          <a className="rounded-full border border-[#050505] bg-white px-3 py-1.5 text-[#050505] transition hover:-translate-y-0.5 hover:bg-[#0718c8] hover:text-white" href="#/policy">
            作成方針
          </a>
        </nav>
      </div>
    </header>
  );
}

function HomePage() {
  const weeklyReports = getReportsByType("weekly");
  const deepReports = getReportsByType("deep");
  const tagSummaries = getTagSummaries();

  return (
    <>
      <Hero />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_1fr]">
        <InfoPanel title="このサイトの目的">
          <p>
            医療・介護、行政DX、AI、制度変更など、公開情報から確認できる情報を継続的に整理し、判断材料として再利用できる形で残します。
          </p>
          <p>
            単なるニュース要約ではなく、今後対応が必要になりそうな課題、事業機会、プロダクト上の論点を明確にすることを重視します。
          </p>
        </InfoPanel>
        <InfoPanel title="前提と注意">
          <p>
            記事はAIによるWeb調査・要約・構造化を活用して作成します。公開前に確認を行いますが、最新性や正確性が重要な判断では必ず一次情報を確認してください。
          </p>
          <p>
            非公開情報や機密情報は扱わず、公開日、確認日、出典をできるだけ明示します。
          </p>
        </InfoPanel>
      </section>

      <section className="mt-12">
        <SectionHeader title="記事の種類" description="深く調べる記事と、週次で追加される最新情報記事を分けて公開します。" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ArticleTypeCard
            title="不定期の深掘り調査"
            description="制度、標準化、業界構造、プロダクト要件など、背景理解が必要なテーマを時間をかけて調査します。"
            points={["複数の公開資料を横断", "背景・構造・示唆を重視", "新規事業やプロダクト検討向け"]}
          />
          <ArticleTypeCard
            title="週次で追加される最新情報"
            description="直近の制度変更、公募、行政資料、企業動向を週次で追い、対応優先度と期限を整理します。"
            points={["毎週追加する想定", "新規情報の有無も明示", "対応アクションを抽出"]}
          />
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader title="タグで探す" description="関心領域ごとに記事を整理します。" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tagSummaries.map((tag) => (
            <TagSummaryCard key={tag.name} tag={tag} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader title="記事" description={`${reports.length}件の記事を掲載中`} />
        <ArticleGroup title="週次で自動更新・追加される最新情報" reports={weeklyReports} />
        <ArticleGroup title="不定期で深く調査するページ" reports={deepReports} />
      </section>
    </>
  );
}

function Hero() {
  return (
    <section className="relative mb-8 min-h-[680px] overflow-hidden border-b border-[#050505] pb-10 pt-6 md:min-h-[720px]">
      <KineticField />
      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-[1.28fr_0.72fr] md:items-end">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut" }}>
          <p className="mb-4 inline-flex border border-[#050505] bg-white px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.08em] text-[#0718c8] shadow-[4px_4px_0_#050505]">
          AI assisted public research
          </p>
          <h1 className="max-w-5xl text-[3.15rem] font-black leading-[0.9] text-[#050505] md:text-[7.4rem]">
            AI調査レポート公開ライブラリ
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[#172033]">
            公開情報をAIで調査・整理し、人が確認しながら一般公開するためのレポートサイトです。制度、事業機会、リスク、プロダクト論点を追える形で蓄積します。
          </p>
        </motion.div>
        <motion.aside
          className="border border-[#050505] bg-[#0718c8] p-5 text-white shadow-[10px_10px_0_#050505]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.45, ease: "easeOut" }}
          aria-label="調査の前提"
        >
          <p className="mb-5 font-mono text-xs font-black uppercase tracking-[0.12em] text-white/70">Research ledger</p>
          <dl className="space-y-4">
            <LedgerItem label="source" value="公開情報のみ" />
            <LedgerItem label="method" value="AI調査 + 人の確認" />
            <LedgerItem label="rhythm" value="深掘り / 週次更新" />
            <LedgerItem label="focus" value="医療・介護・AI・技術" />
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}

function KineticField() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <motion.div
        className="absolute right-[-18%] top-16 h-[240px] w-[72%] border-[18px] border-[#0718c8] md:top-24 md:h-[310px]"
        animate={shouldReduceMotion ? undefined : { x: [0, -34, 0], y: [0, 22, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 left-[8%] h-[18px] w-[68%] bg-[#0718c8]"
        animate={shouldReduceMotion ? undefined : { x: ["-18%", "18%", "-18%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-14 left-[26%] h-[18px] w-[48%] bg-[#050505]"
        animate={shouldReduceMotion ? undefined : { x: ["16%", "-16%", "16%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[54%] h-24 w-24 border border-[#050505] bg-white"
        animate={shouldReduceMotion ? undefined : { rotate: [0, 180, 360], borderRadius: ["0%", "50%", "0%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function LedgerItem({ label, value }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-3 border-t border-white/35 pt-3">
      <dt className="font-mono text-xs uppercase tracking-[0.08em] text-white/65">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}

function TagSummaryCard({ tag }) {
  return (
    <motion.a
      className="group rounded-md border border-[#050505]/15 bg-white p-5 shadow-sm transition hover:border-[#0718c8] hover:shadow-[6px_6px_0_#0718c8]"
      href={`#/tags/${encodeURIComponent(tag.name)}`}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-lg font-black text-[#050505]">{tag.name}</h3>
        <span className="rounded-full bg-[#0718c8] px-3 py-1 font-mono text-xs font-bold text-white">{tag.count}件</span>
      </div>
      <p className="text-sm leading-6 text-[#172033]">{tag.description}</p>
    </motion.a>
  );
}

function InfoPanel({ title, children }) {
  return (
    <motion.article
      className="rounded-md border border-[#050505]/15 bg-white p-6 shadow-sm"
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
    >
      <h2 className="mb-3 text-xl font-black text-[#050505]">{title}</h2>
      <div className="space-y-3 text-[#172033]">{children}</div>
    </motion.article>
  );
}

function SectionHeader({ title, description }) {
  return (
    <div className="mb-5 flex flex-col gap-2 border-b border-[#050505] pb-3 md:flex-row md:items-end md:justify-between">
      <h2 className="text-2xl font-black leading-tight text-[#050505]">{title}</h2>
      <p className="max-w-xl text-sm leading-6 text-[#172033]">{description}</p>
    </div>
  );
}

function ArticleTypeCard({ title, description, points }) {
  return (
    <motion.article
      className="rounded-md border border-[#050505] bg-white p-6 shadow-sm"
      whileHover={{ y: -5, backgroundColor: "#eef2ff" }}
      transition={{ type: "spring", stiffness: 360, damping: 28 }}
    >
      <h3 className="mb-3 text-xl font-black text-[#050505]">{title}</h3>
      <p className="mb-4 text-[#172033]">{description}</p>
      <ul className="space-y-2 text-sm text-[#172033]">
        {points.map((point) => (
          <li className="border-l-2 border-[#0718c8] pl-3" key={point}>
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function ArticleGroup({ title, reports: groupReports }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 font-mono text-sm font-black uppercase tracking-[0.08em] text-[#0718c8]">{title}</h3>
      {groupReports.length === 0 && (
        <p className="rounded-md border border-[#050505]/15 bg-[#f8fafc] px-4 py-3 text-sm font-semibold text-[#172033]">
          該当する記事はまだありません。
        </p>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {groupReports.map((report, index) => (
          <ReportCard key={report.id} report={report} index={index} />
        ))}
      </div>
    </div>
  );
}

function ReportCard({ report, index }) {
  return (
    <motion.article
      className="rounded-md border border-[#050505]/20 bg-white p-6 shadow-sm"
      initial={{ y: 12 }}
      whileInView={{ y: 0 }}
      whileHover={{ y: -6, boxShadow: "8px 8px 0 #0718c8" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.04, duration: 0.28 }}
    >
      <div className="mb-4 flex justify-between gap-3 font-mono text-xs font-bold uppercase tracking-[0.06em] text-[#172033]/65">
        <span className="text-[#0718c8]">{report.articleTypeLabel}</span>
        <time dateTime={report.publishedAt}>{report.publishedAt}</time>
      </div>
      <h3 className="mb-3 text-xl font-black leading-snug text-[#050505]">{report.title}</h3>
      <p className="mb-5 leading-7 text-[#172033]">{report.summary}</p>
      <TagList tags={report.tags} />
      <p className="mb-5 text-sm font-semibold text-[#172033]">{report.cadence}</p>
      <a className="font-bold text-[#0718c8] underline decoration-2 underline-offset-4" href={`#/reports/${encodeURIComponent(report.id)}`}>
        レポートを読む
      </a>
    </motion.article>
  );
}

function TagList({ tags }) {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <a
          className="rounded-full border border-[#050505]/20 bg-[#eef2ff] px-3 py-1 text-sm font-semibold text-[#0718c8] transition hover:border-[#0718c8] hover:bg-[#0718c8] hover:text-white"
          href={`#/tags/${encodeURIComponent(tag)}`}
          key={tag}
        >
          {tag}
        </a>
      ))}
    </div>
  );
}

function PolicyPage() {
  const policies = [
    ["出典を明示する", "レポート本文には、参照した公開資料の URL と確認日を記録します。"],
    ["事実と判断を分ける", "資料から直接確認できる内容と、そこから読み取れる判断を分けて記述します。"],
    ["古くなりやすい情報を明示する", "制度、組織、予算、数値など変わりうる情報には確認日を併記します。"],
    ["アクセス解析について", "サイト改善のため Google Analytics を利用します。個人を直接識別する情報を独自に送信せず、閲覧ページと出典リンククリックなどの利用状況を確認します。"]
  ];

  return (
    <>
      <PageHeading
        eyebrow="Editorial policy"
        title="レポート作成方針"
        description="公開情報から確認できる内容だけを扱い、未確認情報を事実として扱わない方針です。"
      />
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2" aria-label="作成方針">
        {policies.map(([title, description]) => (
          <motion.article
            className="rounded-md border border-[#050505]/20 bg-white p-6 shadow-sm"
            key={title}
            whileHover={{ y: -4, backgroundColor: "#eef2ff" }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
          >
            <h2 className="mb-3 text-lg font-black text-[#050505]">{title}</h2>
            <p className="leading-7 text-[#172033]">{description}</p>
          </motion.article>
        ))}
      </section>
    </>
  );
}

function ReportPage({ id }) {
  const report = findReportById(id);

  if (!report) {
    return <NotFoundPage />;
  }

  return (
    <motion.article className="max-w-5xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
      <a className="mb-7 inline-block font-bold text-[#0718c8] underline decoration-2 underline-offset-4" href="#/">
        一覧へ戻る
      </a>
      <p className="mb-2 font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-[#0718c8]">{report.category}</p>
      <h1 className="mb-6 max-w-3xl text-4xl font-black leading-tight text-[#050505] md:text-6xl">{report.title}</h1>
      <dl className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Fact label="記事種別" value={report.articleTypeLabel} />
        <Fact label="更新頻度" value={report.cadence} />
        <Fact label="公開日" value={report.publishedAt} />
        <Fact label="確認日" value={report.checkedAt} />
      </dl>
      <TagList tags={report.tags} />
      <p className="max-w-3xl text-lg leading-8 text-[#172033]">{report.summary}</p>

      {report.lead && <ReportLead lead={report.lead} />}
      {report.dashboardMetrics?.length > 0 && <ReportDashboard metrics={report.dashboardMetrics} />}

      <ReportHighlights highlights={report.highlights} />

      {report.sections?.length > 0 && <ReportSections reportId={report.id} sections={report.sections} topicCards={report.topicCards} actionCards={report.actionCards} />}

      <section className="mt-12 border-t-2 border-[#050505] pt-8">
        <h2 className="mb-4 text-2xl font-black text-[#050505]">引用元・確認した出典</h2>
        <p className="mb-5 max-w-2xl leading-7 text-[#172033]">
          本文内の判断は、公開日と確認日を追える一次情報を優先し、二次情報、研究論文、配信元リンク、フィードも種別を分けて整理しています。リンク先で原文を確認できます。
        </p>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {report.sources.map((source) => (
            <li className="rounded-md border border-[#050505]/15 bg-white p-4 shadow-sm transition hover:border-[#0718c8] hover:shadow-[6px_6px_0_#0718c8]" key={source.url}>
              <p className="mb-2 font-mono text-xs font-black uppercase tracking-[0.08em] text-[#0718c8]">{source.sourceType ?? source.type ?? "一次情報"}</p>
              <a
                className="font-bold leading-6 text-[#050505] underline decoration-[#0718c8] decoration-2 underline-offset-4"
                href={source.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackSourceClick(report.id, source)}
              >
                {source.title}
              </a>
              {(source.publishedAt || source.checkedAt) && (
                <p className="mt-3 text-xs font-semibold leading-5 text-[#172033]/75">
                  {source.publishedAt && `公開日 ${source.publishedAt}`}
                  {source.publishedAt && source.checkedAt && " / "}
                  {source.checkedAt && `確認日 ${source.checkedAt}`}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
}

function ReportLead({ lead }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative mt-10 overflow-hidden rounded-md border border-[#050505] bg-[#0718c8] p-6 text-white shadow-[10px_10px_0_#050505]">
      <motion.div
        className="absolute right-[-48px] top-[-36px] h-32 w-32 border-[14px] border-white/25"
        animate={shouldReduceMotion ? undefined : { rotate: [0, 45, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="mb-2 font-mono text-xs font-black uppercase tracking-[0.1em] text-white/70">overview</p>
          <h2 className="mb-4 text-2xl font-black md:text-3xl">{lead.title}</h2>
          <p className="leading-8 text-white/90">{lead.body}</p>
        </div>
        <blockquote className="border-l-4 border-white bg-white/10 p-4 text-sm font-semibold leading-7 text-white">
          {lead.quote}
        </blockquote>
      </div>
    </section>
  );
}

function ReportDashboard({ metrics }) {
  return (
    <section className="mt-10">
      <div className="mb-4 flex flex-col gap-2 border-b border-[#050505] pb-3 md:flex-row md:items-end md:justify-between">
        <h2 className="text-2xl font-black text-[#050505]">要点ダッシュボード</h2>
        <p className="max-w-xl text-sm leading-6 text-[#172033]">読む前に、対応の重さ、根拠の強さ、期限、ウォッチ対象を確認できます。</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.article
            className={`rounded-md border p-4 shadow-sm ${metricClass(metric.tone)}`}
            key={metric.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.04, duration: 0.25 }}
          >
            <p className="font-mono text-xs font-black uppercase tracking-[0.08em] opacity-70">{metric.label}</p>
            <p className="mt-3 text-3xl font-black leading-none">{metric.value}</p>
            <p className="mt-3 text-sm font-medium leading-6 opacity-80">{metric.caption}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function metricClass(tone) {
  if (tone === "high") {
    return "border-[#050505] bg-[#050505] text-white";
  }
  if (tone === "deadline") {
    return "border-[#0718c8] bg-[#0718c8] text-white";
  }
  if (tone === "watch") {
    return "border-[#050505]/20 bg-[#f8fafc] text-[#050505]";
  }
  return "border-[#0718c8]/20 bg-[#eef2ff] text-[#050505]";
}

function ReportHighlights({ highlights }) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-black text-[#050505]">確認したポイント</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {highlights.map((highlight, index) => (
          <motion.article
            className="rounded-md border border-[#050505]/15 bg-white p-4 shadow-sm"
            key={highlight}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.03, duration: 0.25 }}
          >
            <p className="mb-3 font-mono text-xs font-black text-[#0718c8]">{String(index + 1).padStart(2, "0")}</p>
            <p className="leading-7 text-[#172033]">{highlight}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ReportSections({ reportId, sections, topicCards = [], actionCards = [] }) {
  return (
    <div className="mt-10 space-y-10">
      {sections.map((section) => (
        <ReportSection reportId={reportId} section={section} topicCards={topicCards} actionCards={actionCards} key={section.title} />
      ))}
    </div>
  );
}

function ReportSection({ reportId, section, topicCards, actionCards }) {
  if (section.title === "テーマ別の調査結果" && topicCards.length > 0) {
    return <TopicCardSection reportId={reportId} title={section.title} topicCards={topicCards} />;
  }

  if (section.title?.endsWith("対応アクション") && actionCards.length > 0) {
    return <ActionCardSection title={section.title} actionCards={actionCards} />;
  }

  return (
    <section className="border-t border-[#050505]/20 pt-7">
      <h2 className="mb-4 text-2xl font-black text-[#050505]">{section.title}</h2>
      <div className="grid grid-cols-1 gap-3">
        {section.items.map((item) => (
          <RichTextCard item={item} reportId={reportId} key={item} />
        ))}
      </div>
    </section>
  );
}

function TopicCardSection({ reportId, title, topicCards }) {
  return (
    <section className="border-t-2 border-[#050505] pt-8">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="text-2xl font-black text-[#050505]">{title}</h2>
        <p className="max-w-xl text-sm leading-6 text-[#172033]">重要度、関連度、対象者、出典を同じカード内で確認できます。</p>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {topicCards.map((topic, index) => (
          <TopicCard reportId={reportId} topic={topic} index={index} key={topic.title} />
        ))}
      </div>
    </section>
  );
}

function TopicCard({ reportId, topic, index }) {
  return (
    <motion.article
      className="rounded-md border border-[#050505] bg-white p-5 shadow-[8px_8px_0_#0718c8]"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.04, duration: 0.28 }}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="bg-[#0718c8] px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.08em] text-white">{topic.theme}</span>
        <span className="border border-[#050505] px-3 py-1 text-xs font-black text-[#050505]">重要度 {topic.priority}</span>
        <span className="border border-[#0718c8] bg-[#eef2ff] px-3 py-1 text-xs font-black text-[#0718c8]">関連度 {topic.relevance}</span>
        <span className="border border-[#050505]/20 px-3 py-1 text-xs font-bold text-[#172033]">対応 {topic.timing}</span>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h3 className="text-2xl font-black leading-tight text-[#050505]">{topic.title}</h3>
          <p className="mt-3 leading-7 text-[#172033]">{topic.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {topic.relatedTags.map((tag) => (
              <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-bold text-[#0718c8]" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-[#050505]/15 bg-[#f8fafc] p-4">
          <dl className="space-y-3">
            <TopicFact label={topic.dateLabel ?? "公開日"} value={topic.date} />
            {topic.checkedAt && <TopicFact label="確認日" value={topic.checkedAt} />}
            <TopicFact label="引用種別" value={topic.sourceType} />
            <TopicFact label="影響主体" value={topic.affected.join(" / ")} />
          </dl>
          <a
            className="mt-4 inline-block font-bold text-[#0718c8] underline decoration-2 underline-offset-4"
            href={topic.sourceUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackSourceClick(reportId, {
                title: topic.sourceTitle,
                url: topic.sourceUrl
              })
            }
          >
            {topic.sourceTitle}
          </a>
        </div>
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#eef2ff]" aria-hidden="true">
        <div className="h-full bg-[#0718c8]" style={{ width: `${topic.relevance}%` }} />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
        <InsightBlock label="何が変わるのか" value={topic.change} />
        <InsightBlock label="なぜ重要なのか" value={topic.importance} />
        <InsightBlock label="示唆" value={topic.implication} />
        <InsightBlock label="不確実性" value={topic.uncertainty} />
      </div>
    </motion.article>
  );
}

function TopicFact({ label, value }) {
  return (
    <div>
      <dt className="font-mono text-xs font-black uppercase tracking-[0.08em] text-[#172033]/60">{label}</dt>
      <dd className="mt-1 text-sm font-bold leading-6 text-[#050505]">{value}</dd>
    </div>
  );
}

function InsightBlock({ label, value }) {
  return (
    <div className="rounded-md border border-[#050505]/10 bg-white p-4">
      <p className="mb-2 font-mono text-xs font-black uppercase tracking-[0.08em] text-[#0718c8]">{label}</p>
      <p className="text-sm leading-7 text-[#172033]">{value}</p>
    </div>
  );
}

function ActionCardSection({ title, actionCards }) {
  return (
    <section className="border-t border-[#050505]/20 pt-7">
      <h2 className="mb-4 text-2xl font-black text-[#050505]">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {actionCards.map((action) => (
          <article className="rounded-md border border-[#050505] bg-[#050505] p-5 text-white shadow-[6px_6px_0_#0718c8]" key={action.action}>
            <p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.08em] text-white/60">{action.owner}</p>
            <h3 className="text-xl font-black leading-snug">{action.action}</h3>
            <p className="mt-4 inline-block bg-white px-3 py-1 text-xs font-black text-[#050505]">期限 {action.due}</p>
            <p className="mt-4 text-sm leading-7 text-white/85">{action.reason}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RichTextCard({ item, reportId }) {
  const [label, body] = splitLabel(item);

  return (
    <article className="rounded-md border border-[#050505]/10 bg-white p-4 leading-7 shadow-sm">
      {label && <p className="mb-2 font-mono text-xs font-black uppercase tracking-[0.08em] text-[#0718c8]">{label}</p>}
      <p className="text-[#172033]">{renderLinkedText(body ?? item, reportId)}</p>
    </article>
  );
}

function splitLabel(item) {
  const separatorIndex = item.indexOf(": ");
  if (separatorIndex === -1 || separatorIndex > 28) {
    return [null, item];
  }
  return [item.slice(0, separatorIndex), item.slice(separatorIndex + 2)];
}

function renderLinkedText(text, reportId) {
  const parts = text.split(/(https?:\/\/[^\s。]+)/g);
  return parts.map((part, index) => {
    if (part.startsWith("http")) {
      return (
        <a
          className="font-bold text-[#0718c8] underline decoration-2 underline-offset-4"
          href={part}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            trackSourceClick(reportId, {
              title: part,
              url: part
            })
          }
          key={`${part}-${index}`}
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

function trackSourceClick(reportId, source) {
  if (!source) {
    return;
  }

  trackEvent("source_click", {
    report_id: reportId,
    source_title: source.title ?? source.url ?? "unknown",
    source_domain: getSourceDomain(source.url)
  });
}

function getSourceDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return "unknown";
  }
}

function TagPage({ tag }) {
  const matchingReports = getReportsByTag(tag);
  const tagDefinition = tagDefinitions.find((item) => item.name === tag);

  if (!tagDefinition && matchingReports.length === 0) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHeading
        eyebrow="Tag"
        title={`#${tag}`}
        description={tagDefinition?.description ?? "このタグが付いた記事を表示しています。"}
      />
      <section>
        <SectionHeader title="記事" description={`${matchingReports.length}件の記事`} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {matchingReports.map((report, index) => (
            <ReportCard key={report.id} report={report} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }) {
  return (
    <div className="border-l-4 border-[#0718c8] bg-[#eef2ff] px-4 py-3 shadow-sm">
      <dt className="font-mono text-xs font-bold uppercase tracking-[0.06em] text-[#172033]/65">{label}</dt>
      <dd className="mt-1 font-extrabold text-[#050505]">{value}</dd>
    </div>
  );
}

function NotFoundPage() {
  return (
    <PageHeading
      eyebrow="Not found"
      title="ページが見つかりません"
      description="指定されたページは存在しません。"
      action={<a className="font-bold text-[#0718c8] underline decoration-2 underline-offset-4" href="#/">一覧へ戻る</a>}
    />
  );
}

function PageHeading({ eyebrow, title, description, action }) {
  return (
    <motion.section className="mb-10 max-w-3xl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <p className="mb-2 font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-[#0718c8]">{eyebrow}</p>
      <h1 className="mb-4 text-4xl font-black leading-tight text-[#050505] md:text-6xl">{title}</h1>
      <p className="text-lg leading-8 text-[#172033]">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-[min(1160px,calc(100%-32px))] border-t border-[#050505]/20 py-6 text-sm text-[#172033]">
      <p>公開情報にもとづく調査レポートサイトです。</p>
    </footer>
  );
}
