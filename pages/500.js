import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Message from '../components/500/Message';

export default function fivehundo() {
  return (
    <>
      <Head>
        <title>Error 500 | Not Toontown Rewritten</title>
        <meta
          name='description'
          content='Not sure what you&#39;re looking for, but it&#39;s not here!'
        />
        <meta name='theme-color' content='#ff0000' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Message />
      </main>
    </>
  );
}
