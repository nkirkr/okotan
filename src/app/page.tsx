import { MarketingLayoutClient } from '@/components/layout/marketing-layout-client'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/json-ld'
import { HeroBlock } from '@/components/custom/hero-block'
import { Block2 } from '@/components/custom/block-2'
import { ServicesBlock } from '@/components/custom/services-block'
import { RestaurantBlock } from '@/components/custom/restaurant-block'
import { NumbersBlock } from '@/components/custom/numbers-block'
import { SpecialOffersBlock } from '@/components/custom/special-offers-block'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'My Site'

export default function HomePage() {
  return (
    <MarketingLayoutClient>
      <OrganizationJsonLd
        name={siteName}
        url={siteUrl}
        logo={`${siteUrl}/logo.png`}
      />
      <WebSiteJsonLd name={siteName} url={siteUrl} />

      <HeroBlock />
      <Block2 />
      <NumbersBlock />
      <RestaurantBlock />
      <SpecialOffersBlock />
      <ServicesBlock />
    </MarketingLayoutClient>
  )
}
