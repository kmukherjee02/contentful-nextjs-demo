import Container from "./container";
import Layout from "./layout";
import Head from "next/head";
import Sections from "./sections";

export default function LandingPage({ preview, page }) {
  console.log({ preview, page });
  return (
    <Layout preview={preview}>
      <Head>
        <title>{page.name}</title>
      </Head>
      <Container>
        <Sections sections={page.sections} />
      </Container>
    </Layout>
  );
}
