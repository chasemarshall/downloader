import { describe, expect, it } from "vitest";
import { isCompilationAlbum } from "../../src/lib/audio-metadata";

describe("isCompilationAlbum", () => {
  it("uses the source album type when available", () => {
    expect(isCompilationAlbum("Soundtrack Cast", "compilation")).toBe(true);
  });

  it("recognizes Various Artists album credits", () => {
    expect(isCompilationAlbum("Various Artists")).toBe(true);
    expect(isCompilationAlbum("Primary Artist; Various Artists")).toBe(true);
  });

  it("does not mark ordinary collaborations as compilations", () => {
    expect(isCompilationAlbum("A Tribe Called Quest; Large Professor", "album")).toBe(false);
    expect(isCompilationAlbum(null)).toBe(false);
  });
});
