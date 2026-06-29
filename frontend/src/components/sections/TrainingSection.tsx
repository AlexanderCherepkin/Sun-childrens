import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function TrainingSection() {
  return (
    <Section id="training" background="accent-light">
      <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">
            С нуля обучим управлению детским образовательным центром
          </h2>
          <p className="mt-4 text-lg text-muted">
            Вам не нужно быть педагогом. Обучение продажам, управлению, найму. Отдельные программы для управляющих, администраторов и педагогов.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li>✓ Видеоуроки в онлайн-платформе</li>
            <li>✓ Практические вебинары с куратором</li>
            <li>✓ Чек-листы и шаблоны документов</li>
            <li>✓ Аттестация перед запуском</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="text-xl font-semibold">Получите демо-доступ к платформе обучения</h3>
          <p className="mt-2 text-muted">Оставьте контакты, чтобы посмотреть примеры курсов.</p>
          <div className="mt-6">
            <Button size="lg" fullWidth href="#lead-form-1">
              Получить демо-доступ
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
