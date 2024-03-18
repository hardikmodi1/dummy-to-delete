import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>_app file</title>
        <>
          <link
            rel="icon"
            key="icon1"
            type="image/png"
            href="/favicon.ico"
            sizes="16x16"
          />
          <link
            key="icon2"
            rel="icon"
            type="image/png"
            href="/favicon.ico"
            sizes="32x32"
          />
          <link key="icon3" rel="icon" href="/favicon.ico" />
          <link
            key="icon4"
            rel="apple-touch-icon"
            href="/favicon.ico"
            sizes="32x32"
          />
        </>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
