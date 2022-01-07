import { fetchPreviewXDLandingEntriesBySlug } from '@lib/service/api'

export default async function preview(req, res) {
  const { secret, slug } = req.query

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const landingPage = await fetchPreviewXDLandingEntriesBySlug(slug)

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!landingPage) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched landing page
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `${landingPage[0].fields.slug}` })
  const url = `/${landingPage[0].fields.slug}`
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  )
  res.end()
}
