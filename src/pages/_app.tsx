import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Header } from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen justify-between font-sans">
      {router.pathname !== '/' && <Header />}
      <main className="flex flex-col flex-grow">
        <Component {...pageProps} />
      </main>
      <footer className="py-8" />
    </div>
  );
}

export default MyApp;
