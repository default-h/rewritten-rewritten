import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import Welcome from '../components/index/Welcome/Welcome';
import Hero from '../components/index/Hero/Hero';
import News from '../components/index/News/News';
import About from '../components/index/About/About';
import Misc from '../components/index/Misc/Misc';

// fetches the 5 most recent news posts to be passed as props
export const getServerSideProps = async () => {
  const res = await fetch('https://www.toontownrewritten.com/api/news/list');
  const data = await res.json();
  const recentNews = data.slice(0, 5);

  return {
    props: {
      recentNews,
    },
  };
};

export default function Home({ recentNews }) {
  return (
    <>
      <Head>
        <title>Home | Not Toontown Rewritten</title>
        <meta
          name='description'
          content='I can&#8217;t believe it&#8217;s not Toontown Rewritten!'
        />
        <meta name='theme-color' content='#0054ad' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Welcome />
        <Hero />
        <News recentNews={recentNews} />
        <About />
        <Misc />
      </main>
    </>
  );
}
