import { Oswald, Poppins } from "next/font/google";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
import "./globals.css";
const poppinFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const oswaldFont = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata = {
  title: "Zoomlex BD",
  description: "Zoomlex BD - Your one-stop solution for all your needs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswaldFont.variable} `}>
      <body><StackProvider app={stackClientApp}><StackTheme>
        <div className={poppinFont.className}>{children}</div>
      </StackTheme></StackProvider></body>
    </html>
  );
}
