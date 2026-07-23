import { Fragment } from "react";
import { Public_Sans } from "next/font/google";
import Head from "next/head";
import "@/styles/theme.scss";
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
  const { View = Fragment, Layout = Fragment, RouteGuard = Fragment } = Component;

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
        <div className={publicSans.variable}>
          <RouteGuard>
            <Layout>
              <View {...pageProps} />
            </Layout>
          </RouteGuard>
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}
