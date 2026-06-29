import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "./HeroBackdrop";

const HERO_STATS = [
  { value: "300 000 ₽", label: "Прибыль/мес" },
  { value: "14 мес", label: "Окупаемость" },
  { value: "2,5 млн ₽", label: "Инвестиции" },
  { value: "45 дней", label: "Запуск" },
  { value: "200", label: "Заявок до открытия" },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden pt-32">
      <HeroBackdrop />

      <Container className="relative z-10">
        <div className="hero-content text-center">
          <h1 className="hero-headline text-4xl font-semibold leading-tight text-white text-shadow-hero md:text-5xl lg:text-6xl">
            Откройте детский центр, который приносит{" "}
            <span className="text-secondary">прибыль владельцу</span> и реальные результаты детям
          </h1>
          <p className="hero-lead mt-6 text-lg text-white text-shadow-hero-sm">
            Вы не останетесь один на один с запуском. Команда «Яркие дети» проведёт вас по каждому шагу:
            от выбора локации до первых заявок и стабильной работы центра.
          </p>
          <p className="hero-lead mt-4 text-xl font-medium text-white text-shadow-hero-sm">
            Откройте образовательный центр «Яркие дети» и зарабатывайте от{" "}
            <span className="text-secondary">300 000 ₽ в месяц</span> на любимом деле.
          </p>

          <div className="hero-stats mx-auto mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-2xl font-bold text-primary-dark">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href="#map">
              Узнайте, сколько вы сможете зарабатывать
            </Button>
          </div>
          <p className="mt-3 text-sm text-white text-shadow-hero-xs">
            Оставьте заявку — рассчитаем вложения, окупаемость и потенциальную прибыль центра в вашем городе.
          </p>
        </div>
      </Container>
    </section>
  );
}
