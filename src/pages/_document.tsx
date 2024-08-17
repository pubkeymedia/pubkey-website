import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* @ts-expect-error */}
        <meta name="impact-site-verification" value="47925eeb-9cab-4b11-97d9-e900204998a3" />
        <GoogleAnalytics gaId="G-ZN1D29K1JP" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
