import Layout from "@/components/layout/layout";
import { API_URL } from "@/config/index";
import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import styles from '@/styles/Event.module.css';
import Image from "next/image";

export default function EventPage({ evt }) {
    const deleteEvent = (e) => {
        console.log(e, 'delete');
    };

    return (
        <Layout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/events/edit/${evt.id}`}>
                        <a>
                            <FaPencilAlt /> Edit Event
                        </a>
                    </Link>
                    <a hred="#" className={styles.delete} onClick={deleteEvent}>
                        <FaTimes /> Delete Event
                    </a>
                </div>

                <span>
                    {evt.date} at {evt.time}
                </span>
                <h1>{evt.name}</h1>

                {evt.image && (
                    <div className={styles.image}>
                        <Image
                            src={evt.image}
                            width={960}
                            height={600}
                        />
                    </div>
                )}

                <h3>Performers:</h3>
                <p>{evt.performers}</p>
                <h3>Description:</h3>
                <p>{evt.description}</p>
                <h3>Venue: {evt.venue}</h3>
                <p>{evt.address}</p>

                <Link href='/events'>
                    <a className={styles.back}>{'<'} Go Back</a>
                </Link>
            </div>
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

export async function getServerSideProps({ query: { slug } }) {
    const response = await fetch(`${API_URL}/api/events/${slug}`);
    const events = await response.json();

    return {
        props: {
            evt: events[0]
        }
    };
}