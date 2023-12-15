import { ReactNode } from 'react'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type LayoutProps = {
    preview?: boolean;
    children: ReactNode;
}

export default function Layout({ preview, children }: LayoutProps) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main className={`${preview ? 'preview' : 'no-preview'}`}>
          <Alert preview={preview} /> 
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
