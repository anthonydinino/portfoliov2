import "../styles/globals.scss";
import "bulma/css/bulma.min.css";
import "bulma/sass/utilities/initial-variables.sass";
import Head from "next/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Anthony Dinino</title>
        <meta name="description" content="Anthony Dinino's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
