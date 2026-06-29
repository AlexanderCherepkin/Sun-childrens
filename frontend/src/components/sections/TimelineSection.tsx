import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const STEPS = [
  { title: "Анализ города", note: "Оценка спроса и конкуренции", icon: "city" },
  { title: "Подбор помещения", note: "Критерии и переговоры", icon: "building" },
  { title: "Дизайн-проект", note: "Планировка под бренд", icon: "design" },
  { title: "Оборудование", note: "Закупка и монтаж", icon: "tools" },
  { title: "Обучение команды", note: "Программа и аттестация", icon: "team" },
  { title: "Настройка CRM", note: "Автоматизация процессов", icon: "crm" },
  { title: "Реклама", note: "Запуск клиентского потока", icon: "ads" },
  { title: "Открытие", note: "Первые продажи", icon: "open" },
  { title: "Контроль результата", note: "Сопровождение 24/7", icon: "support" },
];

function StepIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    city: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-5a2 2 0 0 1 4 0v5" />
      </svg>
    ),
    building: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V9l6-3 6 3v13M6 9h12" />
        <rect x="9" y="13" width="3" height="3" />
        <rect x="14" y="13" width="3" height="3" />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    team: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    crm: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    ads: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5.08V2m0 0L8.5 4.5M11 2l2.5 2.5M11 5.08a6.003 6.003 0 0 1 5.92 5.92M17 11h3m0 0l-2.5 2.5M20 11l-2.5-2.5M17 11a6.003 6.003 0 0 1-5.92 5.92M13 17v3m0 0l-2.5-2.5M13 20l2.5-2.5M13 17a6.003 6.003 0 0 1-5.92-5.92M7 13H4m0 0l2.5-2.5M4 13l2.5 2.5M7 13a6.003 6.003 0 0 1 5.92-5.92" />
      </svg>
    ),
    open: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
        <path d="M9 22v-8h6v8" />
        <path d="M12 2v4" />
      </svg>
    ),
    support: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  };
  return (
    <div className="h-6 w-6 text-white">
      {icons[name] ?? icons.support}
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function TimelineSection() {
  return (
    <Section id="timeline" background="surface">
      <div className="reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">
            Этапы запуска
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Пройдём с вами путь от выбора помещения до первых продаж
          </h2>
        </div>

        <div className="mt-14">
          <div className="relative hidden lg:block">
            <div className="absolute left-[2.5rem] right-[2.5rem] top-[2.25rem] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="relative grid grid-cols-9 gap-3">
              {STEPS.map((step, idx) => (
                <div
                  key={step.title}
                  className="group relative text-center transition-all duration-700"
                >
                  <div className="relative z-10 mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-4 border-white bg-primary text-lg font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <StepIcon name={step.icon} />
                  </div>
                  <div className="mt-5 rounded-2xl border border-border bg-white p-4 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-primary/30">
                    <p className="font-[family-name:var(--font-playfair)] text-base font-semibold text-foreground">{step.title}</p>
                    <p className="mt-1 text-xs leading-snug text-muted">{step.note}</p>
                  </div>
                  <div className="absolute -top-2 left-1/2 z-20 hidden h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:flex">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
            {STEPS.map((step) => (
              <div
                key={step.title}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition-all duration-700 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <StepIcon name={step.icon} />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-base font-semibold text-foreground">{step.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{step.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-5 py-2.5">
            <CheckIcon className="text-primary-dark" />
            <span className="text-sm font-semibold text-primary-dark">Запуск от 45 дней</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-dark">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm font-semibold text-foreground">97% партнёров выходят на плановые показатели</span>
          </div>
          <Button size="lg" href="#lead-form-1">
            Получить план запуска
          </Button>
        </div>
      </div>
    </Section>
  );
}
