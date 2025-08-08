import "./globals.css";

export const metadata = {
  title: "Zoomlex BD",
  description: "Zoomlex BD - Your one-stop solution for all your needs!",
};

import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
 