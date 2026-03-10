'use client'

import Image from 'next/image'
import Link from 'next/link'

const CREAM = '#FFFDFA'

const SERVICES = [
  {
    title: 'Мероприятия',
    href: '/events',
    image: '/services/1b710e52-9890-4bfa-a322-fc0657ed61cf.jpg',
  },
  {
    title: 'СПА-центр',
    href: '/spa',
    image: '/services/07de6f32-c489-4914-9fb5-a97313228793.jpg',
  },
  {
    title: 'Экскурсии',
    href: '/excursions',
    image: '/services/efbc5f26-add5-4147-85fb-c38e960385df.jpg',
  },
  {
    title: 'Тренажёрный зал',
    href: '/gym',
    image: '/services/2c036c38-47f6-465a-b48c-755820057aad.jpg',
  },
  {
    title: 'Room service',
    href: '/room-service',
    image: '/services/87a0f61d-ed9b-4b14-9620-b1d627fbb8e5.jpg',
  },
  {
    title: 'Консьерж-сервис',
    href: '/concierge',
    image: '/services/ae410f40-fdd2-4463-ab1b-0b2dcba45c4c.jpg',
  },
  {
    title: 'Трансфер',
    href: '/transfer',
    image: '/services/c18ba22f-d78c-46a8-a794-ba55d5fdd464.jpg',
  },
  {
    title: 'Конференц-центр',
    href: '/conference',
    image: '/services/e35b3d77-9d93-422d-8479-693b46f841f3.jpg',
  },
  {
    title: 'Прокат',
    href: '/rental',
    image: '/services/8fbc24dd-acda-4ac0-b4ae-3ff12169baeb.jpg',
  },
  {
    title: 'Прачечная',
    href: '/laundry',
    image: '/services/c069bea2-9234-46be-b93b-258eb9fd7e61.jpg',
  },
]

function ServiceCard({
  title,
  href,
  image,
}: {
  title: string
  href: string
  image: string
}) {
  return (
    <Link
      href={href}
      className="group relative block h-[360px] w-full overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[72%] to-black/30"
        aria-hidden
      />
      <div
        className="absolute bottom-10 left-10 flex flex-col gap-6"
        style={{ color: CREAM }}
      >
        <p className="font-extended text-2xl leading-[1.2] md:text-[32px]">
          {title}
        </p>
      </div>
    </Link>
  )
}

export function ServicesBlock() {
  return (
    <section className="bg-background pb-16 md:pb-20">
      <div className="mx-auto max-w-[1550px] px-[15px]">
        {/* Section title */}
        <h2
          className="mt-[100px] mb-[100px] text-center font-extended text-[38px] font-normal uppercase leading-none tracking-[-0.04em] text-dark-drown md:mt-[200px] md:mb-[200px] md:text-[80px] lg:mt-[300px] lg:mb-[300px] lg:text-[100px]"
        >
          Услуги
        </h2>

        {/* Grid: 2 cols desktop, 1 col tablet/mobile */}
        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-1 lg:grid-cols-2 lg:gap-2.5">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.href}
              title={service.title}
              href={service.href}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
