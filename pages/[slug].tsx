import { GetStaticProps, GetStaticPaths } from 'next'
import LandingPage from '../components/landingPage';
import {fetchXDLandingEntriesBySlug, fetchAllXDLandingEntries} from '../lib/api';


export default function Slug({page}){
  return (
    <LandingPage page={page} /> 
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchAllXDLandingEntries();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const homePage = await fetchXDLandingEntriesBySlug(params.slug as string);
    return {
      props: { 
        page: homePage[0].fields
      },
    }
  }