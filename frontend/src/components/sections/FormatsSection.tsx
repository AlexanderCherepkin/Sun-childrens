import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const FORMATS = [
  {
    name: "1 кабинет",
    tag: "Старт",
    description: "Для малых городов и аккуратного старта.",
    area: "от 40 м²",
    investment: "от 2,5 млн ₽",
    revenue: "от 600 000 ₽",
    profit: "от 200 000 ₽",
    image: "/images/formats/format-1.jpg",
  },
  {
    name: "2 кабинета",
    tag: "Хит",
    description: "Оптимальный формат для быстрого роста выручки.",
    area: "от 80 м²",
    investment: "от 3,5 млн ₽",
    revenue: "от 1 000 000 ₽",
    profit: "от 300 000 ₽",
    image: "/images/formats/format-2.jpg",
  },
  {
    name: "4 кабинета",
    tag: "Максимум",
    description: "Расширенный формат для максимальной прибыли.",
    area: "от 150 м²",
    investment: "от 5,5 млн ₽",
    revenue: "от 1 600 000 ₽",
    profit: "от 500 000 ₽",
    image: "/images/formats/format-3.jpg",
  },
];

const ROWS = [
  { label: "Площадь", key: "area" },
  { label: "Инвестиции", key: "investment" },
  { label: "Выручка", key: "revenue" },
  { label: "Прибыль", key: "profit" },
] as const;

export function FormatsSection() {
  return (
    <Section id="formats" background="surface">
      <div className="reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">
            Форматы франшизы
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Выберите формат центра под ваш город, бюджет и цели
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {FORMATS.map((format, idx) => {
            const popular = idx === 1;
            return (
              <div
                key={format.name}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl",
                  popular ? "border-primary" : "border-border"
                )}
              >
                {popular && (
                  <div className="absolute right-0 top-0 z-10 rounded-bl-2xl bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                    Популярный
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={format.image}
                    alt={format.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted">{format.tag}</p>
                      <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-foreground md:text-3xl">
                        {format.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-muted">{format.description}</p>

                  <div className="mt-6 space-y-3">
                    {ROWS.map((row) => {
                      const value = format[row.key as keyof typeof format] as string;
                      const isProfit = row.key === "profit";
                      return (
                        <div
                          key={row.key}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-4 py-3",
                            isProfit ? "bg-primary-light" : "bg-surface"
                          )}
                        >
                          <span className="text-sm text-muted">{row.label}</span>
                          <span className={cn("font-semibold", isProfit ? "text-primary-dark" : "text-foreground")}>
                            {value}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-auto pt-6">
                    <Button fullWidth variant={popular ? "primary" : "outline"} href="#lead-form-1">
                      Подобрать формат
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
