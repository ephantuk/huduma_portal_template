import { Public_Sans } from "next/font/google";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.scss";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LocaleProvider } from "@/context/LocaleProvider";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <LocaleProvider>
        <Head>
          <title>Huduma Virtual Centre</title>
          <meta
            name="description"
            content="Huduma Virtual Centre (HVC) — the digital, omnichannel equivalent of a physical Huduma Centre, delivered on the DGSP."
          />
        </Head>
        <div className={publicSans.variable}>{getLayout(<Component {...pageProps} />)}</div>
      </LocaleProvider>
    </ThemeProvider>
  );
}
