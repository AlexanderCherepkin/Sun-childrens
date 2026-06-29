import { Section } from "@/components/ui/Section";
import { LeadFormDynamic } from "@/components/ui/LeadFormDynamic";

const BENEFITS = [
  "Финмодель с прогнозом выручки и прибыли",
  "Пошаговый план запуска за 40 дней",
  "Описание всех образовательных программ",
  "Условия франшизы и инвестиции",
];

export function LeadFormSection() {
  return (
    <Section id="lead-form-1" background="primary">
      <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="text-white">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/80">
            Франшиза «Яркие дети»
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold md:text-4xl lg:text-5xl">
            Получите презентацию франшизы
          </h2>
          <p className="mt-4 text-lg text-white/90 md:text-xl">
            Оставьте контакты — и мы пришлём финмодель, план запуска и список программ.
          </p>

          <ul className="mt-8 space-y-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-white/95">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-white/70">
            Заполняя форму, вы получаете презентацию и не обязываетесь к покупке франшизы.
          </p>
        </div>

        <div className="relative rounded-3xl bg-white p-6 shadow-2xl md:p-8">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-primary-dark shadow-md">
            Бесплатно
          </div>

          <div className="mb-6 text-center">
            <p className="text-lg font-semibold text-foreground">Запросить материалы</p>
            <p className="mt-1 text-sm text-muted">Ответим в течение 15 минут</p>
          </div>

          <LeadFormDynamic
            buttonText="Получить презентацию"
            source="middle"
          />
        </div>
      </div>
    </Section>
  );
}
