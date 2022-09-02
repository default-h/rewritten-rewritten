import React from 'react';
import Image from 'next/image';
import styles from './News.module.scss';
import latestnews from '../../../public/assets/img/newsblocks_title.webp';

const News = ({ recentNews }) => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <Image src={latestnews} alt='Latest news' width={200} height={50} />
      </div>

      <div className={styles['news-container']}>
        {recentNews.map((news, i) => (
          <figure id={`blogpost${i}`} key={i}>
            <a
              href={`https://www.toontownrewritten.com/news/item/${news.postId}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className={styles.box}>
                <div className={styles.image}>
                  <Image src={news.image} alt='' width={1200} height={675} />
                </div>
                <h3>{news.title}</h3>
                <p className={styles.info}>
                  {news.author} <br />
                  <i>{news.date}</i>
                </p>
              </div>
            </a>
          </figure>
        ))}
      </div>

      <a
        href='https://www.toontownrewritten.com/news'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.more}
      >
        VIEW MORE NEWS
      </a>
    </section>
  );
};

export default News;
