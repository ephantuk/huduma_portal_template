import { Public_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.scss";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LocaleProvider } from "@/context/LocaleProvider";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Huduma Virtual Centre",
  description:
    "Huduma Virtual Centre (HVC) — the digital, omnichannel equivalent of a physical Huduma Centre, delivered on the DGSP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={publicSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
