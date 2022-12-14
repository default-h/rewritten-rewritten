import styles from './Hero.module.scss';
import banner from '../../../public/assets/img/toontown_sm2.jpg';
import Image from 'next/image';
import play from '../../../public/assets/img/buttons_play_alt.webp';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <Image src={banner} alt='' width={1640} height={680} loading='lazy' />
      </div>
      <div className={styles['container-video']}>
        <video
          src='/assets/vid/bannervideo.webm'
          autoPlay
          loop
          muted
          loading='lazy'
        />
        <div className={styles.playbtn}>
          <a
            href='https://www.toontownrewritten.com/play'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Tootown Rewritten play page - link opens in a new tab'
          >
            <Image
              className={styles.playbtn1}
              src={play}
              priority
              alt='Play button - link opens in a new tab.'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
