import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    title: "Обучение и аттестация педагогов",
    description:
      "Каждый педагог проходит многоступенчатую подготовку: от методики до детской психологии, а затем сдаёт выпускной урок перед допуском к занятиям.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Контроль занятий и обратная связь",
    description:
      "Регулярные наблюдения, видеоразборы уроков и персональная обратная связь родителям помогают держать качество на высоте.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Единые стандарты сети",
    description:
      "Уроки по единой методике, проверенным программам и критериям оценки — в любом городе семья получает такой же высокий уровень.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "250+", label: "часов методической подготовки педагога" },
  { value: "98%", label: "родителей рекомендуют центр" },
  { value: "3", label: "уровня контроля качества урока" },
];

export function MethodologySection() {
  return (
    <Section id="methodology" background="surface">
      <div className="reveal text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
          Методология
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold md:text-4xl lg:text-5xl">
          Качество и результаты занятий — основа доверия родителей
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-muted md:text-lg">
          Мы выстроили систему, в которой каждый ребёнок получает внимательного педагога, прозрачную программу и измеримый результат.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl bg-surface p-6 text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md md:p-7"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary p-3 text-white shadow-md transition-colors group-hover:bg-primary-dark">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-white p-5 text-center transition-all duration-700"
            >
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-primary-dark md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
