import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-300 px-2 py-4 md:px-8 text-xl">
      <div className="flex flex-col md:flex-row gap-y-6 gap-x-8 md:gap-x-16 md:justify-between max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:items-start md:flex-shrink">
          <Image alt="Pubkey logo" height={100} width={200} src="/images/logo.svg" />
          <p>&copy; {new Date().getFullYear()}</p>
          <p>The family you choose!</p>
        </div>
        <div className="grid grid-rows-1 grid-cols-6 gap-x-4 items-center self-center max-w-sm lg:max-w-lg">
          <a
            className="col-span-2"
            href="https://www.youtube.com/@Pubkeymediahouse"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="YouTube logo"
              height={310}
              width={620}
              src="/images/footer/8bit-yt-logo.png"
            />
          </a>
          <a href="https://t.me/+HyDKC9gR7VsyNjc5" target="_blank" rel="noreferrer">
            <Image
              alt="Telegram logo"
              height={4096}
              width={4096}
              src="/images/footer/8bit-tg-logo.png"
            />
          </a>
          <a href="https://twitter.com/PubKey_NYC" target="_blank" rel="noreferrer">
            <Image
              alt="Twitter logo"
              height={400}
              width={400}
              src="/images/footer/8bit-twitter-logo.png"
            />
          </a>
          <a href="https://www.instagram.com/pubkey.bar/" target="_blank" rel="noreferrer">
            <Image
              alt="Instagram logo"
              height={260}
              width={260}
              src="/images/footer/8bit-insta-logo.png"
            />
          </a>
          <a href="https://www.instagram.com/pubkey.tv/" target="_blank" rel="noreferrer">
            <Image
              alt="Custom Instagram logo"
              height={514}
              width={612}
              src="/images/footer/8bit-insta-tv-logo.png"
            />
          </a>
        </div>
        <div className="flex flex-row justify-center md:justify-start md:flex-col gap-x-4">
          <p>85 Washington Pl.</p>
          <p>New York,</p>
          <p>NY 10011</p>
        </div>
      </div>
    </footer>
  );
};
