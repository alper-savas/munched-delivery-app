import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { SessionProvider } from "next-auth/react";
// import App, { AppContext, AppInitialProps, AppProps } from "next/app";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
