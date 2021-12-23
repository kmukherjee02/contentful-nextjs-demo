import Container from '../components/container';
import Layout from '../components/layout';
import { fetchXDLandingEntriesBySlug } from '../lib/api';
import Head from 'next/head';
import Sections from '../components/sections';
import utilStyles from '../styles/util.module.css';

export default function Index({ fields }) {
  return (
    <>
      <Layout preview={false}>
        <Head>
          <title>{fields.name}</title>
        </Head>
        <Container>
          <Sections sections={fields.sections} />
        </Container>
      </Layout>
    </>
  )
}



export async function getStaticProps({ preview = false }) {
  const homePage = await fetchXDLandingEntriesBySlug("home");
    return {
      props: { 
        fields: homePage[0].fields
      },
    }
}
