import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { reports } from "../src/app/reports.js";
import { getRoute } from "../src/app/routes.js";

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

describe("reports", () => {
  it("サンプルレポートの一覧データを保持する", () => {
    assert.equal(reports.length, 2);
    assert.equal(reports[0].title, "自治体DX公開資料の読み取りサンプル");
    assert.equal(reports[1].title, "医療公開データ確認レポートのサンプル");
  });
});
