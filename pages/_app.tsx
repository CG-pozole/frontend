/*
  App father component for all the components.
  Here: Context, props, redux to be implemented.


  Author: Alejandro AS
  Date: 28-12-2020

*/



import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {

  return (
  <>
    <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no"/>
        <meta lang="es"/>
        <meta title="CGpozole estudio de animacion." content="El mejor estudio de animacion en Mexico City."/> 
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
