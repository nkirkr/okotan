'use client'

import Image from 'next/image'
import Link from 'next/link'

const CREAM = '#FFFDFA'

export function RestaurantBlock() {
  return (
    <section className="flex flex-col">
      {/* Title block */}
      <div
        className="flex items-center justify-center px-4 py-[120px] md:py-[200px] lg:py-[300px] lg:pb-[260px]"
        style={{ backgroundColor: 'var(--dark-drown)' }}
      >
        <p
          className="font-[family-name:var(--font-extended)] text-[38px] font-normal uppercase leading-none tracking-[-0.04em] md:text-[80px] lg:text-[100px] lg:tracking-[-4px]"
          style={{ color: CREAM }}
        >
          ресторан
        </p>
      </div>

      {/* Image + content block */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: 'var(--dark-drown)' }}
      >
        <div className="relative h-[500px] w-full md:h-[700px] lg:h-[900px]">
          <Image
            src="/restaurant.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_11%,rgba(0,0,0,0.6)_62%)]"
            aria-hidden
          />

          {/* Content overlay */}
          <div className="absolute bottom-10 left-4 right-4 flex flex-col gap-6 md:bottom-10 md:left-10 md:right-10 md:gap-10 lg:bottom-[60px] lg:left-[60px] lg:right-[60px] lg:flex-row lg:items-end lg:justify-between lg:gap-0">
            <div className="flex max-w-[688px] flex-col gap-6 lg:max-w-[698px]">
              <p
                className="font-[family-name:var(--font-extended)] text-2xl leading-[1.2] md:text-3xl lg:text-[40px]"
                style={{ color: CREAM }}
              >
                «Камчатка | Гастрономия дикой природы»
              </p>
              <p
                className="text-lg leading-[1.2] md:text-xl lg:text-2xl"
                style={{ color: CREAM }}
              >
                Мы используем продукты, добытые в нетронутых уголках Камчатки: из
                глубин Тихого океана, вулканических долин и таёжных лесов
              </p>
            </div>

            <Link
              href="/restaurant/menu"
              className="flex w-[225px] shrink-0 flex-col gap-1 border p-4 transition-opacity hover:opacity-90"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: CREAM,
              }}
            >
              <span className="text-lg leading-[1.2]">Меню</span>
              <div className="flex justify-end">
                <Image
                  src="/doc.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="size-10"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
