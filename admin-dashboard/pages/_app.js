import { Public_Sans } from "next/font/google";
import Head from "next/head";
import "@/styles/theme.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.scss";
import { ThemeProvider } from "@/context/ThemeProvider";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <Head>
        <title>Huduma DGSP — Admin Portal & Dashboard</title>
        <meta
          name="description"
          content="Admin Portal & Dashboard template for the Huduma Kenya Digital Government Services Platform (DGSP)."
        />
      </Head>
      <div className={publicSans.variable}>{getLayout(<Component {...pageProps} />)}</div>
    </ThemeProvider>
  );
}
