import { Section } from "@/components/ui/Section";

const FAQ = [
  {
    question: "Нужно ли иметь педагогическое образование?",
    answer:
      "Нет, управлять центром «Яркие дети» может человек без педагогического опыта. Франшиза построена как управленческий бизнес: вы контролируете процессы, продажи и команду, а методисты центрального офиса отвечают за качество программ. Мы проводим отдельное обучение для управляющих по найму, мотивации и развитию педагогов, а также даём готовые скристы и регламенты для новых сотрудников.",
  },
  {
    question: "Какие инвестиции потребуются на старте?",
    answer:
      "Минимальный вход начинается от 2,5 млн ₽. В эту сумму входит паушальный взнос, первичная аренда и ремонт помещения, закупка мебели и оборудования, первые маркетинговые вложения, а также обучение команды. Точная сумма зависит от формата центра и города: для малого города подойдёт компактный формат с 1–2 кабинетами, а для крупного — расширенный центр с 4 и более кабинетами. Мы рассчитываем вложения индивидуально под ваш бюджет и локацию.",
  },
  {
    question: "Когда окупятся вложения?",
    answer:
      "Средняя окупаемость франшизы составляет от 12 до 18 месяцев. Срок зависит от выбранного города, формата центра, локации и скорости запуска рекламы. Партнёры, которые начинают продвижение ещё до открытия, часто выходят на плановую загрузку в первые месяцы работы. Мы помогаем спрогнозировать выручку, прибыль и сроки возврата инвестиций ещё до подписания договора.",
  },
  {
    question: "Как найти сотрудников?",
    answer:
      "Мы передаём проверенные вакансии, скрипты собеседований и чек-листы оценки кандидатов. HR-специалист центральной команды помогает на первых этапах подбора и закрывает ключевые позиции: управляющий, администратор, педагоги. Кроме того, внутреннее обучение платформе позволяет быстро адаптировать новых сотрудников, даже если у них минимальный опыт в детском образовании.",
  },
  {
    question: "Работает ли франшиза в маленьких городах?",
    answer:
      "Да, у нас есть успешно работающие центры в городах с населением от 100 000 жителей. В малых городах конкуренция ниже, а лояльность аудитории выше, поэтому при правильной локации и маркетинге центр выходит на прибыль быстрее. Для таких городов мы рекомендуем формат с 1–2 кабинетами, который требует меньших вложений и обеспечивает комфортную загрузку на старте.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-border last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-left text-base font-semibold md:text-lg">
        {question}
        <span className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-light text-primary-dark transition-transform duration-300 group-open:rotate-180">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </summary>
      <p className="pb-5 text-muted">{answer}</p>
    </details>
  );
}

export function FaqSection() {
  return (
    <Section id="faq" background="surface">
      <div className="reveal mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Частые вопросы</h2>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-white px-6 shadow-sm">
          {FAQ.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </Section>
  );
}
