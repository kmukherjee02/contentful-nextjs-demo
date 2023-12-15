import { ReactNode } from 'react'
import Alert from './Alert'
import Footer from './Footer'
import Meta from './Meta'

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
