import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    title: "Групповые курсы",
    description: "Уровни A1–C1 · 8 занятий/мес · от 6 000 ₽/мес",
    price: "от 6 000 ₽",
    direction: "top",
  },
  {
    title: "Индивидуально",
    description: "60 мин с преподавателем · гибкий график · очно и онлайн",
    price: "900–1 200 ₽/ч",
    direction: "right",
  },
  {
    title: "Подготовка к HSK",
    description: "HSK 1–6 · мини-группы · 2–3 мес до экзамена",
    price: "от 8 000 ₽/мес",
    direction: "left",
  },
  {
    title: "Поступление в вузы Китая",
    description: "Базовый — подбор вузов и стипендий · Полный — документы, собес, резюме",
    price: "15 000 – 35 000 ₽",
    direction: "bottom",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Услуги
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Курсы и программы UniChina</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>

        <div
          className={`mt-10 font-mono text-xs text-foreground/50 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "700ms" }}
        >
          + Разговорный клуб · Скидки студентам и корпоративным группам
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; price: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-1 font-sans text-2xl font-light text-foreground md:text-3xl">{service.title}</h3>
      <p className="mb-2 max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
      <span
        className="font-mono text-sm font-semibold"
        style={{ color: "hsl(43 90% 50%)" }}
      >
        {service.price}
      </span>
    </div>
  )
}
