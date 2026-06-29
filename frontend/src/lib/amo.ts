import { LeadFormData } from "@/types";

const AMOCRM_DOMAIN = process.env.AMOCRM_DOMAIN;
const AMOCRM_ACCESS_TOKEN = process.env.AMOCRM_ACCESS_TOKEN;

export async function createAmoLead(data: LeadFormData & { source?: string }): Promise<{ ok: boolean; id?: number; message: string }> {
  if (!AMOCRM_DOMAIN || !AMOCRM_ACCESS_TOKEN) {
    return { ok: false, message: "AmoCRM not configured" };
  }

  const body = {
    name: `Заявка с сайта — ${data.name}`,
    price: 0,
    status_id: Number(process.env.AMOCRM_STATUS_ID) || undefined,
    pipeline_id: Number(process.env.AMOCRM_PIPELINE_ID) || undefined,
    responsible_user_id: Number(process.env.AMOCRM_RESPONSIBLE_USER_ID) || undefined,
    _embedded: {
      contacts: [
        {
          first_name: data.name,
          custom_fields_values: [
            {
              field_code: "PHONE",
              values: [{ value: data.phone, enum_code: "WORK" }],
            },
            ...(data.email
              ? [
                  {
                    field_code: "EMAIL",
                    values: [{ value: data.email, enum_code: "WORK" }],
                  },
                ]
              : []),
            {
              field_id: undefined,
              values: [{ value: data.city }],
            },
            {
              field_id: undefined,
              values: [{ value: data.messenger }],
            },
          ],
        },
      ],
    },
    custom_fields_values: [
      {
        field_code: "UTM_SOURCE",
        values: data.utm_source ? [{ value: data.utm_source }] : [],
      },
      {
        field_code: "UTM_MEDIUM",
        values: data.utm_medium ? [{ value: data.utm_medium }] : [],
      },
      {
        field_code: "UTM_CAMPAIGN",
        values: data.utm_campaign ? [{ value: data.utm_campaign }] : [],
      },
      {
        field_code: "UTM_CONTENT",
        values: data.utm_content ? [{ value: data.utm_content }] : [],
      },
      {
        field_code: "UTM_TERM",
        values: data.utm_term ? [{ value: data.utm_term }] : [],
      },
    ].filter((f) => f.values.length > 0),
  };

  try {
    const res = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/leads/complex`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}`,
      },
      body: JSON.stringify([body]),
    });

    if (!res.ok) {
      const text = await res.text();
      return { ok: false, message: `AmoCRM error: ${res.status} ${text}` };
    }

    const json = await res.json();
    return { ok: true, id: json[0]?.id, message: "Lead created in AmoCRM" };
  } catch (err) {
    return { ok: false, message: `AmoCRM request failed: ${err instanceof Error ? err.message : String(err)}` };
  }
}
