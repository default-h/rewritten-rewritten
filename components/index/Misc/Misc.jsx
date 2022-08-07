import React from 'react';
import Image from 'next/image';

import styles from './Misc.module.scss';
import poll from '../../../public/assets/img/poll_title.webp';

import Carousel from './Carousel';

const Misc = () => {
  const currentTime = new Date();
  const withPmAm = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <section className={styles.container}>
      <div className={styles.right}>
        <div>
          <Image src={poll} alt='Latest news' width={200} height={50} />
        </div>
        <figure className={styles.box}>
          <h3 className={styles.title}>
            What&#39;s the highest level flowers you&#39;ve planted at your Toon
            Estate?
          </h3>
          <p className={styles.date}>Polls ends on: Today at {withPmAm}</p>
          <p className={styles.description}>
            Sorry! This poll has closed. Looks like you just missed it. Keep
            your eyes peeled on the Toontown Blog for the results!
          </p>
        </figure>
      </div>
      <div className={styles.left}>
        <Carousel />
      </div>
    </section>
  );
};

export default Misc;
