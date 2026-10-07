import { describe, expect, it } from "vitest";
import { mergeSearchRange } from "hevy2garmin";

// Exercise the installed engine, rather than mocking its exports. A correct
// typescript/src change alone does not update the web's npm dependency.
describe("installed engine merge date range", () => {
  it("includes the Melbourne date for a 06:25 AEDT workout", () => {
    expect(mergeSearchRange({
      start_time: "2026-10-06T19:25:22Z",
      end_time: "2026-10-06T20:23:46Z",
    })).toEqual({ start: "2026-10-05", end: "2026-10-07" });
  });

  it("includes the local date for an evening workout west of UTC", () => {
    expect(mergeSearchRange({
      start_time: "2026-10-07T03:30:00Z",
      end_time: "2026-10-07T04:30:00Z",
    })).toEqual({ start: "2026-10-06", end: "2026-10-08" });
  });
});
