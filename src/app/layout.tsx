import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppProviders from "@/context/AppProviders";
import "@/styles/globals.css";

const plexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechLegal7",
  description: "Legal ops platform for modern teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plexSans.className}>
        <AppProviders>
          <Header />
          <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
