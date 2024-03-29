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
            className="col-span-1"
            href="https://www.youtube.com/@Pubkeymediahouse"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="YouTube logo"
              height={72}
              width={72}
              src="/images/footer/8bit-youtube-logo.png"
            />
          </a>
          <a href="https://t.me/+HyDKC9gR7VsyNjc5" target="_blank" rel="noreferrer">
            <Image
              alt="Telegram logo"
              height={72}
              width={72}
              src="/images/footer/8bit-tg-logo.png"
            />
          </a>
          <a href="https://x.com/PubKey_NYC" target="_blank" rel="noreferrer">
            <Image
              alt="Xitter logo"
              height={72}
              width={72}
              src="/images/footer/8bit-xitter-logo.png"
            />
          </a>
          <a href="https://primal.net/p/npub1key55ax33gkl50uqemvl4khrtqrhzm7wzpc7fhseutt5ddkcwcrqgxlt3h" target="_blank" rel="noreferrer">
            <Image
              alt="Nostr logo"
              height={72}
              width={72}
              src="/images/footer/8bit-nostr-logo.png"
            />
          </a>
          <a href="https://www.instagram.com/pubkey.bar/" target="_blank" rel="noreferrer">
            <Image
              alt="Instagram logo"
              height={72}
              width={72}
              src="/images/footer/8bit-insta-logo.png"
            />
          </a>
          <a href="https://www.instagram.com/pubkey.tv/" target="_blank" rel="noreferrer">
            <Image
              alt="Custom Instagram logo"
              height={72}
              width={72}
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
