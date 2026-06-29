import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function LocationSection() {
  return (
    <Section id="location" background="accent-light">
      <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">Поможем найти лучшую локацию для детского центра</h2>
          <p className="mt-4 text-lg text-muted">
            Оценка конкурентов, трафика, жилых комплексов, детсадов и школ. Помощь в согласовании помещения.
          </p>
          <ul className="mt-6 space-y-3 text-muted">
            <li>✓ Анализ пешеходного и автомобильного трафика</li>
            <li>✓ Оценка конкурентов в радиусе 3 км</li>
            <li>✓ Проверка документов и договора аренды</li>
            <li>✓ Согласование планировки под требования сети</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="text-xl font-semibold">Получить анализ локации</h3>
          <p className="mt-2 text-muted">Укажите город и примерный район — мы подготовим разбор.</p>
          <div className="mt-6">
            <Button size="lg" fullWidth href="#lead-form-1">
              Получить анализ локации
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
