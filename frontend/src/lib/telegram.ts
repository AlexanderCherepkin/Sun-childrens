import { LeadFormData } from "@/types";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function sendTelegramNotification(
  data: LeadFormData & { source?: string; crmStatus?: string }
): Promise<{ ok: boolean; message: string }> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return { ok: false, message: "Telegram not configured" };
  }

  const text = [
    `🚀 *Новая заявка с сайта*`,
    ``,
    `*Имя:* ${data.name}`,
    `*Телефон:* ${data.phone}`,
    `*Город:* ${data.city}`,
    data.email ? `*Email:* ${data.email}` : null,
    `*Мессенджер:* ${data.messenger}`,
    `*Источник:* ${data.source || "сайт"}`,
    data.crmStatus ? `*CRM:* ${data.crmStatus}` : null,
    data.utm_source ? `*UTM source:* ${data.utm_source}` : null,
    data.utm_campaign ? `*UTM campaign:* ${data.utm_campaign}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    });

    if (!res.ok) {
      return { ok: false, message: `Telegram error: ${res.status}` };
    }
    return { ok: true, message: "Sent to Telegram" };
  } catch (err) {
    return { ok: false, message: `Telegram request failed: ${err instanceof Error ? err.message : String(err)}` };
  }
}
