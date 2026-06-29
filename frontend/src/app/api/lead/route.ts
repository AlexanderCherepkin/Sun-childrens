import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { createAmoLead } from "@/lib/amo";
import { sendTelegramNotification } from "@/lib/telegram";
import { logLeadFallback } from "@/lib/fallback";

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  city: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  messenger: z.enum(["whatsapp", "telegram", "phone"]),
  consent: z.boolean().optional(),
  recaptchaToken: z.string().min(1),
  source: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  utm_term: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Проверьте заполнение полей", errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Verify reCAPTCHA
  const recaptchaOk = await verifyRecaptcha(data.recaptchaToken);
  if (!recaptchaOk) {
    return NextResponse.json({ ok: false, message: "Проверка антиспама не пройдена" }, { status: 400 });
  }

  // Try AmoCRM first
  const amoResult = await createAmoLead(data);

  // Always notify Telegram as duplicate / fallback
  await sendTelegramNotification({
    ...data,
    crmStatus: amoResult.ok ? `OK (lead ${amoResult.id})` : `ERROR: ${amoResult.message}`,
  });

  // If AmoCRM failed, log locally
  if (!amoResult.ok) {
    await logLeadFallback({ ...data, error: amoResult.message });
  }

  // Push conversion event to dataLayer for GTM/Metrika
  return NextResponse.json({
    ok: amoResult.ok,
    message: amoResult.ok
      ? "Заявка отправлена. Мы свяжемся с вами в ближайшее время."
      : "Заявка принята. Наш менеджер свяжется с вами. (CRM временно недоступна)",
    leadId: amoResult.id,
    event: "lead_form_submit",
  });
}
