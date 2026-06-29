import { Section } from "@/components/ui/Section";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

const REVIEWS = [
  { name: "Анна, Казань", result: "2 филиала, прибыль 350 000 ₽", url: "/videos/reviews/review-1.mp4", poster: "/images/founder-portrait.jpg" },
  { name: "Марина, Краснодар", result: "1 филиал, прибыль 300 000 ₽", url: "/videos/reviews/review-2.mp4", poster: "/images/kids-floor.jpg" },
  { name: "Ольга, Тольятти", result: "1 филиал, прибыль 280 000 ₽", url: "/videos/reviews/review-3.mp4", poster: "/images/children-classroom.jpg" },
  { name: "Елена, Владимир", result: "1 филиал, прибыль 320 000 ₽", url: "/videos/reviews/review-4.mp4", poster: "/images/art-class.jpg" },
];

export function VideoReviewsSection() {
  return (
    <Section id="video-reviews" background="surface">
      <div className="reveal">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Истории партнёров, которые уже выбрали «Яркие дети»</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <div key={review.name}>
              <VideoPlayer url={review.url} poster={review.poster} title={review.name} />
              <div className="mt-4 text-center">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-primary-dark">{review.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
