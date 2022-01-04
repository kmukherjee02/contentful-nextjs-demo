import Container from './container';
import Layout from './layout';
import Head from 'next/head';
import Sections from './sections';

export default function LandingPage({page}){
    return (
        <Layout preview={false}>
        <Head>
          <title>{page.name}</title>
        </Head>
        <Container>
          <Sections sections={page.sections} />
        </Container>
      </Layout>
    )
}