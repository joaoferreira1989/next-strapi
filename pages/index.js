import Layout from '../components/Layout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <Layout>
        <Link href="/about">About</Link>
      </Layout>
    </div>
  )
}
