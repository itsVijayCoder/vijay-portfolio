import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { calistoga, inter, poppins } from "@/utils/fonts";
import { Header } from "@/sections/Header";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created by Tom Vijay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          poppins.variable,
          "bg-gray-900 font-poppins text-white antialiased",
        )}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
