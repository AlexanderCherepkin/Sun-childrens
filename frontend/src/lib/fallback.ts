import { LeadFormData } from "@/types";

export async function logLeadFallback(
  data: LeadFormData & { source?: string; error?: string }
): Promise<{ ok: boolean; message: string }> {
  try {
    // In production this can be replaced with a database insert or email send.
    const entry = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    if (typeof process !== "undefined") {
      const fs = await import("fs/promises");
      const path = "/tmp/leads-fallback.json";
      let existing: unknown[] = [];
      try {
        const content = await fs.readFile(path, "utf-8");
        existing = JSON.parse(content);
      } catch {
        // File does not exist yet
      }
      existing.push(entry);
      await fs.writeFile(path, JSON.stringify(existing, null, 2));
    }

    return { ok: true, message: "Lead logged to fallback store" };
  } catch (err) {
    return { ok: false, message: `Fallback logging failed: ${err instanceof Error ? err.message : String(err)}` };
  }
}
