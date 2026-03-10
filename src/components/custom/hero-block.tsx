'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const NAV_LINKS = [
  { label: 'Номера', href: '/rooms' },
  { label: 'Услуги', href: '/services' },
  { label: 'Мероприятия', href: '/events', hasDropdown: true },
  { label: 'СПА-центр', href: '/spa' },
  { label: 'Контакты', href: '/contact' },
  { label: 'Меню ресторана', href: '/restaurant' },
]

const CREAM = '#FFFDFA'
const RED = '#9B0000'

export function HeroBlock() {
  const [cookieAccepted, setCookieAccepted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ minHeight: '100dvh' }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-[1550px] items-center justify-between px-[15px] py-5 md:py-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-okotan.svg"
            alt="Окотан"
            width={136}
            height={41}
            className="h-8 w-auto md:h-10"
          />
        </Link>

        {/* Desktop/Tablet nav */}
        <nav className="hidden max-w-[788px] flex-1 items-center justify-between lg:flex">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <DropdownMenu key={link.href}>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex shrink-0 items-center gap-2 whitespace-nowrap py-2.5 text-[#FFFDFA] transition-opacity hover:opacity-80"
                    style={{ color: CREAM, fontSize: 18 }}
                  >
                    {link.label}
                    <ChevronDownIcon className="size-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[180px]">
                  <DropdownMenuItem asChild>
                    <Link href={link.href}>Все мероприятия</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`${link.href}/upcoming`}>Ближайшие</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="shrink-0 whitespace-nowrap py-2.5 text-[18px] transition-opacity hover:opacity-80"
                style={{ color: CREAM }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right block: region (desktop only) + button */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center gap-2 rounded px-4 py-3.5 text-[18px] transition-opacity hover:opacity-80 md:rounded-[4px] md:px-4 md:py-4"
                style={{ color: CREAM }}
              >
                <span className="flex size-4 shrink-0 flex-col overflow-hidden rounded-full">
                  <span className="h-[2px] w-full shrink-0 bg-[#FFFDFA]" />
                  <span className="h-[2px] w-full shrink-0 bg-[#1500FF]" />
                  <span className="h-[2px] w-full shrink-0 bg-[#FF0000]" />
                </span>
                RU
                <ChevronDownIcon className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>RU</DropdownMenuItem>
                <DropdownMenuItem>EN</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button
            asChild
            className="order-1 hidden rounded-none px-6 py-4 text-[18px] font-normal md:order-2 md:inline-flex md:h-auto md:w-[230px] md:justify-center"
            style={{ backgroundColor: RED, color: CREAM }}
          >
            <Link href="/booking">Забронировать</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="order-2 flex size-10 items-center justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 lg:hidden"
                style={{ color: CREAM }}
                aria-label="Меню"
              >
                <MenuIcon className="size-6 md:h-[25px] md:w-10" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="mt-8 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 w-full"
                  style={{ backgroundColor: RED, color: CREAM }}
                >
                  <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                    Забронировать
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1550px] min-h-[calc(100dvh-80px)] flex-col justify-end px-[15px] pb-8 md:pb-12 lg:min-h-[calc(100dvh-100px)]">
        {/* Special offer - desktop/tablet: absolute per Figma (left 40px, top 459px) */}
        <div
          className="absolute left-[15px] top-[81px] z-20 hidden w-full max-w-[239px] flex-col gap-4 rounded-xl px-4 py-4 backdrop-blur-[3.5px] md:top-[139px] md:flex"
          style={{ backgroundColor: 'rgba(255, 253, 250, 0.1)' }}
        >
          <Image
            src="/special-offer-icon.svg"
            alt=""
            width={207}
            height={40}
            className="h-10 shrink-0 object-contain object-left"
          />
          <p className="text-[18px] leading-snug" style={{ color: CREAM }}>
            Спецпредложение на номер «Стандарт»
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
          {/* Center: title + subtitle */}
          <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-end">
            <div className="max-w-[90vw] md:max-w-[607px] lg:max-w-[1061px]">
              <p
                className="mb-4 max-w-[274px] text-[16px] leading-tight md:max-w-[607px] md:text-[18px] lg:max-w-[464px]"
                style={{ color: CREAM }}
              >
                Синтез комфорта и культурного кода Камчатки. 
                Находимся прямо в
                терминале аэропорта Елизово
              </p>
              {/* Mobile: SVG logo full width */}
              <div className="w-full md:hidden">
                <svg
                  width="340"
                  height="60"
                  viewBox="0 0 340 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-auto w-full"
                  aria-hidden
                >
                  <path d="M47.36 13.04C43.5733 9.36 38.4533 7.52 32 7.52C25.5467 7.52 20.4267 9.36 16.64 13.04C12.5867 17.0933 10.56 22.6133 10.56 29.6C10.56 36.5867 12.5867 42.1067 16.64 46.16C20.4267 49.84 25.5467 51.68 32 51.68C38.4533 51.68 43.5733 49.84 47.36 46.16C51.4133 42.1067 53.44 36.5867 53.44 29.6C53.44 22.6133 51.4133 17.0933 47.36 13.04ZM55.6 8.16C61.2 13.44 64 20.5867 64 29.6C64 38.6133 61.2 45.76 55.6 51.04C49.7867 56.48 41.92 59.2 32 59.2C22.0267 59.2 14.16 56.48 8.4 51.04C2.8 45.76 0 38.6133 0 29.6C0 20.5867 2.8 13.44 8.4 8.16C14.16 2.72 22.0267 0 32 0C41.92 0 49.7867 2.72 55.6 8.16Z" fill={CREAM} />
                  <path d="M79.4919 26.48L106.852 1.6H119.172L89.8119 27.68L120.452 57.6H107.412L79.4919 28.96V57.6H69.5719V1.6H79.4919V26.48Z" fill={CREAM} />
                  <path d="M149.636 51.68C156.356 51.68 161.982 49.76 166.516 45.92C168.969 43.7333 170.889 40.9867 172.276 37.68C173.716 34.3733 174.436 30.7467 174.436 26.8C174.436 21.36 173.102 16.9867 170.436 13.68C167.129 9.57333 162.062 7.52 155.236 7.52C148.516 7.52 142.889 9.44 138.356 13.28C135.902 15.4667 133.956 18.2133 132.516 21.52C131.129 24.8267 130.436 28.4533 130.436 32.4C130.436 37.84 131.769 42.2133 134.436 45.52C137.689 49.6267 142.756 51.68 149.636 51.68ZM157.476 0C166.649 0 173.609 2.64 178.356 7.92C182.782 12.88 184.996 19.0667 184.996 26.48C184.996 31.44 183.876 36.2667 181.636 40.96C179.396 45.6533 176.196 49.4933 172.036 52.48C165.742 56.96 157.529 59.2 147.396 59.2C143.022 59.2 139.129 58.6667 135.716 57.6C132.302 56.48 129.236 54.3733 126.516 51.28C122.089 46.32 119.876 40.1333 119.876 32.72C119.876 27.76 120.996 22.9333 123.236 18.24C125.476 13.5467 128.676 9.70667 132.836 6.72C139.129 2.24 147.342 0 157.476 0Z" fill={CREAM} />
                  <path d="M203.528 9.28H182.728V1.6H234.168V9.28H213.448V57.6H203.528V9.28Z" fill={CREAM} />
                  <path d="M243.988 36.16H265.747L254.788 10.8L243.988 36.16ZM241.027 43.36L234.788 57.6H224.068L249.588 1.6H260.147L285.587 57.6H274.867L268.388 43.36H241.027Z" fill={CREAM} />
                  <path d="M297.167 31.84V57.6H287.247V1.6H297.167V24.16H329.647V1.6H339.567V57.6H329.647V31.84H297.167Z" fill={CREAM} />
                </svg>
              </div>
              {/* Tablet+: text h1 */}
              <h1
                className="hidden font-[family-name:var(--font-extended)] font-normal uppercase tracking-[-0.06em] text-[72px] md:block md:text-[140px] lg:text-[180px]"
                style={{ color: CREAM, lineHeight: '95%' }}
              >
                окотан
              </h1>
            </div>

            {/* Weather widget - backdrop-blur 3px, rounded-16 per Figma, absolute top 93px on mobile */}
            <div className="absolute left-[15px] top-[93px] flex flex-col gap-1 rounded-2xl px-6 py-4 backdrop-blur-[3px] md:static md:left-auto md:top-auto">
              <p
                  className="text-[16px] md:text-[18px]"
                  style={{ color: CREAM }}
                >
                  На Камчатке сейчас
              </p>
              <div className="flex items-center gap-6">
                <div className="rounded-lg px-3 py-1 backdrop-blur-[4px]">
                  <span
                    className="font-[family-name:var(--font-extended)] text-[28px] md:text-[40px]"
                    style={{ color: CREAM }}
                  >
                    11:46
                  </span>
                </div>
                <div className="rounded-lg px-3 py-1 backdrop-blur-[4px]">
                  <span
                    className="font-[family-name:var(--font-extended)] text-[28px] md:text-[40px]"
                    style={{ color: CREAM }}
                  >
                    +17 °
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special offer - mobile: absolute, horizontal layout */}
        <div
          className="absolute left-[15px] top-[205px] z-20 flex w-full max-w-[280px] items-center gap-2 rounded-xl px-3 py-3 backdrop-blur-[3.5px] md:hidden"
          style={{ backgroundColor: 'rgba(255, 253, 250, 0.1)' }}
        >
          <Image
            src="/special-offer-icon.svg"
            alt=""
            width={24}
            height={24}
            className="size-6 shrink-0 object-contain"
          />
          <p className="text-xs leading-[1.2]" style={{ color: CREAM }}>
            Спецпредложение на номер «Стандарт»
          </p>
        </div>

        {/* Cookie banner - absolute, tablet: left, desktop: right per Figma */}
        {!cookieAccepted && (
          <div className="absolute bottom-4 left-[15px] right-[15px] z-20 hidden md:block md:bottom-6 md:left-[15px] md:right-auto md:max-w-[550px] lg:bottom-[50px] lg:left-auto lg:right-10 lg:max-w-[438px]">
            <div
              className="flex w-full min-w-0 flex-col gap-4 p-6 shadow-lg md:flex-row md:items-end md:gap-4"
              style={{ backgroundColor: CREAM }}
            >
              <p
                className="min-w-0 flex-1 text-[16px] leading-normal md:text-[18px]"
                style={{ color: '#1E1716' }}
              >
                Для улучшения пользовательского опыта, мы используем{' '}
                <span className="underline">файлы cookie</span>
              </p>
              <Button
                onClick={() => setCookieAccepted(true)}
                className="shrink-0 self-start rounded-none px-6 py-3.5 text-[16px] font-normal md:self-auto"
                style={{ backgroundColor: RED, color: CREAM }}
              >
                Хорошо
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={cn('shrink-0', className)}
    >
      <path
        d="M3 6L8 11L13 6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  )
}
