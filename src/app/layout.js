import "./globals.css";
import ClientLayout from "./clientLayout";


export const metadata = {
  title: "VitalLife - Authentic Himalayan Shilajit & Plant-Based Proteins",
  description:
    "Discover the power of authentic Himalayan Shilajit and premium plant-based proteins. Crafted by nature, backed by science.",
  keywords: [
    "Shilajit",
    "Himalayan Shilajit",
    "Plant-Based Protein",
    "VitalLife Supplements",
    "Natural Wellness",
  ],
  openGraph: {
    title: "VitalLife - Himalayan Shilajit & Plant-Based Proteins",
    description:
      "Discover the power of authentic Himalayan Shilajit and premium plant-based proteins. Crafted by nature, backed by science.",
    images: [
      {
        url: "/assets/image/og-banner.jpg", // optional
        width: 1200,
        height: 630,
        alt: "VitalLife - Natural Wellness Products",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
