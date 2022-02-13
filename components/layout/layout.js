import Head from "next/head"
import styles from "./layout.module.css"
import Header from "../header/header"
import Footer from "../footer/footer"

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <div className={styles.container}>
        {children}
      </div>

      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: 'DJ Events',
  description: 'Find latest DJ events',
  keywords: 'music, dj, edm, disc, jockey'
}
