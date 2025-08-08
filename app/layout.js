import { Assistant } from "next/font/google";
import "./globals.css";
const assistanceFont = Assistant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
export const metadata = {
  title: "Zoomlex BD",
  description: "Zoomlex BD - Your one-stop solution for all your needs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={assistanceFont.className}>{children}</div>
      </body>
    </html>
  );
}
