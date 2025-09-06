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
  title: "Berkay Dağıstanlı - Kickbox Antrenörü | Kişisel Antrenman",
  description: "Türkiye'nin en iyi kickbox antrenörü Berkay Dağıstanlı ile kişisel antrenman. Muaythai, Kempo ve Boks eğitimi. 15+ yıl deneyim, Avrupa şampiyonu.",
  keywords: "kickbox, muaythai, kempo, boks, antrenör, kişisel antrenman, İstanbul, Berkay Dağıstanlı, fitness, dövüş sporları",
  authors: [{ name: "Berkay Dağıstanlı" }],
  creator: "Berkay Dağıstanlı",
  publisher: "Berkay Dağıstanlı",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://berkayhoca.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Berkay Dağıstanlı - Kickbox Antrenörü",
    description: "Türkiye'nin en iyi kickbox antrenörü Berkay Dağıstanlı ile kişisel antrenman. Muaythai, Kempo ve Boks eğitimi.",
    url: 'https://berkayhoca.com',
    siteName: 'Berkay Dağıstanlı Kickbox',
    images: [
      {
        url: '/assets/2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Berkay Dağıstanlı - Kickbox Antrenörü',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Berkay Dağıstanlı - Kickbox Antrenörü",
    description: "Türkiye'nin en iyi kickbox antrenörü Berkay Dağıstanlı ile kişisel antrenman.",
    images: ['/assets/2.jpeg'],
    creator: '@turkzagor',
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="w-full">
      <head>
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icons/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icons/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        {children}
      </body>
    </html>
  );
}
