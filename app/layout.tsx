import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nooralwarsan.ae'

export const viewport: Viewport = {
  themeColor: '#15803d',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Noor Al Warsan LLC | Premium Fresh Fruits & Vegetable Supplier Dubai, UAE',
    template: '%s | Noor Al Warsan LLC',
  },
  description:
    'Noor Al Warsan LLC is a premier fresh produce supplier in Dubai & the UAE. We deliver farm-fresh fruits, vegetables, and food provisions to supermarkets, hotels, restaurants, ship chandlers, and wholesale buyers with unbroken cold-chain logistics.',
  keywords: [
    'Noor Al Warsan LLC',
    'fresh produce supplier UAE',
    'fruit supplier UAE',
    'vegetable supplier Dubai',
    'wholesale fruits and vegetables UAE',
    'ship chandelling UAE',
    'ship food provisioning Dubai',
    'supermarket food supplier UAE',
    'hotel food supplies Dubai',
    'HORECA produce supply Dubai',
    'fresh food cold chain logistics Dubai',
    'food trading company Dubai',
    'fresh food import export UAE',
    'Al Warsan produce supply',
    'International City Dubai food wholesale',
  ],
  authors: [{ name: 'Noor Al Warsan LLC', url: siteUrl }],
  creator: 'Noor Al Warsan LLC',
  publisher: 'Noor Al Warsan LLC',
  applicationName: 'Noor Al Warsan LLC',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Noor Al Warsan LLC | Premium Fresh Fruits & Vegetables Supply in UAE',
    description:
      'Reliable fresh food supply solutions for supermarkets, ships, hotels, and wholesale buyers across Dubai and the UAE with global quality standards.',
    url: siteUrl,
    siteName: 'Noor Al Warsan LLC',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Noor Al Warsan LLC - Premium Fresh Fruits & Vegetables Supply UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noor Al Warsan LLC | Premium Fresh Produce Supplier Dubai, UAE',
    description:
      'Reliable fresh produce and food supply solutions for supermarkets, ships, and businesses across UAE.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai, United Arab Emirates',
    'geo.position': '25.172474;55.401256',
    ICBM: '25.172474, 55.401256',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Noor Al Warsan LLC',
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      description:
        'Premier UAE fresh produce supplier delivering high-grade fruits, vegetables, and food provisions to supermarkets, ships, and wholesale buyers.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+971529996746',
        contactType: 'sales',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic', 'Urdu', 'Hindi'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'England Cluster, Building Y18, Office No - 03',
        addressLocality: 'International City',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
    },
    {
      '@type': ['WholesaleStore', 'LocalBusiness'],
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Noor Al Warsan LLC',
      url: siteUrl,
      image: `${siteUrl}/og-image.jpg`,
      telephone: '+971529996746',
      email: 'Nooralwarsan999@gmail.com',
      priceRange: '$$',
      currenciesAccepted: 'AED',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'England Cluster, Building Y18, Office No - 03',
        addressLocality: 'International City',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.172474,
        longitude: 55.401256,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Noor Al Warsan LLC',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressContentEditableWarning suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
