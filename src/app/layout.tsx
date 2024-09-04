import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { calistoga, inter, poppins } from "@/utils/fonts";

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
      <html lang='en'>
         <body
            className={twMerge(
               inter.variable,
               calistoga.variable,
               poppins.variable,
               "bg-gray-900 text-white antialiased font-poppins"
            )}
         >
            {children}
         </body>
      </html>
   );
}
