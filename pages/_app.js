import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
