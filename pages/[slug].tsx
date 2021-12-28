import { GetStaticProps, GetStaticPaths } from 'next'
import LandingPage from '../components/landingPage';
import PageNotFound from '../components/pageNotFound';
import {fetchXDLandingEntriesBySlug, fetchAllXDLandingEntries} from '../lib/api';


export default function Slug({page}){
  if(JSON.stringify(page) !== '{}'){
    return (
      <LandingPage page={page} /> 
    )
  }
  return (
    <PageNotFound />
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
    const homePage = await fetchXDLandingEntriesBySlug(params.preview, params.slug as string);
    if(homePage?.length > 0){
      return {
        props: { 
          page: homePage[0].fields
        },
      }
    } 
    return {
      props : {
        page: {}
      }
    }
  }