import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';

import code from '../../../public/assets/img/E4Rr0cgXwAM4lfW.jpg';
import giveaway from '../../../public/assets/img/giveaway.webp';
import team from '../../../public/assets/img/SketchArtist_ad.jpg';
export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    easing: 'easeOut',
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles['image-container']}>
          <Image
            className={styles.image}
            src={code}
            alt='Jellybean outfit giveaway'
            layout='responsive'
          />
        </div>
        <a
          href='https://toontownrewritten.com/news/item/760/hopping-for-a-double-bean-days-giveaway'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.more}
        >
          <div className={styles['image-container']}>
            <Image
              className={styles.image}
              src={giveaway}
              layout='responsive'
              alt='We need YOU to sketch for BRAND ART!'
            />
          </div>
        </a>
        <div className={styles['image-container']}>
          <a
            href='https://cdn.toontownrewritten.com/applications/SketchArtist_App.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.more}
          >
            <Image
              className={styles.image}
              src={team}
              layout='responsive'
              alt='Use code DISCORD-DELIGHT'
            />
          </a>
        </div>
      </Slider>
    </div>
  );
}
