import { Public_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.scss";
import { ThemeProvider } from "@/context/ThemeProvider";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Huduma DGSP — Admin Portal & Dashboard",
  description:
    "Admin Portal & Dashboard template for the Huduma Kenya Digital Government Services Platform (DGSP).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={publicSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
