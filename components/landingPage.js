import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';
import Sections from '../components/sections';

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