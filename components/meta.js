import Head from 'next/head'
import { CMS_NAME } from '@lib/utilities/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="icon"
        type="image/jpg"
        sizes="32x32"
        href="/images/favicon/cropped-xtivia-trusted-tech-partner-fav-32x32.jpg"
      />
      <link rel="shortcut icon" href="/images/favicon/cropped-xtivia-trusted-tech-partner-fav-32x32.jpg" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content={`A statically generated site demonstrating the power of Next.js and ${CMS_NAME}.`}
      />
      <meta name="robots" content="noindex" />
      <meta property="og:image" content="https://contentful-nextjs-demo-opal.vercel.app/images/XTIVIA-wallpaper-400.png" />
      <meta property="og:image:secure_url" content="https://contentful-nextjs-demo-opal.vercel.app/images/XTIVIA-wallpaper-400.png" /> 
      <meta property="og:image:type" content="image/jpeg" /> 
      <meta property="og:image:width" content="400" /> 
      <meta property="og:image:height" content="300" />
    </Head>
  )
}
