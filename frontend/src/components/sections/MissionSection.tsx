import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function MissionSection() {
  return (
    <Section id="mission" background="primary-light">
      <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/children-classroom.jpg"
            alt="Дети на занятиях в центре Яркие дети"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            decoding="async"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">Откройте бизнес, который приносит доход и помогает детям развиваться</h2>
          <p className="mt-4 text-lg text-muted">
            Мы верим, что качественное детское образование может быть и прибыльным, и социально значимым.
            Каждый центр «Яркие дети» — это возможность для родителей и шаг вперёд для ребёнка.
          </p>
          <div className="mt-8">
            <Button size="lg" href="#lead-form-1">
              Узнать о миссии
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
