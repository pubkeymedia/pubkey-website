import type { GetStaticProps, NextPage } from 'next';
import { DateTime } from 'luxon';
import { type MeetupEvent, Meetup } from '../lib/meetup';

const EventsPage: NextPage<Props> = ({ events }) => {
  return (
    <div className="flex flex-col px-4 md:px-16 space-y-8 md:space-y-16">
      <h1 className="text-5xl">Upcoming Events</h1>
      <div className="flex flex-col gap-y-2">
        {events.map((event) => {
          return (
            <div
              className="flex flex-row gap-x-2 md:gap-x-4 text-lg md:text-xl tracking-wider"
              key={event.title}
            >
              <p>{formatIsoDate(event.dateTime)}</p>
              <p>&raquo;</p>
              <a className="text-orange-600" href={event.eventUrl} target="_blank" rel="noreferrer">
                {event.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const meetup = new Meetup();
  const events = await meetup.getEvents();

  return {
    props: { events },
    revalidate: 60 * 15, // 15 minutes
  };
};

const formatIsoDate = (isoDate: string) =>
  DateTime.fromISO(isoDate).toFormat('ccc dd LLL yyyy h:mm a');

type Props = { events: MeetupEvent[] };

export default EventsPage;
