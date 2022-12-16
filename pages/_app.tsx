import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { appWithTranslation } from "next-i18next";
import { Lobster } from "@next/font/google";

// const lobster = Lobster({
//   weight: "400",
//   subsets: ["cyrillic"],
//   variable: "--font-lobster",
// });

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* <main className={`${lobster.variable} font-lobster`}> */}
      <Component {...pageProps} />
      {/* </main> */}
    </Layout>
  );
}

export default appWithTranslation(App);