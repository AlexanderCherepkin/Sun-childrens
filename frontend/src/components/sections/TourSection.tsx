import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { MediaSlider } from "@/components/ui/MediaSlider";

const TOUR_MEDIA = [
  {
    type: "image" as const,
    url: "/images/art-class.jpg",
    alt: "Класс творчества",
    label: "Ресепшн",
  },
  {
    type: "image" as const,
    url: "/images/children-classroom.jpg",
    alt: "Игровая зона",
    label: "Класс",
  },
  {
    type: "image" as const,
    url: "/images/teacher-students.jpg",
    alt: "Занятие с преподавателем",
    label: "Игровая",
  },
  {
    type: "image" as const,
    url: "/images/kids-floor.jpg",
    alt: "Зона групповых занятий",
    label: "Зона ожидания",
  },
  {
    type: "image" as const,
    url: "/images/tour/tour-1.jpg",
    alt: "Дети на занятии по изобразительному искусству",
    label: "Творческая мастерская",
  },
  {
    type: "image" as const,
    url: "/images/tour/tour-2.jpg",
    alt: "Яркая художественная студия с картинами и материалами",
    label: "Арт-студия",
  },
  {
    type: "image" as const,
    url: "/images/tour/tour-3.jpg",
    alt: "Светлый коридор детского центра с ярким декором",
    label: "Пространство центра",
  },
  {
    type: "image" as const,
    url: "/images/tour/tour-4.jpg",
    alt: "Дошкольники учатся и играют в классе",
    label: "Игровое обучение",
  },
  {
    type: "image" as const,
    url: "/images/tour/tour-5.jpg",
    alt: "Дети читают книги в уютной библиотеке",
    label: "Читальный уголок",
  },
  {
    type: "image" as const,
    url: "/images/tour/tour-6.jpg",
    alt: "Юные художники рисуют на мольбертах в студии",
    label: "Студия живописи",
  },
  {
    type: "image" as const,
    url: "/images/tour/tour-7.jpg",
    alt: "Девочки вместе рисуют на одном мольберте",
    label: "Творческое объединение",
  },
  {
    type: "image" as const,
    url: "/images/tour/tour-8.jpg",
    alt: "Ребёнок играет в красочном детском саду",
    label: "Игровая зона",
  },
];

export function TourSection() {
  return (
    <Section id="tour" background="surface">
      <div className="reveal">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Виртуальный тур
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold md:text-4xl lg:text-5xl">
            Вот как может выглядеть ваш центр «Яркие дети»
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
            Прогуляйтесь по пространству, где дети создают, играют и растут.
          </p>
        </div>

        <div className="mt-12">
          <MediaSlider items={TOUR_MEDIA} />
        </div>

        <div className="mt-10 text-center">
          <Button
            size="lg"
            href="#lead-form-1"
          >
            Посмотреть пример центра
          </Button>
        </div>
      </div>
    </Section>
  );
}
