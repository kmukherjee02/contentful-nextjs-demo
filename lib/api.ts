const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN 
const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN

let client;
if(accessToken){
  client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
  })
}

export async function fetchEntries(contentType : string ,slug : string) {
  if(accessToken){
    const entries = await client.getEntries({
      content_type: contentType,
      "fields.slug": slug,
      include: 5    
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType}.`)
  }
  console.log(`Access Token is undefined`);
}


export async function fetchXDLandingEntriesBySlug(slug : string = "home"){
   return await fetchEntries("xdLandingPage", slug); 
}

export async function fetchAllXDLandingEntries(){
  if(accessToken){
    const entries = await client.getEntries({
      content_type: "xdLandingPage",
    })
    if (entries.items) {
      return entries.items.map(landingPage => {
        return {
          params: {
             slug: landingPage.fields.slug
          }
        }
      })
    }
    console.log(`Error getting Entries for xdLandingPage.`)
  }
  console.log(`Access Token is undefined`);
}