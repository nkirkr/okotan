'use client'

import Image from 'next/image'
import Link from 'next/link'

const RED = '#9B0000'

const ROOMS = [
  {
    title: 'Джуниор Сюит с видом на внутренний двор',
    href: '/rooms/junior-courtyard',
    image: '/rooms/junior-courtyard.jpg',
    description: [
      'Площадь номера — около 30 м². Круглые панорамные окна открывают вид на тихий атриум с многофункциональным конференц-залом, чья форма яйца отсылает к римскому Пантеону. Номер оснащён двумя односпальными кроватями (90×200 см, single), которые при желании легко объединяются в удобную двуспальную (180×200 см, king size). Стены и пол облицованы широкими дубовыми панелями, а ванная зона отделана травертином и частично скрыта за матовым стеклом. Четырёхметровый сводчатый потолок и большие круглые окна визуально расширяют пространство и наполняют его естественным светом.',
      'Особенности: в отдельных номерах вместо душевой кабины предусмотрена ванна, также есть возможность объединения с соседним номером.',
      'Джуниор-сюит с видом на внутренний двор идеально подходит для спокойного отдыха и комфортного размещения до трёх гостей.',
    ],
  },
  {
    title: 'Джуниор Сюит с видом на вулканы',
    href: '/rooms/junior-volcano',
    image: '/rooms/junior-volcano.jpg',
    description: [
      'Площадь номера — около 30 м². Круглые панорамные окна открывают вид на строгие силуэты вулканов. В номере — две односпальные кровати (90×200 см, single), которые легко трансформируются в удобную двуспальную (180×200 см, king size). Интерьер выдержан в спокойной природной палитре: дубовые панели на стенах и полу гармонируют с отделкой ванной комнаты из травертина. Круглые окна диаметром до четырёх метров и четырёхметровый сводчатый потолок визуально расширяют пространство, наполняя его светом и воздухом.',
      'Особенности: в отдельных номерах вместо душевой кабины предусмотрена ванна, также есть возможность объединения с соседним номером.',
      'Джуниор-сюит с видом на вулкан идеально подходит для комфортного размещения до трёх гостей.',
    ],
  },
  {
    title: 'Делюкс Сюит с видом на вулканы',
    href: '/rooms/deluxe-volcano',
    image: '/rooms/deluxe-volcano.jpg',
    description: [
      'Просторный номер площадью около 60 м² с круглыми панорамными окнами, из которых открывается вид на вулканы. Продуманная планировка включает двуспальную кровать super king size (190×200 см), раскладывающийся мягкий диван, отдельную рабочую зону с эргономичным столом и креслом, а также просторную ванную комнату с ванной и душем. Стены и пол облицованы широкими дубовыми панелями, а ванная зона отделана травертином и частично скрыта за матовым стеклом. Четырёхметровый сводчатый потолок и круглые окна диаметром до четырёх метров визуально расширяют пространство, делая панорамный вид из окна главным акцентом интерьера.',
      'Особенности: продуманная планировка обеспечивает гармоничное сочетание зон отдыха и работы.',
      'В делюкс-сюит с видом на вулкан могут с комфортом разместиться до трёх гостей.',
    ],
  },
  {
    title: 'Люкс с видом на вулканы',
    href: '/rooms/lux-volcano',
    image: '/rooms/lux-volcano.jpg',
    description: [
      'Просторный дизайнерский люкс площадью 65 м² — это две изолированные комнаты с круглыми окнами и захватывающим видом на вулканы. В спальне — двуспальная кровать king size (180×200 см), в гостиной — удобный раскладывающийся диван. Интерьер выдержан в духе минимализма: чёткая геометрия форм и натуральные фактурные материалы. Стены и пол облицованы широкими дубовыми панелями, а ванная зона отделана травертином и частично скрыта за матовым стеклом. Четырёхметровый сводчатый потолок визуально расширяет пространство, а панорамный вид раскрывается в круглых окнах, создающих эффект смотровой площадки на краю света.',
      'Особенности: две изолированные зоны — спальня и гостиная — позволяют легко переключаться между режимами: от уединённого отдыха до душевного общения.',
      'В люксе с видом на вулкан могут с комфортом разместиться до четырёх гостей.',
    ],
  },
]

function RoomCard({
  title,
  href,
  image,
  description,
}: {
  title: string
  href: string
  image: string
  description: string[]
}) {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Circular image - adaptive, fills column width */}
      <div className="relative w-full max-w-[755px] aspect-square overflow-hidden rounded-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </div>

      {/* Content - centered, adaptive padding */}
      <div className="flex w-full max-w-[500px] flex-col items-center gap-6 px-4 pb-10 md:gap-10 md:px-8 md:pb-10 lg:px-12 lg:pb-[100px]">
        <div className="flex w-full max-w-[500px] flex-col gap-4 md:gap-6">
          <p
            className="font-extended text-2xl leading-none text-dark-drown md:text-[40px] md:leading-[1.2]"
          >
            {title}
          </p>
          <div className="flex flex-col gap-2 text-base leading-[1.2] text-dark-drown md:gap-4 md:text-lg">
            {description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <Link
          href={href}
          className="text-base font-normal underline underline-offset-2 transition-opacity hover:opacity-80 md:text-lg"
          style={{ color: RED }}
        >
          Подробнее
        </Link>
      </div>
    </div>
  )
}

export function NumbersBlock() {
  return (
    <section className="bg-beige">
      <div className="mx-auto max-w-[1550px] px-[15px]">
        {/* Section title with padding */}
        <h2
          className="py-[100px] text-center font-extended text-[38px] font-normal uppercase leading-none tracking-[-0.04em] text-dark-drown md:py-[200px] md:text-[80px] lg:py-[300px] lg:text-[100px]"
        >
          НОМЕРА
        </h2>

        {/* Grid: 2 cols desktop, 1 col tablet/mobile */}
        <div className="grid grid-cols-1 gap-6 pb-6 md:gap-10 md:pb-10 lg:grid-cols-2 lg:gap-2.5 lg:pb-0">
          {ROOMS.map((room) => (
            <RoomCard
              key={room.href}
              title={room.title}
              href={room.href}
              image={room.image}
              description={room.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
