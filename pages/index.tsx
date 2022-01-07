import { GetStaticProps } from 'next';
import LandingPage from '@components/landingPage';
import { fetchXDLandingEntriesBySlug } from '@lib/service/api';


export default function Index({ preview, page }) {
  return (
     <LandingPage preview={preview} page={page} /> 
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const homePage = await fetchXDLandingEntriesBySlug(preview);
    return {
      props: { 
        preview: preview,
        page: homePage[0].fields
      },
    }
}
