import { GetStaticProps } from 'next';
import LandingPage from '../components/landingPage';
import { fetchXDLandingEntriesBySlug } from '../lib/api';


export default function Index({ page }) {
  return (
     <LandingPage page={page} /> 
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const homePage = await fetchXDLandingEntriesBySlug(preview);
    return {
      props: { 
        page: homePage[0].fields
      },
    }
}
