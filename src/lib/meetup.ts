import { GraphQLClient, gql } from 'graphql-request';

export class Meetup {
  private client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient('https://api.meetup.com/gql', {
      headers: {
        authorization: `Bearer ${process.env.MEETUP_API_KEY}`,
      },
    });
  }

  async getEvents(): Promise<MeetupEvent[]> {
    const query = gql`
      {
        groupByUrlname(urlname: "pubkey-meetups") {
          unifiedEvents {
            edges {
              node {
                dateTime
                eventUrl
                title
              }
            }
          }
        }
      }
    `;

    const data = await this.client.request<GetEventsRequestResult>(query);
    const { unifiedEvents } = data.groupByUrlname;
    return unifiedEvents.edges.map((edge) => edge.node);
  }
}
type GetEventsRequestResult = {
  groupByUrlname: {
    unifiedEvents: { edges: { node: MeetupEvent }[] };
  };
};
export type MeetupEvent = { dateTime: string; eventUrl: string; title: string };
