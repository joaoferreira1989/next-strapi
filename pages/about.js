import Layout from '../components/layout/layout'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <Layout title="About Dj Events">
      <h1>About page</h1>
      <Link href="/">Home</Link>
    </Layout>
  )
};