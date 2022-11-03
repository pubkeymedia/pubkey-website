import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import sample from 'lodash/sample';
import Image from 'next/image';

const quotes = [
  'You never know what worse luck your bad luck has saved you from',
  'Remember that sometimes not getting what you want is a wonderful stroke of luck',
  "I'm a greater believer in luck, and I find the harder I work the more I have of it",
  'I wandered everywhere, through cities and countries wide. And everywhere I went, the world was on my side',
];
const TryAgain: NextPage = () => {
  const quote = sample(quotes) as string;
  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="flex flex-col gap-y-12 items-center max-w-2xl text-3xl text-center">
        <Image alt="Dealer with card" height={500} width={500} src="/images/try-again.svg" />
        <p>&ldquo;{quote}&hellip;</p>
        <div>
          &hellip;Care to{' '}
          <Link className="underline" href="/">
            start
          </Link>{' '}
          fresh?&rdquo;
        </div>
      </div>
    </div>
  );
};

export default TryAgain;
