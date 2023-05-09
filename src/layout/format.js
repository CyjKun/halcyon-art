
import Footer from "../components/footer";
import Head from "next/head";

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Halcyon Art</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
