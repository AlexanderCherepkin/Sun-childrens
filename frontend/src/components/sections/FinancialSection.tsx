import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const FINANCIAL_METRICS = [
  { value: "1 200 000 ₽", label: "средняя выручка" },
  { value: "от 300 000 ₽", label: "чистая прибыль в месяц" },
  { value: "от 2 500 000 ₽", label: "инвестиции" },
  { value: "от 12 месяцев", label: "окупаемость" },
  { value: "от 45 дней", label: "срок открытия" },
  { value: "до 200", label: "заявок до открытия" },
];

export function FinancialSection() {
  return (
    <Section id="finance" background="primary-light">
      <div className="reveal">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Финансовая модель, с которой понятно, сколько вложить и сколько можно заработать</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FINANCIAL_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl bg-white p-8 shadow-sm transition-all duration-700"
            >
              <p className="text-3xl font-bold text-primary-dark md:text-4xl">{metric.value}</p>
              <p className="mt-2 text-muted">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" href="#lead-form-1">
            Получить расчёт под мой город
          </Button>
        </div>
      </div>
    </Section>
  );
}
