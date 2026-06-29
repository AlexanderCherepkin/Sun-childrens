import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const REVIEWS = [
  {
    author: "Елена М.",
    city: "Казань",
    text: "Ребёнок с удовольствием ходит на занятия, виден прогресс в чтении. Педагоги всегда на связи и объясняют, что именно мы делаем дома.",
    rating: 5,
    image: "/images/reviews/review-elena.jpg",
  },
  {
    author: "Ирина К.",
    city: "Краснодар",
    text: "Прекрасные педагоги и атмосфера. Дочь ждёт каждого занятия, а мы уже заметили, как она увереннее стала выражать свои мысли.",
    rating: 5,
    image: "/images/reviews/review-irina.jpg",
  },
  {
    author: "Сергей П.",
    city: "Екатеринбург",
    text: "Организация на высоте, всегда понятно, чему учат и зачем. Регулярная обратная связь — это именно то, чего не хватало в других кружках.",
    rating: 5,
    image: "/images/reviews/review-sergey.jpg",
  },
  {
    author: "Анна В.",
    city: "Самара",
    text: "Записали сына на подготовку к школе. Через три месяца он сам читает простые книжки и с удовольствием рассказывает о занятиях.",
    rating: 5,
    image: "/images/reviews/review-anna.jpg",
  },
  {
    author: "Мария Д.",
    city: "Владимир",
    text: "Очень нравится, что занятия в игровой форме. Дети не замечают, как учатся, а результат виден уже через несколько недель.",
    rating: 5,
    image: "/images/reviews/review-maria.jpg",
  },
  {
    author: "Дмитрий С.",
    city: "Тольятти",
    text: "Центр помог нам не только с развитием ребёнка, но и с уверенностью перед школой. Спасибо за внимательный подход к каждому!",
    rating: 5,
    image: "/images/reviews/review-dmitry.jpg",
  },
  {
    author: "Ольга Н.",
    city: "Санкт-Петербург",
    text: "Ходим уже второй год. Младший с удовольствием посещает занятия, а старшая дочь выиграла городской конкурс чтецов. Рекомендую!",
    rating: 5,
    image: "/images/reviews/review-olga.jpg",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={cn("h-4 w-4", filled ? "text-secondary" : "text-border")}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-primary/10">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export function B2CReviewsSection() {
  return (
    <Section id="testimonials">
      <div className="reveal">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-dark">
            Отзывы родителей
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold md:text-4xl lg:text-5xl">
            Родители ценят результаты и атмосферу наших центров
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
            Настоящие отзывы семей, которые доверили нам развитие своих детей.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="group relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute right-4 top-4">
                <QuoteIcon />
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-[168px] w-[168px] flex-shrink-0 overflow-hidden rounded-full ring-2 ring-border">
                  <Image
                    src={review.image}
                    alt={review.author}
                    fill
                    className="object-cover"
                    sizes="168px"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold">{review.author}</p>
                  <p className="text-sm text-muted">{review.city}</p>
                </div>
              </div>

              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < review.rating} />
                ))}
              </div>

              <blockquote className="mt-4 flex-grow text-sm leading-relaxed text-foreground">
                «{review.text}»
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm font-medium text-foreground shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-success" />
            Рейтинг сети на Яндекс Картах и 2ГИС — 5.0 ★
          </div>
        </div>
      </div>
    </Section>
  );
}
