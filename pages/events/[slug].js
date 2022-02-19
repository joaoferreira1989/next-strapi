import Layout from "@/components/layout/layout"
import { useRouter } from 'next/router';
import { API_URL } from "@/config/index";

export default function EventPage({ event }) {
    const router = useRouter();

    return (
        <Layout>
            <div>Event {event.name} Page</div>
        </Layout>
    );
}

// export async function getStaticPaths() {
//     const res = await fetch(`${API_URL}/api/events`);
//     const events = await res.json();
//     const paths = events.map(event => ({
//         params: { slug: event.slug }
//     }));

//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params: { slug }}) {
//     const response = await fetch(`${API_URL}/api/events/${slug}`);
//     const events = await response.json();
//     const event = events[0];

//     return {
//         props: {
//             event
//         }
//     };
// }

export async function getServerSideProps({ query: { slug }}) {
    const response = await fetch(`${API_URL}/api/events/${slug}`);
    const events = await response.json();

    return {
        props: {
            event: events[0]
        }
    };
}