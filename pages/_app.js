import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>header</h1>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
