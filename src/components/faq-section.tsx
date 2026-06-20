import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Чем TIV 2 отличается от TIV 1?",
      answer:
        "TIV 2 получил обтекаемый бронекорпус, гидравлические «когти» для сцепления с грунтом, систему стабилизации и более мощный дизель. Первая версия была тяжелее, слабее по мощности и страдала от проблем с гидравликой.",
    },
    {
      question: "Что такое «золотой час» перехвата?",
      answer:
        "Это ранняя фаза жизни торнадо, когда воронка ещё формируется и относительно предсказуема. Именно в этот момент команда занимает позицию для безопасного сближения и съёмки.",
    },
    {
      question: "Что означают шкалы F и EF?",
      answer:
        "F-scale (шкала Фудзиты) и более современная EF-scale (Enhanced Fujita) оценивают силу торнадо по разрушениям — от EF0 (слабое) до EF5 (катастрофическое).",
    },
    {
      question: "Что такое DOW и RFB?",
      answer:
        "DOW (Doppler on Wheels) — мобильный доплеровский радар, видящий вращение внутри грозы. RFB (Rear-Flank Downdraft) — нисходящий поток с тыла грозы, который участвует в формировании воронки.",
    },
    {
      question: "Можно ли повторить перехват самому?",
      answer:
        "Нет. Перехват торнадо смертельно опасен и выполняется подготовленными командами на специальной технике. Этот проект — образовательный и не призывает повторять подобное.",
    },
    {
      question: "С чего начать изучение охоты за штормами?",
      answer:
        "Начните с основ метеорологии, прогнозов NOAA и Storm Prediction Center, чтения радарных данных и наблюдения с безопасного расстояния под руководством опытных наставников.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о машинах TIV, метеорологии перехвата и безопасности.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}