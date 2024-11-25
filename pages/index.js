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
        <p>Heyo! My name is Robert Leifke. I am working on {' '}
        <a href="https://x.com/numocash/">Numo</a>, an automated market maker (AMM) for hedging foreign currrencies on blockchains.</p>
        <p>It's implementation is inspired by the paper, 
        <a href="https://arxiv.org/abs/2103.14769"><em> replicating market makers</em></a> which first introduced the idea of AMMs for hedging and not just spot trading.</p>
        <p>
          With Numo I hope to create the most liquid marketplace for foreign currencies in the world.</p>
        <p>
          I'm finishing my degree in Mathematics from the University of Michigan. My 
          research interests are in <a href="https://arxiv.org/pdf/2308.08066.pdf">automated market makers</a>, differential privacy, and 
          lattice-based cryptography.</p>
        <p>
          If you’re working in <a href="https://en.wikipedia.org/wiki/Decentralized_finance">decentralized finance</a> or just want to chat my twitter is <a href="https://twitter.com/@robertleifke/">@robertleifke.</a></p>
      </section>
    </Layout>
  );
}