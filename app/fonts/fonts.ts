import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const williamsBold = localFont({
  src: "./Williams-Bold.woff2",
  weight: "400",
});
