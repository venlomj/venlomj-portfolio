import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/shared/Navbar";
import { cn } from "@/lib/utils";

//Fonts
const PoppinsFont = localFont({
  src: "../public/assets/fonts/Poppins-Medium.ttf",
  variable: "--font-poppins",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@venlomj",
  description: "This the e-portfolio of Murrel Venlo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cn(PoppinsFont.variable)} ${
          inter.className
        } dark:bg-secondary-background`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
