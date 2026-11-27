import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import { BookingCartDrawer } from "@/components/booking-cart-drawer";
import { BookingCartProvider } from "@/components/booking-cart-provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LocationProvider } from "@/components/location-provider";
import { ZonePricingProvider } from "@/components/zone-pricing-provider";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes("localhost")
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "https://nammapros.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NammaPros | Verified Home Services & Appliance Repair in Chennai",
    template: "%s | NammaPros",
  },
  description:
    "Book verified home technicians across Chennai and Tamil Nadu. AC service & repair, washing machine repair, refrigerator service, TV installation, water tank cleaning, and more with upfront pricing & 30-day warranty.",
  keywords: [
    "home services chennai",
    "ac repair chennai",
    "ac service near me",
    "washing machine repair chennai",
    "refrigerator repair chennai",
    "tv wall mount installation chennai",
    "water tank cleaning chennai",
    "underground sump cleaning chennai",
    "geyser repair chennai",
    "ro water purifier service chennai",
    "microwave oven repair chennai",
    "kitchen chimney cleaning chennai",
    "mosquito net installation chennai",
    "sofa cleaning chennai",
    "verified technicians chennai",
    "appliance repair tamil nadu",
    "nammapros",
  ],
  authors: [{ name: "NammaPros", url: "https://nammapros.com" }],
  creator: "NammaPros",
  publisher: "NammaPros Home Services",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NammaPros | Verified Home Services & Appliance Repair in Chennai",
    description:
      "Pick, schedule, relax — verified home technicians at your doorstep in Chennai & Tamil Nadu with upfront pricing and 30-day service warranty.",
    siteName: "NammaPros",
    url: "https://nammapros.com",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/brand/hero-technicians-pair.webp",
        width: 1200,
        height: 630,
        alt: "NammaPros - Verified Home Services Technicians",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NammaPros | Verified Home Services in Chennai & Tamil Nadu",
    description:
      "Book verified home technicians across Chennai and Tamil Nadu with upfront pricing and a 30-day warranty.",
    images: ["/images/brand/hero-technicians-pair.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} pb-16 md:pb-0`}>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-54DPHM9S"
        />
        <Script
          id="gtm-datalayer"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-54DPHM9S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager */}
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1665651255199550');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1665651255199550&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <LocationProvider>
          <ZonePricingProvider>
          <BookingCartProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-[#1C1917] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
            >
              Skip to main content
            </a>
            <Header />
            <div id="main-content" tabIndex={-1} className="outline-none">
              {children}
            </div>
            <Footer />
            <BookingCartDrawer />
            <MobileBottomNav />
          </BookingCartProvider>
          </ZonePricingProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
