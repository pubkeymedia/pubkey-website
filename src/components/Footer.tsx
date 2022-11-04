import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-300 px-2 py-4 md:px-8 text-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:flex-row max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <Image alt="Pubkey logo" height={100} width={200} src="/images/logo.svg" />
          <p>&copy; {new Date().getFullYear()}</p>
          <p>The family you choose!</p>
        </div>
        <div className="flex flex-row justify-center md:justify-start md:mt-2 md:flex-col gap-x-3">
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
        <div className="flex flex-row justify-center md:justify-start md:mt-2 md:flex-col gap-x-4">
          <p>85 Washington Pl.</p>
          <p>New York,</p>
          <p>NY 10011</p>
        </div>
      </div>
    </footer>
  );
};
