import React, { useEffect, useState } from 'react';

import styles from '../Header/Header.module.scss';

import eyes from '../../../public/assets/img/logo_eyes.webp';

import Image from 'next/image';
import Link from 'next/link';
import hamburger from '../../../public/assets/icons/bars-solid.svg';

import play from '../../../public/assets/img/buttons_play.webp';

import Login from './Login';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(false);

  const [loginToggled, setLoginToggled] = useState(false);

  const showLogin = () => {
    setLoginToggled(!loginToggled);
  };

  const [registerToggled, setRegisterToggled] = useState(false);

  const showRegister = () => {
    setRegisterToggled(!registerToggled);
  };

  const [modalToggled, setModalToggled] = useState(true);

  const showModal = () => {
    setModalToggled(!modalToggled);
  };
  const forceRegister = () => {
    setLoginToggled((loginToggled = true));
    setModalToggled((modalToggled = false));
    setRegisterToggled((registerToggled = true));
  };

  const forceLogin = () => {
    setLoginToggled((loginToggled = true));
    setModalToggled((modalToggled = true));
    setRegisterToggled((registerToggled = false));
  };

  return (
    <header className={styles.navbar}>
      <Login
        showLogin={showLogin}
        loginToggled={loginToggled}
        showRegister={showRegister}
        registerToggled={registerToggled}
        showModal={showModal}
        modalToggled={modalToggled}
      />
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <Image src={eyes} alt='Toontown eyes icon' priority />
          </a>
        </Link>
      </div>
      <nav role='navigation'>
        <ul
          className={`${
            nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
          }`}
        >
          <li className={styles.news}>
            <a
              href='https://toontownrewritten.com/news'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Toontown news page - link opens in a new tab.'
            >
              news
            </a>
          </li>
          <li className={styles.sellbot}>
            <a
              href='https://www.toontownrewritten.com/taskforce/fieldoffices'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Sellbot Task Force page - link opens in a new tab.'
            >
              sellbot task force
            </a>
          </li>
          <li className={styles.signup}>
            <button
              onClick={() => {
                forceRegister();
                setMenu(!menu);
                setNav(!nav);
              }}
            >
              sign up
            </button>
          </li>
          <li className={styles.help}>
            <a
              href='https://toontownrewritten.com/help'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Help page - link opens in a new tab.'
            >
              help
            </a>
          </li>
        </ul>
        <div className={styles['play-container']}>
          <div className={styles.left}>
            <p className={styles.paragraph}>
              Returning Toon?
              <br />
              <button onClick={forceLogin}>CLICK TO LOGIN</button>
            </p>
          </div>
          <div className={styles.right}>
            <a
              href='https://www.toontownrewritten.com/play'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={play} alt='Play button' priority />
            </a>
          </div>
        </div>
      </nav>

      <button
        aria-label='menu'
        aria-expanded={menu ? 'true' : 'false'}
        className={`${
          menu
            ? [styles['menu-btn'], styles.open].join(' ')
            : [styles['menu-btn']]
        }`}
        onClick={() => {
          setMenu(!menu);
          setNav(!nav);
        }}
      >
        <div className={styles['menu-btn__burger']}></div>
      </button>
    </header>
  );
};

export default Header;
