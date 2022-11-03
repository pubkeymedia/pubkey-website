import { Form, Formik } from 'formik';
import Image from 'next/image';
import React from 'react';
import { Input } from '../components/StyledInput';

const Contact = () => {
  return (
    <div className="flex flex-col gap-y-16">
      <Image className="self-center" height={200} src="/images/slogan.svg" width={1024} />
      <div className="flex gap-x-48 w-full max-w-5xl">
        <Image height={400} src="/images/payphone.svg" width={200} />
        <div className="flex flex-col gap-y-8">
          <h2 className="uppercase text-xl">Contact</h2>
          <div>
            <p>85 Washington Pl.</p>
            <p>New York.</p>
            <p>NY 10011</p>
          </div>
          <p>(305) 773-4249</p>
          <div className="flex flex-col">
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
        <div className="flex flex-col gap-y-8 w-full md:w-64">
          <h2 className="uppercase text-xl">Hours</h2>
          <div className="flex flex-col flex-grow">
            <div className="flex justify-between">
              <p>Monday</p>
              <p>12pm-2am</p>
            </div>
            <div className="flex justify-between">
              <p>Tuesday</p>
              <p>12pm-2am</p>
            </div>
            <div className="flex justify-between">
              <p>Wednesday</p>
              <p>12pm-2am</p>
            </div>
            <div className="flex justify-between">
              <p>Thursday</p>
              <p>12pm-2am</p>
            </div>
            <div className="flex justify-between">
              <p>Friday</p>
              <p>12pm-2am</p>
            </div>
            <div className="flex justify-between">
              <p>Saturday</p>
              <p>12pm-2am</p>
            </div>
            <div className="flex justify-between">
              <p>Sunday</p>
              <p>12pm-2am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
