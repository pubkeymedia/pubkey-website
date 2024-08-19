import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Ticker } from '../components/homepage/Ticker';
import compScreenImgBlk from '../../public/images/homepage/compyblk.png';
import compScreenImgBlue from '../../public/images/homepage/compyblue.png';
import type { GetStaticProps, NextPage } from 'next';
import { Meetup, type MeetupEvent } from '../lib/meetup';
import { formatIsoDate } from '../lib/strings';
import { sample } from 'lodash';
import clsx from 'clsx';
import bartender from '../../public/images/homepage/bartender.gif';

const Home: NextPage<Props> = ({ compScreen, events }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <NextSeo description="All those other cool websites wish they could be as sweet the Pubkey homepage. It tells the story of a friend who loves video poker and dive bars. His luck isn’t very good. Care to try yours?" />
      <Image alt="Bartender" className="max-w-5xl w-full" priority src={bartender} />
      <Ticker />
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 w-full">
        <Image
          alt="Feeling shitty!"
          className="w-full"
          src="/images/homepage/maybe-next-time.gif"
          height={512}
          width={512}
        />
        <Link
          className="min-h-[512px] w-full"
          href="/events"
          style={{ backgroundImage: `url(${compScreen?.src})`, backgroundSize: '100% 100%' }}
        >
          <div
            className={clsx(
              'flex flex-col font-dos gap-y-2 py-28 px-24 text-lg',
              compScreen?.textClass
            )}
          >
            {events.map((e) => (
              <p key={e.title}>
                {formatIsoDate(e.dateTime)} &raquo; {e.title}
              </p>
            ))}
            <p className="animate-blink">_</p>
          </div>
        </Link>
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
          unoptimized
        />
        <Image
          alt="The orange pill"
          className="w-full"
          src="/images/homepage/orange-pill.svg"
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
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

const compScreens = [
  { textClass: 'text-green-500', src: compScreenImgBlk.src },
  { textClass: 'text-blue-50', src: compScreenImgBlue.src },
] as const;
export const getStaticProps: GetStaticProps<Props> = async () => {
  const meetup = new Meetup();
  const events = await meetup.getEvents();

  const compScreen = sample(compScreens);
  if (!compScreen) throw new Error('No comp screen found');

  return {
    props: { compScreen, events },
    revalidate: 60 * 15, // 15 minutes
  };
};

type Props = { events: MeetupEvent[]; compScreen: (typeof compScreens)[number] };

export default Home;
