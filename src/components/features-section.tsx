import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

// Данные по двум легендарным машинам для перехвата торнадо
const vehicles = [
  {
    id: "tiv1",
    name: "TIV 1",
    subtitle: "Первопроходец среди машин-перехватчиков",
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80",
    badge: "2004 год",
    description:
      "Первый Tornado Intercept Vehicle — переоборудованный пикап с тяжёлой бронёй. Доказал, что прямой перехват в принципе возможен, но был тяжёлым и недостаточно мощным.",
    pros: ["Доказал саму идею перехвата", "Усиленная стальная обшивка"],
    cons: ["Большой вес и слабый двигатель", "Проблемы с гидравликой и стабильностью"],
  },
  {
    id: "tiv2",
    name: "TIV 2",
    subtitle: "Эволюция: броня, аэродинамика, «когти»",
    image: "https://images.unsplash.com/photo-1561553543-e4c7b608b98d?w=800&q=80",
    badge: "2008 год",
    description:
      "Полностью переосмысленная машина: обтекаемый бронекорпус, гидравлические «когти» для сцепления с землёй и мощный дизель. Именно TIV 2 совершил рекордные сближения с торнадо.",
    pros: ["Аэродинамичный бронекорпус", "Гидравлические «когти» и стабилизация", "Мощный дизельный двигатель"],
    cons: ["Высокая сложность обслуживания"],
  },
]

// Сравнительная таблица характеристик
const specs = [
  { label: "Год выпуска", tiv1: "2004", tiv2: "2008" },
  { label: "Снаряжённая масса", tiv1: "~6 800 кг", tiv2: "~7 200 кг" },
  { label: "Макс. скорость", tiv1: "~145 км/ч", tiv2: "~170 км/ч" },
  { label: "Защита от ветра", tiv1: "до ~160 км/ч", tiv2: "до ~270 км/ч" },
  { label: "Стабилизация грунта", tiv1: "Опоры (базовые)", tiv2: "Гидравлические «когти»" },
  { label: "Успешные перехваты", tiv1: "Единичные", tiv2: "Множественные (EF3–EF4)" },
]

// Ключевые приборы охотника за штормами
const instruments = [
  { icon: "Wind", title: "Анемометры", desc: "Замер скорости и направления ветра в реальном времени." },
  { icon: "Gauge", title: "Барометры", desc: "Контроль падения давления — предвестника воронки." },
  { icon: "Radar", title: "Доплеровский радар (DOW)", desc: "Mobile radar показывает вращение внутри облака." },
  { icon: "Video", title: "Камеры высокого FPS", desc: "Съёмка обломков и динамики воронки для анализа." },
  { icon: "MapPin", title: "GPS-трекеры", desc: "Точное позиционирование машины и траектории шторма." },
  { icon: "Satellite", title: "Мобильные метеостанции", desc: "Сбор данных прямо в зоне перехвата." },
]

// Карточка машины с 3D-наклоном при движении мыши
function VehicleCard({ vehicle, index }: { vehicle: (typeof vehicles)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateY = ((x - rect.width / 2) / rect.width) * 12
    const rotateX = ((rect.height / 2 - y) / rect.height) * 12
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`)
  }

  const handleMouseLeave = () => setTransform("")

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.15s ease-out", animationDelay: `${index * 0.15}s` }}
      className="glow-border overflow-hidden slide-up will-change-transform"
    >
      <div className="relative h-56 overflow-hidden">
        <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <Badge className="absolute top-4 right-4 bg-red-500 text-white border-0">{vehicle.badge}</Badge>
        <div className="absolute bottom-4 left-4">
          <h3 className="font-orbitron text-3xl font-bold text-white">{vehicle.name}</h3>
          <p className="text-red-300 text-sm">{vehicle.subtitle}</p>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="sr-only">{vehicle.name}</CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">{vehicle.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {vehicle.pros.map((p) => (
          <div key={p} className="flex items-center gap-3 text-sm text-green-400">
            <Icon name="Check" size={16} />
            {p}
          </div>
        ))}
        {vehicle.cons.map((c) => (
          <div key={c} className="flex items-center gap-3 text-sm text-red-400">
            <Icon name="X" size={16} />
            {c}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Легендарные машины TIV</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tornado Intercept Vehicle — броневики, созданные, чтобы встретить торнадо лицом к лицу
          </p>
        </div>

        {/* Две карточки сравнения с 3D-наклоном */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {vehicles.map((v, i) => (
            <VehicleCard key={v.id} vehicle={v} index={i} />
          ))}
        </div>

        {/* Сравнительная таблица характеристик */}
        <div className="glow-border rounded-xl overflow-hidden mb-24 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 bg-red-500/10 font-orbitron text-white text-sm md:text-base">
            <div className="p-4 font-bold">Характеристика</div>
            <div className="p-4 font-bold text-center border-l border-red-500/20">TIV 1</div>
            <div className="p-4 font-bold text-center border-l border-red-500/20">TIV 2</div>
          </div>
          {specs.map((s, i) => (
            <div
              key={s.label}
              className={`grid grid-cols-3 text-sm md:text-base ${i % 2 === 0 ? "bg-black/40" : "bg-black/20"}`}
            >
              <div className="p-4 text-muted-foreground">{s.label}</div>
              <div className="p-4 text-center text-gray-300 border-l border-red-500/20">{s.tiv1}</div>
              <div className="p-4 text-center text-white font-semibold border-l border-red-500/20">{s.tiv2}</div>
            </div>
          ))}
        </div>

        {/* Блок «Как это работает» — ключевые приборы */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Как это работает</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Перехват ловят на ранней стадии — в «золотой час», пока воронка ещё формируется. Команда считывает данные и
            выбирает позицию по приборам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instruments.map((item, index) => (
            <Card
              key={item.title}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-500">
                    <Icon name={item.icon} fallback="Activity" size={32} />
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">{item.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
