import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* @ts-expect-error */}
        <meta name="impact-site-verification" value="47925eeb-9cab-4b11-97d9-e900204998a3" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}