import type { AppProps } from 'next/app';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Header } from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen justify-between font-sans max-w-7xl mx-auto">
      {!hiddenHeaderPagePaths.includes(router.pathname) && <Header />}
      <main className="px-2 sm:px-8 lg:px-0 flex flex-col flex-grow py-8">
        <Component {...pageProps} />
      </main>
      {!hiddenHeaderPagePaths.includes(router.pathname) && (
        <footer className="grid grid-cols-1 md:grid-cols-3 gap-y-6 text-center md:flex-row bg-gray-300 p-8 text-xl">
          <div className="flex flex-col items-center md:items-start">
            <Image alt="Pubkey logo" height={100} width={200} src="/images/logo.svg" />
            <p>&copy; {new Date().getFullYear()}</p>
            <p>The family you choose!</p>
          </div>
          <div className="flex flex-col md:mt-2">
            <a
              className="hover:text-gray-700"
              href="https://t.me/+HyDKC9gR7VsyNjc5"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              className="hover:text-gray-700"
              href="https://twitter.com/PubKey_NYC"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
          <div className="flex flex-col md:mt-2">
            <p>85 Washington Pl</p>
            <p>New York</p>
            <p>NY 10011</p>
          </div>
        </footer>
      )}
    </div>
  );
}

const hiddenHeaderPagePaths = ['/', '/try-again'];

export default MyApp;
