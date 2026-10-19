import { describe, expect, it } from "vitest";
import vercelConfig from "../../vercel.json";
import hero from "@/assets/hero.jpg.asset.json";
import qr from "@/assets/gwen-donation-qr.webp.asset.json";

describe("Vercel image hosting", () => {
  it.each([hero, qr])("forwards Lovable asset $original_filename to the published asset host", (asset) => {
    const rewrite = vercelConfig.rewrites.find(
      (rule) => rule.source === "/__l5e/assets-v1/:path*",
    );
    expect(rewrite).toBeDefined();
    const path = asset.url.replace(/^\/__l5e\/assets-v1\//, "");
    const destination = rewrite?.destination.replace(":path*", path);
    expect(destination).toBe(`https://gwengo.lovable.app${asset.url}`);
  });
});