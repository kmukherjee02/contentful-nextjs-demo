import LandingPage from '../components/landingPage';
import { fetchXDLandingEntriesBySlug } from '../lib/api';


export default function Index({ page }) {
  return (
     <LandingPage page={page} /> 
  )
}

export async function getStaticProps({ preview = false }) {
  const homePage = await fetchXDLandingEntriesBySlug();
    return {
      props: { 
        page: homePage[0].fields
      },
    }
}
