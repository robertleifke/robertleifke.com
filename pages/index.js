import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Heyo! My name is Robert Leifke. I am currently working on{' '}
        <a href="https://numoen.com/">Numoen</a>, a marketplace for <a href="https://www.paradigm.xyz/2021/08/power-perpetuals">power perpetuals</a> on Ethereum.</p>
        <p>
          My ultimate goal with Numoen is to build a unified, global marketplace for the world’s assets. 
          I think it would do our society a lot of <a href="https://youtu.be/FGkP63hJivQ?si=VuAaAHECTZj2jik4">good</a>.</p>
        <p>
          For now, I'm on a leave of absence from the University of Michigan where I'm majoring in Mathematics. My 
          research interests are in <a href="https://arxiv.org/pdf/2308.08066.pdf">Constant Function Market Makers</a>, 
          Smooth Manifolds, Matching Algorithms and the intersection of all three.</p>
        <p>
          If you’re working on <a href="https://en.wikipedia.org/wiki/Decentralized_finance">decentralized finance</a> protocols or just want to chat, 
          feel free to reach out! My twitter is <a href="https://twitter.com/@robertleifke/">@robertleifke.</a></p>
      </section>
    </Layout>
  );
}