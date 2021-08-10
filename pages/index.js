import Head from 'next/head';
import Landing from '../components/Landing';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <h1>hey</h1>
    </div>
  )
}
