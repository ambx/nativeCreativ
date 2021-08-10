import Head from 'next/head';
import Landing from '../components/Landing';
import Content1 from '../components/Content-1';
import Content2 from '../components/Content-2';
import Content3 from '../components/Content-3';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <Content1 />
      <Content2 />
      <Content3 />
      <Footer />
    </div>
  )
}
