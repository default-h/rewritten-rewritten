import React from 'react';
import styles from './Message.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import bear from '../../public/assets/brand/bear_confused.webp';

const Message = () => {
  return (
    <section className={styles.container}>
      <figure className={styles.error}>
        <h1>Ouch.</h1>
        <p>
          Looks like you&#39;ve stumbled upon a missing or invalid page. The Cog
          over there says it&#39;s an <strong>&#34;Error 404&#34;</strong> --
          whatever that&#39;s supposed to mean.
        </p>
        <Link href='/'>
          <a>RETURN TO HOME</a>
        </Link>
      </figure>
      <div className={styles.image}>
        <Image src={bear} alt='A confused bear' />
      </div>
    </section>
  );
};

export default Message;
