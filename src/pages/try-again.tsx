import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import sample from 'lodash/sample';

const TryAgain: NextPage<Props> = ({ quote }) => {
  return (
    <div>
      <p>{quote}&hellip;</p>
      <p>
        &hellip;Care to{' '}
        <Link href="/">
          <a className="underline">start</a>
        </Link>{' '}
        fresh?
      </p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const quotes = ['hello', 'goodbye', 'yousay', 'yellow', 'submarine'];
  const quote = sample(quotes) as string;
  return { props: { quote } };
};

type Props = { quote: string };

export default TryAgain;
