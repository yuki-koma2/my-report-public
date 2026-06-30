import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getRoute, renderRoute } from "../src/app/render.js";

describe("routing", () => {
  it("空のハッシュはホームとして扱う", () => {
    assert.deepEqual(getRoute(""), { name: "home" });
  });

  it("レポート詳細の id を取り出す", () => {
    assert.deepEqual(getRoute("#/reports/local-government-dx-2026"), {
      name: "report",
      id: "local-government-dx-2026"
    });
  });
});

describe("renderRoute", () => {
  it("ホームにレポート一覧を表示する", () => {
    const html = renderRoute("#/");

    assert.match(html, /最新レポート/);
    assert.match(html, /自治体DX公開資料/);
    assert.match(html, /医療公開データ確認レポート/);
  });

  it("存在しないページでは not found を表示する", () => {
    const html = renderRoute("#/missing");

    assert.match(html, /ページが見つかりません/);
  });
});
