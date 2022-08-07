import React from 'react';

import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.header}>What&#39;s this game all about?</h2>
        <p>
          Toontown is a massively multiplayer online game built for kids, teens,
          and adults of all ages. Create your own Toon and join the never-ending
          battle against the &#34;Cogs&#34;, who want to turn Toontown into
          their latest business venture.
        </p>
        <p>
          The best part of all? <strong>Toontown is entirely FREE!</strong>
        </p>
      </div>
      <div className={styles.right}>
        <iframe
          className={styles.video}
          width='100%'
          height='100%'
          src='https://www.youtube-nocookie.com/embed/XRSFvwlEEP4'
          title='YouTube video player'
          frameBorder='0'
          loading='lazy'
        ></iframe>
      </div>
    </section>
  );
};

export default About;
