'use client'

import { useId } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const CREAM = '#FFFDFA'
const RED = '#9B0000'
const DARK_BROWN = '#1e1716'

const NAV_COL_1 = [
  { label: 'Номера', href: '/rooms' },
  { label: 'Услуги', href: '/services' },
  { label: 'Мероприятия', href: '/events', hasDropdown: true },
]
const NAV_COL_2_DESKTOP = [
  { label: 'СПА-центр', href: '/spa' },
  { label: 'Контакты', href: '/contact' },
  { label: 'Меню ресторана', href: '/restaurant' },
]
const NAV_COL_2_TABLET_MOBILE = [
  { label: 'Ресторан и бары', href: '/restaurant' },
  { label: 'СПА-центр', href: '/spa' },
  { label: 'Контакты', href: '/contact' },
]

function EmailIcon({ className }: { className?: string }) {
  const clipId = useId()
  return (
    <svg
      className={cn('size-4 shrink-0', className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clipId})`}>
        <rect
          x="0.25"
          y="2.25"
          width="15.5"
          height="11.5"
          rx="1.75"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <path
          d="M8.23054 8.03467C8.09231 8.13216 7.90769 8.13216 7.76946 8.03467L2.10242 4.03779C1.78341 3.81281 1.9426 3.31091 2.33296 3.31091L13.667 3.31091C14.0574 3.31091 14.2166 3.81281 13.8976 4.03779L8.23054 8.03467Z"
          fill={RED}
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  const clipId = useId()
  return (
    <svg
      className={cn('size-4 shrink-0', className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M2.67773 1.85156C3.04543 1.61115 3.53203 1.74236 3.72266 2.12402L3.72363 2.12695L5.25293 5.08008C5.39276 5.35004 5.34784 5.68227 5.15234 5.90527L5.05957 5.99316L3.68555 7.06348L3.51953 7.19238L3.61914 7.37891C4.17623 8.41679 4.70995 9.26515 5.74121 10.2822V10.2832C6.6941 11.2371 7.5251 11.8017 8.59668 12.377L8.78223 12.4766L8.91211 12.3105L9.99512 10.9189L9.99609 10.9199C10.2157 10.6423 10.603 10.5569 10.9014 10.7227L10.9082 10.7266L13.874 12.2568L13.877 12.2578C14.2582 12.4488 14.3877 12.9361 14.1465 13.3047L12.9082 15.1865V15.1875C12.666 15.5576 12.246 15.7734 11.8018 15.748C11.2727 15.7178 10.6037 15.6427 10.1533 15.5264H10.1543C8.0953 14.9887 5.94695 13.6989 4.12305 11.873C2.41303 10.1612 1.17377 8.16419 0.583008 6.22266L0.473633 5.83594C0.3867 5.49856 0.331862 5.04842 0.290039 4.61621L0.251953 4.19434C0.228888 3.76342 0.432151 3.34761 0.796875 3.1084L0.798828 3.10742L2.67871 1.85254L2.67773 1.85156Z"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <circle cx="10.6661" cy="2.96296" r="2.96296" fill={RED} />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={cn('size-5 shrink-0', className)} viewBox="0 0 20 20" fill="none">
      <path
        d="M5 15L15 5M15 5H8M15 5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function JetstyleLogo({ className }: { className?: string }) {
  const clipId = useId()
  return (
    <svg
      className={cn('block', className)}
      viewBox="0 0 138 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M10.8022 8.84819C9.34132 14.2759 7.8393 17 1.67691 17C1.12137 17 0.555541 16.959 0 16.9386L1.20367 12.4633C1.36828 12.5145 1.54317 12.5247 1.73864 12.5247C3.69332 12.5247 4.10483 10.6916 4.52663 9.14518L6.92369 0.307229H13.0964L10.8022 8.84819ZM26.6968 10.5482H18.4666L17.9111 12.5964H28.1989L27.0981 16.6928H10.6376L15.051 0.307229H27.3964L26.2853 4.40361H20.1229L19.5674 6.45181H27.7976L26.6968 10.5482ZM56.1302 4.40361C55.4615 3.41024 54.4636 3.37952 53.3217 3.37952C52.6838 3.37952 49.9473 3.47169 49.9473 4.49578C49.9473 6.01145 60.5951 5.78614 60.5951 10.3639C60.5951 15.7199 53.7126 17 49.6592 17C46.9021 17 41.6964 16.5904 41.6964 12.791C41.6964 12.3813 41.7582 11.9717 41.861 11.5723H48.0337C48.044 11.7464 48.1469 11.9819 48.2395 12.1151C48.7539 12.9241 49.8135 13.1084 50.7086 13.1084C51.7785 13.1084 54.1755 13.1084 54.1755 11.6235C54.1755 9.70843 43.4557 10.3434 43.4557 6.03193C43.4557 5.46867 43.6408 4.91566 43.8466 4.40361H39.464L36.1513 16.6928H29.9786L33.2913 4.40361H28.1371L29.2482 0.307229H45.7087L45.1017 2.55C47.3239 0.358434 51.2847 0 54.2373 0C56.5417 0 60.8112 0.276506 62.0457 2.67289L62.6835 0.307229H84.2879L85.7179 6.45181L90.4606 0.307229H96.6333L87.1479 12.5964L86.0471 16.6928H79.8745L80.9753 12.5964L80.9855 12.5861L78.5885 2.34518L78.0329 4.40361H72.8993L69.5867 16.6928H63.414L66.7267 4.40361H56.1302ZM105.182 16.6928H92.8371L97.2505 0.307229H103.423L100.111 12.5964H106.283L105.182 16.6928ZM122.27 10.5482H114.04L113.485 12.5964H123.772L122.672 16.6928H106.211L110.625 0.307229H122.97L121.859 4.40361H115.697L115.141 6.45181H123.371L122.27 10.5482Z"
          fill="white"
        />
        <path
          d="M125.12 0.307617H131.293L130.737 2.35581C130.737 2.35581 132.543 2.35581 133.75 2.35581C133.767 2.35581 133.785 2.35581 133.802 2.35581C133.802 2.34522 133.824 2.35581 133.824 2.35581C133.829 2.3377 133.831 2.32755 133.836 2.30944C133.879 2.15172 133.946 1.90556 133.946 1.90556L134.379 0.307617H137.466L136.91 2.35581C136.91 2.35581 135.07 2.35581 133.864 2.35581C133.802 2.34522 133.824 2.35581 133.824 2.35581C133.822 2.36329 133.82 2.37081 133.818 2.37839C133.651 3.00442 133.397 3.95729 133.397 3.95729L133.279 4.404H133.069H124.02L125.12 0.307617ZM128.063 8.50039H131.149L130.593 10.5486H124.421L125.522 6.4522H128.608L128.063 8.50039Z"
          fill="#ED1A3B"
        />
        <path
          d="M137.31 0.307617H140.397L139.841 2.35581H136.795C136.773 2.35211 136.762 2.35099 136.756 2.35111L136.755 2.35581L136.749 2.37839L136.681 2.35581H136.733C136.733 2.34522 136.755 2.35581 136.755 2.35581C136.755 2.35581 136.746 2.35132 136.756 2.35111L136.767 2.30944L136.877 1.90556L137.31 0.307617Z"
          fill="#ED1A3B"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="137.466" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={cn('size-4 shrink-0', className)} viewBox="0 0 16 16" fill="none">
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  href,
  label,
  className,
}: {
  href: string
  label: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1.5 py-2.5 transition-opacity hover:opacity-80',
        className
      )}
      style={{ color: CREAM }}
    >
      <span className="text-base leading-[1.2] md:text-lg">{label}</span>
      <ExternalLinkIcon />
    </a>
  )
}

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: DARK_BROWN }}
    >
      <div className="relative mx-auto w-full max-w-[1550px] px-[15px]">
        {/* Desktop layout: 4 columns */}
        <div className="relative hidden min-h-[700px] pb-[290px] pt-10 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          {/* Column 1: Contact info */}
          <div
            className="flex flex-col gap-6 pt-2"
            style={{ color: CREAM }}
          >
            <p className="whitespace-pre text-lg leading-[1.2]">
              {`Камчатский край, `}
              <br />
              г. Елизово, ул. Звёздная, 14
            </p>
            <a
              href="mailto:booking@okotan.ru"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ color: CREAM }}
            >
              <EmailIcon />
              <span className="text-lg leading-[1.2]">booking@okotan.ru</span>
            </a>
            <a
              href="tel:+79991234567"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ color: CREAM }}
            >
              <PhoneIcon />
              <span className="text-lg leading-[1.2]">+ 7 999 123 45 67</span>
            </a>
            <div className="flex items-center gap-3">
              <SocialLink href="https://wa.me/79991234567" label="WhatsApp" />
              <SocialLink href="https://t.me/okotan" label="Telegram" />
            </div>
          </div>

          {/* Column 2: Nav columns */}
          <div
            className="flex gap-20"
            style={{ color: CREAM }}
          >
            <nav className="flex flex-col gap-6">
              {NAV_COL_1.map((item) =>
                item.hasDropdown ? (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-2 py-2.5 transition-opacity hover:opacity-80">
                        <span className="text-lg leading-[1.2]">{item.label}</span>
                        <ChevronDownIcon />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-[180px]">
                      <DropdownMenuItem asChild>
                        <Link href={item.href}>Мероприятия</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg leading-[1.2] transition-opacity hover:opacity-80"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <nav className="flex flex-col gap-6">
              {NAV_COL_2_DESKTOP.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg leading-[1.2] transition-opacity hover:opacity-80"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Button */}
          <div>
            <Button
              asChild
              className="h-auto w-[245px] rounded-none px-6 py-4 pt-4 pb-[18px] text-lg font-normal"
              style={{ backgroundColor: RED, color: CREAM }}
            >
              <Link href="/rooms">Забронировать</Link>
            </Button>
          </div>

          {/* Column 4: Legal, Privacy, JETSTYLE */}
          <div className="flex max-w-[245px] flex-col items-start gap-6 text-right">
            <div
              className="w-[245px] text-xs leading-[1.2] opacity-40 text-start"
              style={{ color: CREAM }}
            >
              <p className="mb-0">Отель Окотан 2025 © Все права защищены</p>
              <p className="mb-0">Присвоена категория: «Пять звёзд»</p>
              <p className="mb-0">
                Реестровая запись: С412024005764 по свидетельству А010-00130-77/01216258
                от 24.11.2025
              </p>
              <p className="mb-0">ИНН: 4105022915 | ОГРН: 1024101223332</p>
            </div>
            <Link
              href="/privacy"
              className="text-xs underline transition-opacity hover:opacity-80"
              style={{ color: CREAM }}
            >
              Политика конфиденциальности
            </Link>
            <div>
              <a
                href="https://jetstyle.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[138px] transition-opacity hover:opacity-80"
              >
                <JetstyleLogo className="h-[17px] w-full" />
              </a>
              <a
                href="https://jetstyle.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 block text-xs leading-[1.2] transition-opacity hover:opacity-80 text-nowrap"
                style={{ color: CREAM }}
              >
                Проектирование, дизайн, продвижение
              </a>
            </div>
          </div>
        </div>

        {/* Tablet layout (768px) */}
        <div className="relative hidden min-h-[560px] pb-[140px] pt-6 md:block lg:hidden">
          {/* Top: Nav + Button */}
          <div className="absolute left-6 top-6 flex gap-1">
            <nav className="flex w-[177px] flex-col gap-4" style={{ color: CREAM }}>
              {NAV_COL_1.map((item) =>
                item.hasDropdown ? (
                  <div key={item.href} className="flex items-center gap-2">
                    <Link
                      href={item.href}
                      className="text-lg leading-[1.2] transition-opacity hover:opacity-80"
                    >
                      {item.label}
                    </Link>
                    <ChevronDownIcon />
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg leading-[1.2] transition-opacity hover:opacity-80"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <nav className="flex w-[177px] flex-col gap-4" style={{ color: CREAM }}>
              {NAV_COL_2_TABLET_MOBILE.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg leading-[1.2] transition-opacity hover:opacity-80"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="absolute right-0 top-6 w-fit">
            <Button
              asChild
              className="h-auto w-[247px] rounded-none px-6 py-4 pt-4 pb-[18px] text-lg font-normal"
              style={{ backgroundColor: RED, color: CREAM }}
            >
              <Link href="/rooms">Забронировать</Link>
            </Button>
          </div>

          {/* Middle: Contact */}
          <div
            className="absolute left-6 top-[218px] flex w-[268px] flex-col gap-4"
            style={{ color: CREAM }}
          >
            <p className="whitespace-pre-wrap text-lg leading-[1.2]">
              {`Камчатский край, `}
              <br />
              г. Елизово, ул. Звёздная, 14
            </p>
            <a
              href="mailto:booking@okotan.ru"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <EmailIcon />
              <span className="text-lg">booking@okotan.ru</span>
            </a>
            <a
              href="tel:+79991234567"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <PhoneIcon />
              <span className="text-lg">+ 7 999 123 45 67</span>
            </a>
            <div className="flex items-center gap-3">
              <SocialLink href="https://wa.me/79991234567" label="WhatsApp" />
              <SocialLink href="https://t.me/okotan" label="Telegram" />
            </div>
          </div>

          {/* Right: Legal, privacy, logo */}
          <div
            className="absolute bottom-[258px] right-0 w-[247px] text-start text-xs leading-[1.2] opacity-40"
            style={{ color: CREAM }}
          >
            <p className="mb-0">Отель Окотан 2025 © Все права защищены</p>
            <p className="mb-0">Присвоена категория: «Пять звёзд»</p>
            <p className="mb-0">
              Реестровая запись: С412024005764 по свидетельству А010-00130-77/01216258
              от 24.11.2025
            </p>
            <p className="mb-0">ИНН: 4105022915 | ОГРН: 1024101223332</p>
          </div>
          <Link
            href="/privacy"
            className="absolute bottom-[228px] right-[62px] text-xs underline transition-opacity hover:opacity-80"
            style={{ color: CREAM }}
          >
            Политика конфиденциальности
          </Link>
          <div className="absolute right-[15px] top-[360px]">
            <a
              href="https://jetstyle.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[138px] transition-opacity hover:opacity-80"
            >
              <JetstyleLogo className="h-[17px] w-full" />
            </a>
            <a
              href="https://jetstyle.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 block text-xs leading-[1.2] transition-opacity hover:opacity-80"
              style={{ color: CREAM }}
            >
              Проектирование, дизайн, продвижение
            </a>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-10 px-2.5 pt-4 pb-0 md:hidden">
          {/* Nav + Button */}
          <div className="flex flex-col gap-6 px-2">
            <div className="flex justify-between gap-10">
              <nav className="flex flex-col gap-0" style={{ color: CREAM }}>
                {NAV_COL_1.map((item) =>
                  item.hasDropdown ? (
                    <div
                      key={item.href}
                      className="flex items-center gap-2 py-2.5"
                    >
                      <Link
                        href={item.href}
                        className="text-base leading-[1.2] transition-opacity hover:opacity-80"
                      >
                        {item.label}
                      </Link>
                      <ChevronDownIcon />
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="py-2.5 text-base leading-[1.2] transition-opacity hover:opacity-80"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
              <nav className="flex flex-col gap-0" style={{ color: CREAM }}>
                {NAV_COL_2_TABLET_MOBILE.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-2.5 text-base leading-[1.2] transition-opacity hover:opacity-80"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <Button
              asChild
              className="h-auto w-full rounded-none px-6 py-3.5 pt-[14px] pb-[15px] text-base font-normal"
              style={{ backgroundColor: RED, color: CREAM }}
            >
              <Link href="/rooms">Забронировать</Link>
            </Button>

            <p className="text-base leading-[1.2]" style={{ color: CREAM }}>
              684005, Камчатский край, г. Елизово, ул. Звёздная, 14
            </p>
            <a
              href="mailto:booking@okotan.ru"
              className="flex items-center justify-start gap-2 transition-opacity hover:opacity-80"
              style={{ color: CREAM }}
            >
              <EmailIcon />
              <span className="text-base">booking@okotan.ru</span>
            </a>
            <a
              href="tel:+79991234567"
              className="flex items-center justify-start gap-2 transition-opacity hover:opacity-80"
              style={{ color: CREAM }}
            >
              <PhoneIcon />
              <span className="text-base">+ 7 999 123 45 67</span>
            </a>
            <div className="flex items-center justify-start gap-3">
              <SocialLink href="https://wa.me/79991234567" label="WhatsApp" />
              <SocialLink href="https://t.me/okotan" label="Telegram" />
            </div>
          </div>

          {/* Bottom block: watermark area, legal, logo */}
          <div className="relative h-[238px] w-full overflow-hidden">
            {/* Watermark - large ОКОТАН text (tablet+ only, mobile uses SVG) */}
            <div
              className="absolute bottom-[-5px] left-1/2 hidden h-[60px] w-[340px] -translate-x-1/2 font-[family-name:var(--font-extended)] text-[40px] font-normal leading-none opacity-20 md:block"
              style={{ color: CREAM }}
            >
              ОКОТАН
            </div>

            <div
              className="absolute left-[2%] top-0 w-[340px] text-xs leading-[1.2] opacity-40 md:left-1/2 md:-translate-x-[170px]"
              style={{ color: CREAM }}
            >
              <p className="mb-0">Отель Окотан 2025 © Все права защищены</p>
              <p className="mb-0">Присвоена категория: «Пять звёзд»</p>
              <p className="mb-0">
                Реестровая запись: С412024005764 по свидетельству А010-00130-77/01216258
                от 24.11.2025
              </p>
              <p className="mb-0">ИНН: 4105022915 | ОГРН: 1024101223332</p>
            </div>
            <Link
              href="/privacy"
              className="absolute bottom-[135px] left-2.5 text-xs underline transition-opacity hover:opacity-80"
              style={{ color: CREAM }}
            >
              Политика конфиденциальности
            </Link>
            <div className="absolute bottom-[67px] left-2.5">
              <a
                href="https://jetstyle.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[138px] transition-opacity hover:opacity-80"
              >
                <JetstyleLogo className="h-[17px] w-full" />
              </a>
              <a
                href="https://jetstyle.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-xs leading-[1.2] transition-opacity hover:opacity-80"
                style={{ color: CREAM }}
              >
                Проектирование, дизайн, продвижение
              </a>
            </div>
          </div>
        </div>

        {/* Watermark - Desktop & Tablet */}
        <div
          className="absolute bottom-[-26px] left-0 right-0 block w-full px-5 md:left-1/2 md:max-w-[1520px] md:-translate-x-1/2"
          aria-hidden
        >
          <svg
            className="h-auto w-full opacity-20"
            viewBox="0 0 1520 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M211.967 58.3624C195.019 41.892 172.104 33.6569 143.221 33.6569C114.338 33.6569 91.4225 41.892 74.4748 58.3624C56.3335 76.5037 47.2628 101.209 47.2628 132.479C47.2628 163.749 56.3335 188.455 74.4748 206.596C91.4225 223.066 114.338 231.301 143.221 231.301C172.104 231.301 195.019 223.066 211.967 206.596C230.108 188.455 239.179 163.749 239.179 132.479C239.179 101.209 230.108 76.5037 211.967 58.3624ZM248.846 36.5213C273.91 60.1527 286.441 92.1386 286.441 132.479C286.441 172.82 273.91 204.806 248.846 228.437C222.828 252.785 187.619 264.958 143.221 264.958C98.5836 264.958 63.3752 252.785 37.5954 228.437C12.5318 204.806 0 172.82 0 132.479C0 92.1386 12.5318 60.1527 37.5954 36.5213C63.3752 12.1738 98.5836 0 143.221 0C187.619 0 222.828 12.1738 248.846 36.5213Z"
              fill={CREAM}
            />
            <path
              d="M355.778 118.515L478.231 7.16103H533.371L401.966 123.886L539.1 257.797H480.738L355.778 129.615V257.797H311.379V7.16103H355.778V118.515Z"
              fill={CREAM}
            />
            <path
              d="M669.716 231.301C699.792 231.301 724.975 222.708 745.265 205.522C756.245 195.735 764.839 183.442 771.045 168.642C777.49 153.843 780.712 137.611 780.712 119.947C780.712 95.5998 774.745 76.0263 762.81 61.2268C748.01 42.8469 725.333 33.6569 694.78 33.6569C664.703 33.6569 639.52 42.2501 619.231 59.4366C608.251 69.2233 599.538 81.5164 593.093 96.3159C586.887 111.115 583.784 127.347 583.784 145.011C583.784 169.358 589.751 188.932 601.686 203.731C616.247 222.111 638.924 231.301 669.716 231.301ZM704.805 0C745.862 0 777.012 11.8157 798.257 35.4471C818.069 57.6463 827.975 85.3357 827.975 118.515C827.975 140.714 822.962 162.317 812.937 183.322C802.911 204.328 788.589 221.515 769.971 234.882C741.804 254.933 705.044 264.958 659.691 264.958C640.117 264.958 622.692 262.571 607.415 257.797C592.138 252.785 578.413 243.356 566.239 229.511C546.427 207.312 536.521 179.623 536.521 146.443C536.521 124.244 541.534 102.641 551.559 81.6358C561.584 60.6301 575.907 43.4436 594.525 30.0763C622.692 10.0254 659.452 0 704.805 0Z"
              fill={CREAM}
            />
            <path
              d="M910.917 41.534H817.824V7.16103H1048.05V41.534H955.315V257.797H910.917V41.534Z"
              fill={CREAM}
            />
            <path
              d="M1092 161.839H1189.39L1140.34 48.337L1092 161.839ZM1078.75 194.064L1050.83 257.797H1002.85L1117.07 7.16103H1164.33L1278.19 257.797H1230.21L1201.21 194.064H1078.75Z"
              fill={CREAM}
            />
            <path
              d="M1330.01 142.505V257.797H1285.62V7.16103H1330.01V108.132H1475.38V7.16103H1519.78V257.797H1475.38V142.505H1330.01Z"
              fill={CREAM}
            />
          </svg>
        </div>
      </div>
    </footer>
  )
}
