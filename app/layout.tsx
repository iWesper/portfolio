import type { Metadata } from "next";
import { Days_One, Poppins } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Luís Costa",
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
      <body className={`${poppins_init.className} bg-[#FAF2E7]`}>
        <main className="min-h-screen flex flex-col justify-center items-center bg-white-100 overflow-hidden transition-all mx-auto sm:px-10 px-5">
          <Logo />
          {children}
        </main>
      </body>
    </html>
  );
}
