import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';
import slogan from '../../public/images/contact/slogan.svg';
import payphone from '../../public/images/contact/payphone.svg';

const Contact: NextPage = () => {
  return (
    <div className="flex flex-col gap-y-16">
      <NextSeo title="Contact" />
      <Image alt="The Pubkey slogan" className="self-center" src={slogan} />
      <div className="flex flex-col md:flex-row gap-16 lg:gap-x-48 w-full max-w-5xl">
        <Image alt="A payphone" className="self-center" src={payphone} width={200} />
        <div className="flex flex-col gap-y-8">
          <h2 className="uppercase text-xl tracking-wider">Contact</h2>
          <div className="font-redaction text-lg tracking-wider">
            <p>85 Washington Pl.</p>
            <p>New York, NY 10011</p>
          </div>
          <div className="flex flex-col font-redaction text-lg tracking-wider gap-y-3">
            <div>
              <p className="text-sm">Call or Text</p>
              <a href="tel:3057734249">(305) 773-4249</a>
            </div>
            <p className="leading-6">
              Inquiries: <a href="mailto:events@port8333.io">events@port8333.io</a>
            </p>
            <a
              className="text-blue-600 visited:text-indigo-600 underline underline-offset-4"
              href="https://pubkey.tripleseat.com/party_request/30585"
              target="_blank"
              rel="noreferrer"
            >
              Book Your Event
            </a>
          </div>
          <div className="flex flex-col font-redaction text-lg tracking-wider">
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
        </div>
        <div className="flex flex-col gap-y-8 w-full md:w-96">
          <h2 className="uppercase text-xl tracking-wider">Hours</h2>
          <div className="flex flex-col flex-grow font-redaction text-lg italic tracking-widest">
            <div className="flex justify-between gap-x-2">
              <p>Sun. &mdash; Thurs.</p>
              <p>3pm&mdash;12am</p>
            </div>
            <div className="flex justify-between gap-x-2">
              <p>Fri. & Sat.</p>
              <p>3pm&mdash;2am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
