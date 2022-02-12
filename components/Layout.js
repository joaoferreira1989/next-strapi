import Head from "next/head"
import styles from "./Layout.module.css"

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'DJ Events',
  description: 'Find latest DJ events',
  keywords: 'music, dj, edm, disc, jockey'
}
