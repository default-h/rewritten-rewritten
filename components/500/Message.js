import React from 'react';
import styles from './Message.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import bear from '../../public/assets/brand/bear_confused.webp';

const Message = () => {
  return (
    <section className={styles.container}>
      <figure className={styles.error}>
        <h1>Internal Service Error 500</h1>
        <p>
          The server encountered an internal error or misconfiguration and was
          unable to complete your request. Whoopsies.
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
