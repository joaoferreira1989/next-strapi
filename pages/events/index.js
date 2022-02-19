import Layout from '@/components/layout/layout'
import EventItem from '@/components/event-item/event-item';
import { API_URL } from "@/config/index";

export default function EventsPage({ events }) {
  return (
    <div>
      <Layout>
        <h1>Events</h1>
        {events.lenght === 0 && <h3>No events to show</h3>}

        {events.map(event => (
          <EventItem key={event.id} evt={event}></EventItem>
        ))}
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${API_URL}/api/events`);
  const events = await response.json();

  return {
    props: {
      events
    },
    revalidate: 1
  }
}