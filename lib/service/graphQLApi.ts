/// Not Using GraphQL now, it is for future enhancement only, We will be using contentful lib to fetch contents

const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
}
`


async function fetchGraphQL(query, draftMode = false) {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            draftMode
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
      }
    ).then((response) => response.json())
  }
  
function extractPost(fetchResponse) {
    return fetchResponse?.data?.postCollection?.items?.[0]
}

function extractPostEntries(fetchResponse) {
    return fetchResponse?.data?.postCollection?.items
}
  
export async function getPreviewPostBySlug(slug) {
    const entry = await fetchGraphQL(
    `query {
        postCollection(where: { slug: "${slug}" }, draftMode: true, limit: 1) {
        items {
            ${POST_GRAPHQL_FIELDS}
        }
        }
    }`,
    true
    )
    return extractPost(entry)
}
  
export async function getAllPostsWithSlug() {
    const entries = await fetchGraphQL(
        `query {
        postCollection(where: { slug_exists: true }, order: date_DESC) {
            items {
            ${POST_GRAPHQL_FIELDS}
            }
        }
        }`
    )
    return extractPostEntries(entries)
}
  
export async function getAllPostsForHome(draftMode) {
    const entries = await fetchGraphQL(
        `query {
        postCollection(order: date_DESC, draftMode: ${draftMode ? 'true' : 'false'}) {
            items {
            ${POST_GRAPHQL_FIELDS}
            }
        }
        }`,
        draftMode
    )
    return extractPostEntries(entries)
}
  
export async function getPostAndMorePosts(slug, draftMode) {
    const entry = await fetchGraphQL(
        `query {
        postCollection(where: { slug: "${slug}" }, draftMode: ${
        draftMode ? 'true' : 'false'
        }, limit: 1) {
            items {
            ${POST_GRAPHQL_FIELDS}
            }
        }
        }`,
        draftMode
    )
    const entries = await fetchGraphQL(
        `query {
        postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, draftMode: ${
        draftMode ? 'true' : 'false'
        }, limit: 2) {
            items {
            ${POST_GRAPHQL_FIELDS}
            }
        }
        }`,
        draftMode
    )
    return {
        post: extractPost(entry),
        morePosts: extractPostEntries(entries),
    }
}