import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLandingPage = landingPagePaths.includes(router.pathname);

  return (
    <div
      className={clsx(
        isLandingPage && 'bg-gray-300',
        'flex flex-col h-screen justify-between font-sans'
      )}
    >
      <NextSeo defaultTitle="Pubkey" titleTemplate="Pubkey | %s" />

      {!isLandingPage && <Header />}
      <main className="px-2 sm:px-8 xl:px-0 flex flex-col flex-grow py-8 max-w-7xl mx-auto w-full">
        <Component {...pageProps} />
      </main>
      {!isLandingPage && <Footer />}
    </div>
  );
}

const landingPagePaths = ['/', '/try-again'];

export default MyApp;
