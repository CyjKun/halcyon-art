import Footer from "../components/footer";
import Head from "next/head";

import localFont from 'next/font/local'

const bostonFont = localFont({
  src: '../../public/fonts/BostonBlack.woff',
  display: 'swap',
  variable: '--font-bostonFont',
})
const bostonFontRegular = localFont({
  src: '../../public/fonts/BostonBlack.woff',
  display: 'swap',
  variable: '--font-bostonRegularFont',
})

const interFont = localFont({
  src: '../../public/fonts/Inter-ExtraLight-BETA.woff',
  display: 'swap',
  variable: '--font-interFont',
})

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Halcyon Art</title>
        <link rel="shortcut icon" href="/images/Logo.png" />
      </Head>
      <main className={`${bostonFont.variable} ${interFont.variable} ${bostonFontRegular.variable}`}>{children}</main>
    </>
  );
}
