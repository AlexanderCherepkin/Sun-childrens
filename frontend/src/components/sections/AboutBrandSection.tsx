import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const BRAND_CARDS = [
  { value: "40+", label: "центров по России" },
  { value: "Авторские", label: "образовательные программы" },
  { value: "Собственная", label: "CRM-система" },
  { value: "Онлайн", label: "обучающая платформа" },
  { value: "Методическая", label: "поддержка 24/7" },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export function AboutBrandSection() {
  return (
    <Section id="about" background="surface">
      <div className="reveal">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">О сети</p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Франшиза, которая даёт не только бренд, но и систему
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
            «Яркие дети» — сеть, где партнёр получает пошаговую систему запуска, продаж, обучения
            команды и развития. Передаём не теорию, а практику.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {BRAND_CARDS.map((card) => (
            <div
              key={card.label}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              )}
            >
              <StarIcon className="absolute right-3 top-3 text-primary/10 transition-colors duration-300 group-hover:text-primary/30" />
              <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-primary-dark md:text-3xl">{card.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider leading-snug text-muted">{card.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" href="#package">
            Узнать, как устроена франшиза
          </Button>
        </div>
      </div>
    </Section>
  );
}
