import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const CONTROLS = [
  {
    period: "ежемесячно",
    title: "Разбор показателей",
    description: "Сравниваем выручку, конверсию и посещаемость по сети и даём конкретные шаги по росту.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    period: "каждую неделю",
    title: "Прослушка звонков",
    description: "Куратор проверяет качество диалогов, корректирует скрипты и помогает закрывать больше заявок.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    period: "в реальном времени",
    title: "Аналитика CRM",
    description: "Отслеживаем воронку продаж, повторные продажи и средний чек в единой системе 24/7.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    period: "родителей",
    title: "NPS отзывы",
    description: "Собираем обратную связь, считаем лояльность и быстро реагируем на любые замечания.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    ),
  },
];

const ACHIEVEMENTS = [
  { value: "24/7", label: "доступ к CRM и чату поддержки" },
  { value: "48 ч", label: "на ответ по любому вопросу партнёра" },
  { value: "95+", label: "средний NPS по сети" },
];

export function QualitySection() {
  return (
    <Section id="quality" background="surface">
      <div className="reveal text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
          Контроль качества
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold md:text-4xl lg:text-5xl">
          Контролируем не только запуск, но и ежедневную работу центра
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-muted md:text-lg">
          Разбор показателей, прослушка звонков, аналитика CRM, NPS и отзывы — всё для стабильного роста и доверия родителей.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTROLS.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-white p-6 text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-dark">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>

              <div className="mt-5 inline-flex items-center justify-center rounded-xl bg-accent-light p-3 text-accent transition-colors group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {ACHIEVEMENTS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-primary p-5 text-center text-white shadow-lg transition-all duration-700"
            >
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
