import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onix StormShield - Florida's Premier Flood Protection Solutions | Storm & Hurricane Defense",
  description: "Onix StormShield provides innovative flood protection solutions across Florida. Expert storm barriers, hurricane protection, and flood control systems for homes and businesses. Get peace of mind with our proven technology and exceptional service.",
  keywords: [
    "flood protection Florida",
    "storm barriers",
    "hurricane protection",
    "flood control systems",
    "storm shutters",
    "flood prevention",
    "water damage protection",
    "storm season preparation",
    "flood barriers",
    "hurricane shutters",
    "storm protection",
    "flood defense",
    "water mitigation",
    "storm damage prevention",
    "flood safety",
    "hurricane defense",
    "storm preparation",
    "flood control",
    "water protection",
    "storm safety"
  ],
  authors: [{ name: "Onix StormShield" }],
  creator: "Onix StormShield",
  publisher: "Onix StormShield",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://onixstormshield.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onixstormshield.com',
    siteName: 'Onix StormShield',
    title: 'Onix StormShield - Florida Flood Protection Experts',
    description: 'Professional flood protection solutions for Florida homes and businesses. Storm barriers, hurricane protection, and flood control systems with exceptional service.',
    images: [
      {
        url: '/assets/image1.jpg',
        width: 1200,
        height: 630,
        alt: 'Onix StormShield - Professional Flood Protection Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onix StormShield - Florida Flood Protection Experts',
    description: 'Professional flood protection solutions for Florida homes and businesses. Storm barriers, hurricane protection, and flood control systems.',
    images: ['/assets/image1.jpg'],
    creator: '@onixstormshield',
    site: '@onixstormshield',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Home & Garden',
  classification: 'Business',
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Florida',
    'geo.position': '27.6648;-81.5158',
    'ICBM': '27.6648, -81.5158',
    'DC.title': 'Onix StormShield - Florida Flood Protection Solutions',
    'DC.description': 'Professional flood protection solutions for Florida homes and businesses',
    'DC.subject': 'flood protection, storm barriers, hurricane protection, flood control',
    'DC.creator': 'Onix StormShield',
    'DC.publisher': 'Onix StormShield',
    'DC.date.created': '2024',
    'DC.date.modified': '2024',
    'DC.language': 'en',
    'DC.coverage': 'Florida, United States',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://onixstormshield.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="alternate icon" href="/logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        {children}
      </body>
    </html>
  );
}
