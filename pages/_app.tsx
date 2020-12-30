/*
  App father component for all the components.
  Here: Context, props, redux to be implemented.


  Author: Alejandro AS
  Date: 28-12-2020

*/



import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
