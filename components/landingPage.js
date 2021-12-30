import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';
import Sections from '../components/sections';

export default function LandingPage({page}){
    return (
        <Layout preview={false}>
        <Head>
          <title>{page.name}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <Container>
          <Sections sections={page.sections} />
        </Container>
      </Layout>
    )
}