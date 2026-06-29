import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const POINTS = [
  {
    title: "Реклама до открытия",
    description: "Собираем базу заявок за 2–3 недели до старта, чтобы в первый день были записи.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "CRM",
    description: "Воронка продаж, напоминания менеджерам и прозрачная аналитика.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: "Скрипты",
    description: "Готовые разговоры для звонков, сообщений и возражений родителей.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Прогрев аудитории",
    description: "Контент-план и письма, которые доводят родителей до записи на пробное.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Допродажи",
    description: "Повышаем средний чек дополнительными курсами, мероприятиями и абонементами.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const METRICS = [
  { value: "7", label: "дней до первых заявок" },
  { value: "12%", label: "средняя конверсия" },
  { value: "400%", label: "ROI на рекламу" },
];

const DELIVERABLES = [
  "PDF-воронка продаж с воронизацией",
  "Готовые скрипты для звонков и чатов",
  "Контент-план на первые 60 дней",
  "Настройка рекламы и CRM под ключ",
  "Личная консультация маркетолога",
];

export function MarketingSection() {
  return (
    <Section id="marketing" background="surface">
      <div className="reveal grid gap-12 lg:grid-cols-2">
        <div className="transition-all duration-700">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Маркетинговая поддержка
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold md:text-4xl lg:text-5xl">
            Поможем набрать учеников ещё до открытия центра
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Вы получаете готовую систему привлечения клиентов: от первой рекламы до повторных продаж.
          </p>

          <div className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <div
                key={point.title}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md transition-colors group-hover:bg-primary-dark">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-white shadow-2xl md:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Бесплатный гайд
            </div>

            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold md:text-3xl lg:text-4xl">
              Узнайте, как мы приводим клиентов
            </h3>
            <p className="mt-4 text-white/90 md:text-lg">
              Скачайте проверенную воронку продаж франшизы «Яркие дети»: от первого контакта до оплаты абонемента.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
              {METRICS.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur-sm transition-transform hover:-translate-y-0.5">
                  <p className="text-2xl font-bold md:text-3xl">{metric.value}</p>
                  <p className="mt-1 text-xs leading-tight text-white/80">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Внутри материалов
              </p>
              <ul className="mt-3 space-y-2">
                {DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/95">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-white/70">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                href="#lead-form-1"
              >
                Получить воронку продаж
              </Button>
            </div>

            <p className="mt-4 text-center text-xs text-white/60">
              PDF на почту + короткая презентация в мессенджере
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
