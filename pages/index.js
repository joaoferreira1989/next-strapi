import Layout from '../components/layout/layout'
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
