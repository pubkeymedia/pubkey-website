import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <img height={500} width={800} src="https://placebeard.it/800/500" />
      <div className="flex flex-col">
        <p>Enter?</p>
        <Link href="/home">Yes</Link>
        <Link href="/try-again">No</Link>
      </div>
    </div>
  );
};

export default Home;
