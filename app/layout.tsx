import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#002b36',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ladestack.in'),
  title: {
    default: 'LadeStack | AI & Tech Solutions',
    template: '%s | LadeStack',
  },
  description: 'Transform your skills with cutting-edge AI education and hands-on projects. Join our community of builders creating the future with AI.',
  keywords: ['AI solutions', 'tech education', 'web development', 'AI projects', 'machine learning', 'tech career', 'ladestack', 'AI builders', 'hands-on AI projects', 'tech learning'],
  authors: [{ name: 'LadeStack', url: 'https://ladestack.in' }],
  creator: 'LadeStack',
  publisher: 'LadeStack',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ladestack.in',
    siteName: 'LadeStack',
    title: 'LadeStack | AI & Tech Solutions',
    description: 'Transform your skills with cutting-edge AI education and hands-on projects. Join our community of builders creating the future with AI.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LadeStack - AI & Tech Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LadeStack | AI & Tech Solutions',
    description: 'Transform your skills with cutting-edge AI education and hands-on projects. Join our community of builders.',
    images: ['/images/og-image.png'],
    creator: '@girish_lade_',
    site: '@ladestack',
  },
  alternates: {
    canonical: 'https://ladestack.in',
    languages: {
      en: 'https://ladestack.in',
    },
  },
  category: 'technology',
  classification: 'AI Solutions, Tech Education, Web Development',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
