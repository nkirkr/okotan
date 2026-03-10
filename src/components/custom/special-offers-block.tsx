'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-fade'

const CREAM = '#FFFDFA'

const OFFERS = [
  {
    title: 'Раннее бронирование',
    description:
      'Забронируйте номер за 2 месяца до даты заезда и получите скидку 15%.',
    image: '/offers/slide1.jpg',
    href: '/offers/early-booking',
  },
  {
    title: 'Спецпредложение на номер «Стандарт»',
    description:
      'Скидка 15% при бронировании от 3 ночей. Действует до конца сезона.',
    image: '/hero-bg.png',
    href: '/offers/standard',
  },
  {
    title: 'СПА-пакет «Расслабление»',
    description:
      'Проживание + массаж + доступ в СПА-зону. Специальная цена для пар.',
    image: '/services/07de6f32-c489-4914-9fb5-a97313228793.jpg',
    href: '/offers/spa-package',
  },
  {
    title: 'Длинный отпуск',
    description: 'Специальные условия при проживании от 7 ночей.',
    image: '/block2.jpg',
    href: '/offers/long-stay',
  },
  {
    title: 'Бизнес-пакет',
    description: 'Номер + завтрак + трансфер в аэропорт.',
    image: '/restaurant.jpg',
    href: '/offers/business',
  },
  {
    title: 'Романтический уикенд',
    description: 'Для пар: номер с видом + ужин в ресторане.',
    image: '/hero-bg.png',
    href: '/offers/romantic',
  },
]

function NavControls({
  swiper,
  activeIndex,
  variant,
}: {
  swiper: SwiperType | null
  activeIndex: number
  variant: 'desktop' | 'tablet' | 'mobile'
}) {
  const isMobile = variant === 'mobile'

  return (
    <div
      className={`flex w-full items-center ${isMobile ? 'gap-2' : 'gap-4'}`}
    >
      <button
        type="button"
        onClick={() => swiper?.slidePrev()}
        className="flex size-12 shrink-0 items-center justify-center rounded-full border transition-opacity hover:opacity-70"
        style={{ borderColor: CREAM, color: CREAM }}
        aria-label="Предыдущее"
      >
        <ChevronLeft className="size-6" />
      </button>
      <div
        className="h-px min-w-0 flex-1"
        style={{ backgroundColor: CREAM }}
      />
      <span
        className={`shrink-0 text-center ${isMobile ? 'text-base' : 'text-lg'}`}
        style={{ color: CREAM }}
      >
        {activeIndex + 1}/{OFFERS.length}
      </span>
      <div
        className="h-px min-w-0 flex-1"
        style={{ backgroundColor: CREAM }}
      />
      <button
        type="button"
        onClick={() => swiper?.slideNext()}
        className="flex size-12 shrink-0 items-center justify-center rounded-full border transition-opacity hover:opacity-70"
        style={{ borderColor: CREAM, color: CREAM }}
        aria-label="Следующее"
      >
        <ChevronRight className="size-6" />
      </button>
    </div>
  )
}

export function SpecialOffersBlock() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1550px] px-[15px]">
        {/* Section title */}
        <h2
          className="mt-[100px] mb-[100px] text-center font-extended text-[38px] font-normal uppercase leading-none tracking-[-0.04em] text-dark-drown md:mt-[200px] md:mb-[200px] md:text-[80px] lg:mt-[300px] lg:mb-[300px] lg:text-[100px]"
        >
          Специальные предложения
        </h2>

        {/* Swiper — fade effect, custom nav */}
        <div className="relative overflow-hidden">
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            modules={[EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={500}
            loop
            allowTouchMove
            className="!overflow-visible"
          >
            {OFFERS.map((offer, index) => (
              <SwiperSlide key={index}>
                {/* Desktop: image left, content right */}
                <div className="hidden lg:flex lg:h-[700px] lg:items-stretch">
                  <div className="relative h-[700px] min-w-0 flex-[0_0_48%] overflow-hidden">
                    <Image
                      src={offer.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="725px"
                    />
                    <div className="absolute inset-0 bg-black/20" aria-hidden />
                  </div>
                  <div className="relative flex flex-1 flex-col justify-between overflow-hidden bg-dark-drown px-14 py-14">
                    <div className="flex flex-col gap-[60px]">
                      <div className="flex flex-col gap-6">
                        <h3
                          className="font-extended text-[40px] leading-[1.2]"
                          style={{ color: CREAM }}
                        >
                          {offer.title}
                        </h3>
                        <p
                          className="text-2xl leading-[1.2]"
                          style={{ color: CREAM }}
                        >
                          {offer.description}
                        </p>
                      </div>
                      <Link
                        href={offer.href}
                        className="inline-flex w-fit items-center justify-center border px-6 py-4 text-lg transition-opacity hover:opacity-90"
                        style={{
                          borderColor: CREAM,
                          color: CREAM,
                        }}
                      >
                        Узнать подробнее
                      </Link>
                    </div>
                    <NavControls swiper={swiper} activeIndex={activeIndex} variant="desktop" />
                  </div>
                </div>

                {/* Tablet: content top, image bottom */}
                <div className="hidden flex-col md:flex lg:hidden">
                  <div className="relative flex flex-col justify-between bg-dark-drown px-10 py-10 md:h-[499px]">
                    <div className="flex flex-col gap-10">
                      <div className="flex flex-col gap-6">
                        <h3
                          className="font-extended text-[40px] leading-[1.2]"
                          style={{ color: CREAM }}
                        >
                          {offer.title}
                        </h3>
                        <p
                          className="text-2xl leading-[1.2]"
                          style={{ color: CREAM }}
                        >
                          {offer.description}
                        </p>
                      </div>
                      <Link
                        href={offer.href}
                        className="inline-flex w-fit items-center justify-center border px-6 py-4 text-lg transition-opacity hover:opacity-90"
                        style={{
                          borderColor: CREAM,
                          color: CREAM,
                        }}
                      >
                        Узнать подробнее
                      </Link>
                    </div>
                    <NavControls swiper={swiper} activeIndex={activeIndex} variant="tablet" />
                  </div>
                  <div className="relative h-[525px] w-full overflow-hidden">
                    <Image
                      src={offer.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/20" aria-hidden />
                  </div>
                </div>

                {/* Mobile: image top, content bottom */}
                <div className="flex flex-col md:hidden">
                  <div className="relative h-[340px] w-full overflow-hidden">
                    <Image
                      src={offer.image}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/20" aria-hidden />
                  </div>
                  <div
                    className="flex min-h-[338px] flex-col justify-between bg-dark-drown p-6"
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <h3
                          className="font-extended text-2xl leading-none"
                          style={{ color: CREAM }}
                        >
                          {offer.title}
                        </h3>
                        <p
                          className="text-base leading-[1.2]"
                          style={{ color: CREAM }}
                        >
                          {offer.description}
                        </p>
                      </div>
                      <Link
                        href={offer.href}
                        className="inline-flex w-fit items-center justify-center border px-6 py-3.5 text-base transition-opacity hover:opacity-90"
                        style={{
                          borderColor: CREAM,
                          color: CREAM,
                        }}
                      >
                        Узнать подробнее
                      </Link>
                    </div>
                    <NavControls swiper={swiper} activeIndex={activeIndex} variant="mobile" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
