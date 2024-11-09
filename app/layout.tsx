import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header/header";
import { inter } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "F1 Racing Summmary",
  description:
    "A dashoard that shows a summary of formula one circuit and driver stats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased h-[100vh] flex flex-col`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
