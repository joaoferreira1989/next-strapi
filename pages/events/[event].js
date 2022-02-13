import Layout from "../../components/layout/layout"
import { useRouter } from 'next/router';

export default function EventPage() {
    const router = useRouter();

    return (
        <Layout>
            <div>Event {router.query.event} Page</div>
        </Layout>
    );
}
