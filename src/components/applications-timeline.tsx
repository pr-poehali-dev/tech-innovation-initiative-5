import { Timeline } from "@/components/ui/timeline"

// Хронология известных перехватов торнадо командой TIV
export function ApplicationsTimeline() {
  const data = [
    {
      title: "Манчестер, Южная Дакота · 2003",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Один из самых известных ранних кейсов storm-chasing: команда зафиксировала разрушительное торнадо, буквально
            стёршее посёлок с лица земли. Эти кадры вошли в историю охоты за штормами.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Сила: F4 (по шкале Фудзиты)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Результат: уникальная съёмка полного цикла торнадо
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Перехват TIV 2 · 2009",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Звёздный час бронемашины TIV 2: прямое сближение с мощной воронкой. «Когти» вгрызлись в грунт, машина
            удержалась под ударом ветра, а камеры засняли стихию изнутри урагана.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Сила: EF3–EF4 (улучшенная шкала)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Результат: рекордное сближение и кадры внутри воронки
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Эль-Рино, Оклахома · 2013",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Самое широкое зарегистрированное торнадо в истории — до 4,2 км в поперечнике. Трагический день для
            сообщества охотников, который навсегда изменил подход к безопасности перехвата.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Сила: EF3, ширина — рекордные ~4,2 км
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Урок: дистанция и пути отхода важнее эффектных кадров
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 font-orbitron">Реальные миссии</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Хронология знаковых перехватов и встреч с торнадо — каждая миссия добавляла новые знания об охоте за
            стихией и о том, как выживать рядом с ней.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
