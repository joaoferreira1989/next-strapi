import Layout from '@/components/layout/layout'
import EventItem from '@/components/event-item/event-item';
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
  return (
    <div>
      <Layout>
        <h1>Upcoming Events</h1>
        {events.data.lenght === 0 && <h3>No events to show</h3>}

        {events.data?.lenght != 0 && events.data.map(event => (
          <EventItem key={event.id} evt={event.attributes}></EventItem>
        ))}
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${API_URL}/api/events?populate=%2A&sort[0]=date&pagination[limit]=3`);
  const events = await response.json();

  return {
    props: {
      events
    },
    revalidate: 1
  }
}