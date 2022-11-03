import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Image
        alt="Bartender"
        className="mb-12 w-full"
        height={100}
        width={1024}
        src="/images/bartender.svg"
      />
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 w-full">
        <Image
          alt="Watch Pubkey advertisement"
          className="row-span-2 w-full"
          src="/images/watch-pubkey.svg"
          height={1024}
          width={512}
        />
        <Image
          alt="Loser needs another drink"
          className="w-full"
          src="/images/you-lose.svg"
          height={512}
          width={512}
        />
        <Image
          alt="The orange pill"
          className="w-full"
          src="/images/orange-pill.svg"
          height={512}
          width={512}
        />
        <Image
          alt="Feeling shitty!"
          className="w-full"
          src="/images/maybe-next-time.svg"
          height={512}
          width={512}
        />
        <div>
          <Image
            alt="Feeling Lucky"
            className="w-full"
            src="/images/feeling-lucky.svg"
            height={512}
            width={512}
          />
          <Image
            alt="Live Love advertisement"
            className="w-full"
            src="/images/live-love.svg"
            height={512}
            width={512}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
