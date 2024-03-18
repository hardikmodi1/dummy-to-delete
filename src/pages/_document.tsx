import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          rel="icon"
          key="icon"
          type="image/png"
          href="/favicon.ico"
          sizes="16x16"
        /> */}
        <title>_document file</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
