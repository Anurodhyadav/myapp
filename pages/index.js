import Head from 'next/head';
import NavBar from "../components/NavBar";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditi Enterprise</title>
        <meta name="description" content="used car vans bus suv home page"></meta>
      </Head>

      <NavBar/>
      <Header/>
    <h1>Home page</h1>
    </>
  )
}
