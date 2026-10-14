import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CustomCursor } from "@/components/CustomCursor";

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sgfoodpoint.vercel.app"),
  title: "S.G Food Point Kasur | Fresh & Delicious Fast Food (Open Till 2 AM)",
  description:
    "Order Kasur's top-rated crispy zinger burgers, stuffed chicken cheese shawarmas, lachha paratha rolls, loaded fries, and secret Kasuri sauces. FREE DELIVERY on orders over Rs. 500! Open late until 2:00 AM.",
  keywords: [
    "S.G Food Point",
    "Shah G Food Point",
    "Fast Food Kasur",
    "Zinger Burger Kasur",
    "Shawarma Kasur",
    "Free Food Delivery Kasur",
    "Qadirabad Road Kasur",
    "Paratha Roll Kasur",
    "Late Night Delivery Kasur",
  ],
  authors: [{ name: "S.G Food Point" }],
  creator: "S.G Food Point",
  publisher: "S.G Food Point",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://sgfoodpoint.vercel.app",
    siteName: "S.G Food Point Kasur",
    title: "S.G Food Point | Fresh & Delicious Fast Food (Open Till 2 AM)",
    description:
      "Crispy zinger burgers, chicken cheese shawarma, loaded fries & Kasuri sauces. Free delivery on Rs. 500+ across Kasur. Open late till 2:00 AM!",
    images: [
      {
        url: "/images/og-share.jpg",
        width: 1200,
        height: 630,
        alt: "S.G Food Point - Crispy Zinger Burgers & Fast Food in Kasur",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.G Food Point Kasur | Fresh & Delicious",
    description: "Crispy zinger burgers, cheese shawarmas & free delivery on Rs. 500+.",
    images: ["/images/og-share.jpg"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // LocalBusiness & Restaurant Schema
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    "name": "S.G Food Point",
    "alternateName": ["Shah G Food Point", "Sha G Food Point"],
    "image": "https://sgfoodpoint.vercel.app/images/og-share.jpg",
    "priceRange": "Rs. 150 - Rs. 1500",
    "servesCuisine": ["Fast Food", "Burgers", "Pakistani Street Food", "Shawarma"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Qadirabad Rd, near Sha G General Store, Basti Noor Shah Wali",
      "addressLocality": "Kasur",
      "addressRegion": "Punjab",
      "postalCode": "55050",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.1167",
      "longitude": "74.4361"
    },
    "telephone": "+923032967760",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "12:00",
        "closes": "02:00"
      }
    ],
    "hasMenu": "https://sgfoodpoint.vercel.app/#menu",
    "paymentAccepted": "Cash on Delivery",
    "currenciesAccepted": "PKR"
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="antialiased bg-brand-bg text-brand-cream min-h-screen selection:bg-brand-red selection:text-white">
        <CartProvider>
          <CustomCursor />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
