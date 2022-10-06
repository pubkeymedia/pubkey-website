import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Header } from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      {router.pathname !== '/' && <Header />}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
