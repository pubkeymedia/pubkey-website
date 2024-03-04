import React from 'react';
import { Meetup } from '../../lib/meetup';
import { formatIsoDate } from '../../lib/strings';
import '../../styles/globals.css';

const meetup = new Meetup();
const Meetups = async () => {
  const events = await meetup.getEvents();

  return (
    <div className="bg-slate-900 flex flex-col font-dos justify-center gap-y-6 text-green-500 text-2xl md:text-4xl h-screen p-8">
      {events.map((e) => (
        <p className="max-w-screen-lg leading-snug" key={e.title}>
          {formatIsoDate(e.dateTime)} &raquo; {e.title}
        </p>
      ))}
      <p className="animate-blink">_</p>
    </div>
  );
};

export const revalidate = 900; // refresh data every 15 minutes

export default Meetups;
