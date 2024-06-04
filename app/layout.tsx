import type { Metadata } from "next";
import { Days_One, Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luís Costa's Portfolio",
  description: "Me, if I was a website.",
};

const days_one_init = Days_One({
  subsets: ["latin"],
  weight: "400",
});

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins_init.className}`}>{children}</body>
    </html>
  );
}