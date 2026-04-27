import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "Tanvi Wholesale Collection | Premium Ethnic Wear Catalog",
  description:
    "Browse our premium wholesale collection of women's ethnic wear. Kurtis, suits, and designer sets available in bulk. Contact us on WhatsApp for wholesale pricing.",
  keywords: [
    "wholesale kurti",
    "ethnic wear wholesale",
    "women kurti set",
    "bulk order kurti",
    "wholesale suit set",
    "Indian ethnic wear",
    "wholesale dress material",
  ],
  openGraph: {
    title: "Tanvi Wholesale Collection",
    description: "Premium women's ethnic wear for retailers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
