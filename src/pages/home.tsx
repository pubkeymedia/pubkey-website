import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Ticker } from '../components/homepage/Ticker';

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <NextSeo description="All those other cool websites wish they could be as sweet the Pubkey homepage. It tells the story of a friend who loves video poker and dive bars. His luck isn’t very good. Care to try yours?" />
      <Image
        alt="Bartender"
        className="max-w-5xl w-full"
        height={2850}
        priority
        src="/images/homepage/bartender.gif"
        width={5100}
      />
      <Ticker />
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 w-full">
        <Image
          alt="Watch Pubkey advertisement"
          className="row-span-2 w-full"
          src="/images/homepage/watch-pubkey.svg"
          height={1024}
          width={512}
        />
        <Image
          alt="Loser needs another drink"
          className="w-full"
          src="/images/homepage/you-lose.gif"
          height={512}
          width={512}
        />
        <Image
          alt="The orange pill"
          className="w-full"
          src="/images/homepage/orange-pill.svg"
          height={512}
          width={512}
        />
        <Image
          alt="Feeling shitty!"
          className="w-full"
          src="/images/homepage/maybe-next-time.gif"
          height={512}
          width={512}
        />
        <div>
          <Link href="/shop">
            <Image
              alt="Feeling Lucky"
              className="w-full"
              src="/images/homepage/feeling-lucky.svg"
              height={512}
              width={512}
            />
          </Link>
          <Image
            alt="Live Love advertisement"
            className="w-full"
            src="/images/homepage/live-love.gif"
            height={512}
            width={512}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
