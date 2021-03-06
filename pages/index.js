import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';
import Card from '../components/card';
import { appData } from '../data.js';
import Layout from '../components/layout';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Head>
        <title>Apps by Mark Tiddy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className={styles.title}>Apps by Mark Tiddy</h1>
        <p>
          Here you can find privacy policies and information for apps that I've
          created.{' '}
          <a href="https://marktiddy.co.uk" className={styles.weblink}>
            Visit my Website
          </a>{' '}
          to find out more about me.
        </p>
        <div className={styles.cardContainer}>
          {appData.map((app, idx) => {
            return <Card key={idx} app={app} />;
          })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
