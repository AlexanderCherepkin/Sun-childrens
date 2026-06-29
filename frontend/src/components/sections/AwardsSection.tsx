import { Section } from "@/components/ui/Section";
import { Marquee } from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";

const AWARDS = [
  { name: "TopFranchise", note: "ТОП-10 детских франшиз 2024" },
  { name: "Forbes", note: "Упоминание в обзоре образовательных сетей" },
  { name: "РБК", note: "История успеха партнёра" },
  { name: "Бибосс", note: "Высокая оценка франшизы" },
  { name: "VC.ru", note: "Материал о методологии сети" },
  { name: "e1", note: "Региональное признание" },
];

const ACHIEVEMENTS = [
  { value: "ТОП-10", label: "детских франшиз России" },
  { value: "4.9★", label: "средняя оценка партнёров" },
  { value: "40+", label: "публикаций в профильных СМИ" },
];

function AwardCard({ name, note }: { name: string; note: string }) {
  return (
    <div className="flex h-28 w-56 flex-col items-center justify-center rounded-2xl border border-border bg-white px-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-foreground">{name}</p>
      <p className="mt-1 text-xs leading-tight text-muted">{note}</p>
    </div>
  );
}

export function AwardsSection() {
  return (
    <Section id="awards">
      <div className="reveal">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Признание
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold md:text-4xl lg:text-5xl">
            Награды, рейтинги и публикации
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
            Нас заметили профильные издания и партнёры — это подтверждает надёжность модели и качество поддержки.
          </p>
        </div>

        <div className="mt-10">
          <Marquee pauseOnHover speed="slow">
            {AWARDS.map((award) => (
              <AwardCard key={award.name} name={award.name} note={award.note} />
            ))}
          </Marquee>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {ACHIEVEMENTS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-surface p-5 text-center shadow-sm"
            >
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-primary-dark md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
