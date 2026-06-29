import { Section } from "@/components/ui/Section";
import { Map } from "@/components/ui/Map";
import { LeadFormDynamic } from "@/components/ui/LeadFormDynamic";
import { City } from "@/types";

const BRAND_CITIES: City[] = [
  { name: "Санкт-Петербург", lat: 59.9343, lng: 30.3351, hasCenter: true },
  { name: "Владимир", lat: 56.1291, lng: 40.4071, hasCenter: true },
  { name: "Екатеринбург", lat: 56.8389, lng: 60.6057, hasCenter: true },
  { name: "Тольятти", lat: 53.5078, lng: 49.4204, hasCenter: true },
  { name: "Краснодар", lat: 45.0393, lng: 38.9872, hasCenter: true },
  { name: "Новосибирск", lat: 55.0084, lng: 82.9357, hasCenter: true },
  { name: "Самара", lat: 53.1959, lng: 50.1002, hasCenter: true },
  { name: "Ростов-на-Дону", lat: 47.2225, lng: 39.7188, hasCenter: true },
  { name: "Нижний Новгород", lat: 56.3269, lng: 44.0059, hasCenter: true },
  { name: "Уфа", lat: 54.7388, lng: 55.9721, hasCenter: true },
];

export function MapSection() {
  return (
    <Section id="map">
      <div className="reveal">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Откройте центр «Яркие дети» в своём городе</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            42 действующих центра уже работают по всей России и СНГ. Проверьте, свободен ли ваш город для запуска.
          </p>

          <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary-light px-5 py-2.5 shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary-dark" aria-hidden="true">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <p className="font-[family-name:var(--font-playfair)] text-sm font-semibold uppercase tracking-widest text-primary-dark">
              9 городов преобрели статус «Лидер по посещаемости»
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col lg:col-span-7 min-h-[600px]">
            <Map cities={BRAND_CITIES} className="flex-1" />
          </div>

          <div className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-lg lg:p-8">
              <h3 className="mb-4 text-xl font-semibold">Получите расчёт под ваш город</h3>
              <div className="flex-1">
                <LeadFormDynamic buttonText="Проверить, свободен ли мой город" source="map" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
