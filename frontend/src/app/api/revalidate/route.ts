import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

const SECRET = process.env.REVALIDATE_SECRET_TOKEN;

export async function POST(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("secret");

  if (!SECRET || token !== SECRET) {
    return NextResponse.json({ ok: false, message: "Invalid token" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const tag = body.tag || "strapi";

  revalidateTag(tag, "default");
  return NextResponse.json({ ok: true, message: `Revalidated tag: ${tag}` });
}
