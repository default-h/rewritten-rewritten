import React, { useState } from 'react';
import styles from './Welcome.module.scss';
import group from '../../../public/assets/brand/group_1.webp';
import exit from '../../../public/assets/icons/xmark-solid.svg';

import Image from 'next/image';

const Welcome = () => {
  const [welcome, setWelcome] = useState(true);
  const showWelcome = () => {
    setWelcome(!welcome);
  };
  return (
    <dialog className={`${welcome ? styles['container'] : styles.hide}`}>
      <figure className={styles.box}>
        <section className={styles.left}>
          <h1>
            Welcome to <span>Toontown!</span>
          </h1>
          <iframe
            className={styles.video}
            width='100%'
            height='100%'
            src='https://www.youtube-nocookie.com/embed/XRSFvwlEEP4'
            title='YouTube video player'
            frameBorder='0'
          ></iframe>
          <div>
            <h2>What&#39;s this game all about?</h2>{' '}
            <p className={styles.paragraph}>
              Toontown is a massively multiplayer online game built for kids,
              teens, and adults of all ages. Create your own Toon and join the
              never-ending battle against the &#34;Cogs&#34;, who want to turn
              Toontown into their latest business venture.
            </p>
            <br />
            <p className={styles.paragraph}>
              The best part of all? <strong>Toontown is entirely FREE!</strong>
            </p>
          </div>
        </section>
        <section className={styles.right}>
          <div>
            <h2 className={styles.heading}>Where am I?</h2>
            <p className={styles.paragraph}>
              Before exploring this website, you should know this is a redesign
              of{' '}
              <a
                href='https://www.toontownrewritten.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Toontown Rewritten,</span>
              </a>{' '}
              a fan-made revival of Disney&#39;s Toontown Online. This website
              was purely developed for my own understanding of how to structure
              and build a website from the ground up while also making it
              visually appealing!
            </p>
          </div>

          <div>
            <h2 className={styles.heading}>Just one more thing.</h2>
            <p className={styles.paragraph}>
              By visiting this website, you understand that this is NOT
              connected or affiliated with Toontown Rewritten. This was made
              just for fun by a fan!{' '}
              <a
                href='https://github.com/default-h/rewritten-rewritten'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Click here to go to the GitHub repository.</span>
              </a>
            </p>
            <div>
              <Image
                src={group}
                width={320}
                height={246}
                alt='Group of Toons'
                priority
              />
            </div>
            <div className={styles.buttons}>
              <button className={styles['yellow-btn']} onClick={showWelcome}>
                SOUNDS GOOD!
              </button>

              <a
                href='https://github.com/default-h/rewritten-rewritten'
                className={styles['red-btn']}
                aria-label='Repo page - link redirects you to GitHub repository'
              >
                I want to leave.
              </a>
            </div>
          </div>
        </section>
      </figure>
    </dialog>
  );
};

export default Welcome;
