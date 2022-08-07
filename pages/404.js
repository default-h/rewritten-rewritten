import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

import Message from '../components/404/Message';

export default function Home() {
  return (
    <>
      <Head>
        <title>Not Found | Not Toontown Rewritten</title>
        <meta
          name='description'
          content='Not sure what you&#39;re looking for, but it&#39;s not here!'
        />
        <meta name='theme-color' content='#ff0000' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Message />
      </main>
    </>
  );
}
