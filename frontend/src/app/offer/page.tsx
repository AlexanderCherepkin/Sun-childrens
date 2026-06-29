import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import "@/app/typography.css";

export const metadata: Metadata = {
  title: "Публичная оферта",
};

export default function OfferPage() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold">Публичная оферта</h1>
      <div className="prose mt-8 max-w-none">
        <p>Настоящий документ является публичной офертой ООО «Яркие дети».</p>
        <p>
          Отправляя заявку на сайте, пользователь подтверждает своё согласие с условиями обработки персональных данных
          и получением информационных сообщений.
        </p>
        <p>Полные условия франшизного соглашения предоставляются на индивидуальной консультации.</p>
      </div>
    </Section>
  );
}
