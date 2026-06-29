import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const CASES = [
  {
    name: "Анна К.",
    city: "Казань",
    branches: 2,
    revenue: "1 400 000 ₽",
    profit: "350 000 ₽",
    quote: "Я не имела опыта в образовании, но команда закрыла все вопросы.",
    image: "/images/cases/case-anna.jpg",
  },
  {
    name: "Марина С.",
    city: "Краснодар",
    branches: 1,
    revenue: "1 100 000 ₽",
    profit: "300 000 ₽",
    quote: "Запустили за 40 дней, первые клиенты появились до открытия.",
    image: "/images/cases/case-marina.jpg",
  },
  {
    name: "Ольга В.",
    city: "Екатеринбург",
    branches: 3,
    revenue: "2 200 000 ₽",
    profit: "600 000 ₽",
    quote: "Теперь это семейный бизнес с понятной системой.",
    image: "/images/cases/case-olga.jpg",
  },
];

export function CasesSection() {
  return (
    <Section id="cases">
      <div className="reveal">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Партнёры «Ярких детей» выходят на прибыль от 300 000 ₽ и масштабируются</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CASES.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-700 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] bg-surface">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-sm text-muted">{item.city}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{item.branches} {item.branches === 1 ? "филиал" : "филиала"}</p>
                <div className="mt-4 flex gap-6">
                  <div>
                    <p className="text-xl font-bold text-primary-dark">{item.revenue}</p>
                    <p className="text-xs text-muted">выручка</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary-dark">{item.profit}</p>
                    <p className="text-xs text-muted">прибыль</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-2 border-primary pl-4 text-sm italic text-muted">{item.quote}</blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" href="#lead-form-1">
            Получить истории партнёров
          </Button>
          <Button variant="outline" size="lg" href="#lead-form-1">
            Пообщаться с партнёром
          </Button>
        </div>
      </div>
    </Section>
  );
}
