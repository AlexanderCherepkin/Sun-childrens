import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const ITEMS = [
  "Бренд и фирменный стиль",
  "Собственная CRM",
  "Онлайн-платформа обучения",
  "Авторские методики",
  "Макеты рекламы",
  "Кураторство 24/7",
  "Скрипты продаж",
  "Юридическое сопровождение",
  "Дизайн-проект помещения",
  "Подбор и обучение персонала",
  "Настройка рекламы",
  "Контроль качества",
];

export function PackageSection() {
  return (
    <Section id="package" background="surface">
      <div className="reveal">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Вы получаете готовую систему для запуска и управления центром</h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, idx) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-border bg-white p-5 shadow-sm transition-all duration-700 hover:shadow-md"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {idx + 1}
              </span>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" href="#lead-form-1">
            Получить полный пакет франшизы
          </Button>
        </div>
      </div>
    </Section>
  );
}
