import { Poppins } from "next/font/google";
import "./globals.css";
const poppinFont = Poppins({
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
        <div className={poppinFont.className}>{children}</div>
      </body>
    </html>
  );
}
