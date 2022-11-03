import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Header } from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen justify-between font-sans max-w-7xl mx-auto">
      {!hiddenHeaderPagePaths.includes(router.pathname) && <Header />}
      <main className="flex flex-col flex-grow">
        <Component {...pageProps} />
      </main>
      <footer className="py-8" />
    </div>
  );
}

const hiddenHeaderPagePaths = ['/', '/try-again'];

export default MyApp;
