
import Footer from "../components/footer";
import Head from "next/head";

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Halcyon Art</title>
        <link rel="shortcut icon" href="/images/Logo.png" />
      </Head>
      <main>{children}</main>
    </>
  );
}
