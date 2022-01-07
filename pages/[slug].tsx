import { GetStaticProps, GetStaticPaths } from 'next'
import LandingPage from '@components/landingPage';
import PageNotFound from '@components/pageNotFound';
import {fetchXDLandingEntriesBySlug, fetchAllXDLandingEntries} from '@lib/service/api';


export default function Slug({preview, page}){
  if(JSON.stringify(page) !== '{}'){
    return (
      <LandingPage preview={preview} page={page} /> 
    )
  }
  return (
    <PageNotFound preview={preview}/>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchAllXDLandingEntries();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    const homePage = await fetchXDLandingEntriesBySlug(preview, params.slug as string);
    if(homePage?.length > 0){
      return {
        props: { 
          preview: preview,
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