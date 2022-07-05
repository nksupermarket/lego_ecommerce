import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav';
import Header from '../components/Header';
import styles from '../styles/Home.module.scss';
import Recommended from '../components/Recommended';
import axios from 'axios';
import { ProductInterface } from '../types/interfaces';
import { RECOMMENDED } from '../utils/constants';

export async function getStaticProps() {
  try {
    const res = await axios.get('/api/recommended');

    if (res.status !== 200) {
      throw new Error('something changed on the logo home page');
    }

    const products = await res.data;

    return {
      props: {
        recommended: products,
      },
    };
  } catch (err) {
    if (err instanceof Error) console.log(err.message);

    if (axios.isAxiosError(err)) {
      switch (err.status) {
        case '500':
          console.log('something changed on lego homepage');
          break;
        default:
          console.log(err.response?.statusText);
      }
    }

    return {
      props: {
        recommended: RECOMMENDED,
      },
    };
  }
}

interface Props {
  recommended: ProductInterface[];
}
const Home: NextPage<Props> = ({ recommended }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <main className={styles.main}>
        <Recommended products={recommended} />
      </main>
    </div>
  );
};

export default Home;
