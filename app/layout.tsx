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
  metadataBase: new URL('https://aibuilders.com'),
  title: {
    default: 'AI Builders | Learn AI & Machine Learning from Industry Experts',
    template: '%s | AI Builders',
  },
  description: 'Master AI and machine learning with hands-on projects. Join monthly classes taught by industry experts. Build real AI projects and accelerate your tech career.',
  keywords: ['AI courses', 'machine learning bootcamp', 'AI education', 'learn AI', 'ML courses', 'artificial intelligence training', 'AI classes', 'tech career', 'AI builders', 'hands-on AI projects'],
  authors: [{ name: 'AI Builders', url: 'https://aibuilders.com' }],
  creator: 'AI Builders',
  publisher: 'AI Builders',
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
    url: 'https://aibuilders.com',
    siteName: 'AI Builders',
    title: 'AI Builders | Learn AI & Machine Learning from Industry Experts',
    description: 'Master AI and machine learning with hands-on projects. Join monthly classes taught by industry experts. Build real AI projects and accelerate your tech career.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Builders - Learn AI from Industry Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Builders | Learn AI & Machine Learning from Industry Experts',
    description: 'Master AI and machine learning with hands-on projects. Join monthly classes taught by industry experts.',
    images: ['/images/og-image.png'],
    creator: '@nocheerleader',
    site: '@aibuilders',
  },
  alternates: {
    canonical: 'https://aibuilders.com',
    languages: {
      en: 'https://aibuilders.com',
    },
  },
  category: 'education',
  classification: 'AI Education, Machine Learning Courses, Tech Training',
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
