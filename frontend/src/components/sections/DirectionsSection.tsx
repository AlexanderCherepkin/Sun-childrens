import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const DIRECTIONS = [
  {
    title: "Подготовка к школе",
    description: "Развиваем логику, речь, мелкую моторику и социальные навыки.",
  },
  {
    title: "Чтение и математика",
    description: "Авторские методики, которые дети полюбят и родители оценят.",
  },
  {
    title: "Доп. направления",
    description: "Робототехника, английский язык, творческие занятия.",
  },
  {
    title: "Сезонная выручка",
    description: "Летние школы и каникулы приносят дополнительный поток.",
  },
];

export function DirectionsSection() {
  return (
    <Section id="why">
      <div className="reveal">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Какими бы ни были кризисы, родители продолжают инвестировать в развитие детей — это успешный старт в жизни
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIRECTIONS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-700 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" href="#lead-form-1">
            Получить анализ рынка в моём городе
          </Button>
        </div>
      </div>
    </Section>
  );
}
