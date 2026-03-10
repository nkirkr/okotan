'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const CREAM = '#FFFDFA'

export function Block2() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden md:min-h-[700px] lg:min-h-[800px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/block2.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        />
      </div>

      {/* Content - centered */}
      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 py-16 md:min-h-[700px] md:py-20 lg:min-h-[800px]">
        <div className="mx-auto flex w-full max-w-[1550px] flex-col items-center gap-10 px-[15px] md:gap-14 lg:gap-20">
          {/* Text block */}
          <div
            className="max-w-full text-center md:max-w-[663px] lg:max-w-[min(90vw,800px)]"
            style={{ color: CREAM }}
          >
            <p className="text-base leading-[1.2] md:text-xl lg:text-2xl">
              «О» — архитектурный образ аэровокзала, «Котан» — «жилище» на языке
              айнов.
            </p>
            <p className="mt-6 text-base leading-[1.2] md:text-xl lg:text-2xl md:mt-8">
              Архитектура и интерьеры отеля «ОКОТАН» вдохновлены суровой красотой
              Камчатки и разработаны в партнёрстве с бюро итальянского
              архитектора-минималиста Клаудио Сильвестрина. Мы создаём честное,
              ясное пространство, где каждый элемент — функционален, продуман и
              служит вашему спокойствию.
            </p>
          </div>

          {/* Booking form */}
          <div className="flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">
            {/* Fields - mobile: stacked, tablet: dates row + divider + guests, desktop: all in row */}
            <div className="flex w-full max-w-[423px] flex-col gap-4 md:max-w-[500px] md:gap-6 lg:max-w-none lg:flex-row lg:items-end lg:justify-center lg:gap-16">
              {/* Dates row on tablet, inline on desktop */}
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12 lg:contents">
                {/* Заезд */}
                <div className="flex flex-col gap-1 md:gap-2">
                  <p className="text-xs md:text-lg" style={{ color: CREAM }}>
                    Заезд
                  </p>
                  <p
                    className="font-[family-name:var(--font-extended)] text-lg md:text-3xl"
                    style={{ color: CREAM }}
                  >
                    16.04.25
                  </p>
                </div>

                {/* Выезд */}
                <div className="flex flex-col gap-1 md:gap-2">
                  <p className="text-xs md:text-lg" style={{ color: CREAM }}>
                    Выезд
                  </p>
                  <p
                    className="font-[family-name:var(--font-extended)] text-lg md:text-3xl"
                    style={{ color: CREAM }}
                  >
                    26.04.25
                  </p>
                </div>
              </div>

              {/* Divider - tablet only */}
              <div
                className="h-px w-full shrink-0 md:block lg:hidden"
                style={{ backgroundColor: 'rgba(255, 253, 250, 0.3)' }}
              />

              {/* Гости */}
              <div className="flex flex-col gap-1 md:gap-2">
                <p className="text-xs md:text-lg" style={{ color: CREAM }}>
                  Гости
                </p>
                <p
                  className="font-[family-name:var(--font-extended)] text-lg md:text-3xl"
                  style={{ color: CREAM }}
                >
                  2 взрослых, 0 детей
                </p>
              </div>
            </div>

            {/* Button */}
            <Button
              asChild
              className="rounded-none border-2 border-[#FFFDFA] bg-transparent px-6 pt-4 pb-[18px] text-base font-normal hover:bg-white/10 md:text-lg"
              style={{ color: CREAM }}
            >
              <Link href="/rooms">Подобрать номер</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
