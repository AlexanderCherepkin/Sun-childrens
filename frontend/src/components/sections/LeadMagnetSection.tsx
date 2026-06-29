import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function LeadMagnetSection() {
  return (
    <Section id="lead-magnet" background="accent-light">
      <div className="reveal text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Не уверены, подойдёт ли франшиза для вашего города?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          Бесплатный разбор города: оценка спроса, конкурентов, подбор формата.
        </p>

        <div className="mt-8">
          <Button size="lg" href="#lead-form-1">
            Получить бесплатный разбор
          </Button>
        </div>
      </div>
    </Section>
  );
}
