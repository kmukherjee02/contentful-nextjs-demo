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

export async function fetchEntry(entryId){
  const entry = await client.getEntry(entryId);
  if (entry.fields) return entry.fields

  return null;
}

export async function fetchEntries(contentType,slug) {
  if(accessToken){
    const entries = await client.getEntries({
      content_type: contentType,
      "fields.slug": slug,
      include: 5    
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }
  console.log(`Access Token is undefined`);
}


export async function fetchXDLandingEntriesBySlug(slug){
   return await fetchEntries("xdLandingPage", slug); 
}

export default { fetchEntries }
