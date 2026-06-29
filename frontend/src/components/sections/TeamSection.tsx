import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const ROLES = [
  {
    name: "Куратор",
    description: "Ваш персональный руководитель проекта",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    name: "Методист",
    description: "Контроль качества программ и обучения",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    name: "Маркетолог",
    description: "Привлечение клиентов и продвижение",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    name: "Специалист по CRM",
    description: "Настройка системы и отчётности",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: "HR",
    description: "Подбор и адаптация команды",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: "Дизайнер",
    description: "Макеты и фирменные материалы",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a7 7 0 0 1 0 14 7 7 0 0 1 0-14z" />
        <path d="M12 2v20" />
      </svg>
    ),
  },
  {
    name: "Юрист",
    description: "Проверка договоров и согласований",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

const GRADIENTS = [
  "from-rose-400 to-orange-300",
  "from-violet-400 to-fuchsia-300",
  "from-sky-400 to-cyan-300",
  "from-emerald-400 to-teal-300",
  "from-amber-400 to-yellow-300",
  "from-pink-400 to-rose-300",
  "from-indigo-400 to-purple-300",
];

export function TeamSection() {
  return (
    <Section id="team">
      <div className="reveal">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Команда поддержки
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold md:text-4xl lg:text-5xl">
            24/7 с вами будет команда запуска и сопровождения
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
            Каждый партнёр получает персональное окружение из 7 специалистов — от идеи до стабильной прибыли.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((role, idx) => (
            <div
              key={role.name}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={cn(
                  "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:scale-110",
                  GRADIENTS[idx % GRADIENTS.length]
                )}
              >
                {role.icon}
              </div>
              <h3 className="text-lg font-semibold">{role.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{role.description}</p>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" href="#lead-form-1">
            Оставить заявку
          </Button>
        </div>
      </div>
    </Section>
  );
}
