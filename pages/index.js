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
        <a href="https://numo.trade/">Numo</a>, a protocol for creating <a href="https://en.wikipedia.org/wiki/Option_(finance)">options</a> on the Ethereum Virtual Machine. It's implementation is inspired by the paper, <a href="https://arxiv.org/abs/2103.14769"><em>Replicating Market Makers</em></a>.</p>
        <p>
          Why options? A financial system serves to transfer risk between buyers that want more and sellers that want less of it. This happens through options.</p>
        <p>
          With <a href="https://numo.trade/">Numo</a> I hope to create a unified marketplace for risk that is globally accessible without intermediaries. I think it would make finance more <a href="https://youtu.be/FGkP63hJivQ?si=VuAaAHECTZj2jik4">useful</a>.</p> 
        <p>
          For now, I'm on a leave of absence from the University of Michigan where I'm majoring in Mathematics. My 
          research interests are in <a href="https://arxiv.org/pdf/2308.08066.pdf">Constant Function Market Makers</a> and 
          Graph Algorithms.</p>
        <p>
          If you’re working on <a href="https://en.wikipedia.org/wiki/Decentralized_finance">decentralized finance</a> protocols or just want to chat my twitter is <a href="https://twitter.com/@robertleifke/">@robertleifke.</a></p>
      </section>
    </Layout>
  );
}