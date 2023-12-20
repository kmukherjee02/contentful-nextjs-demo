import Alert from '@components/Alert';
import Footer from '@components/Footer';
import Meta from '@components/Meta';
import { LayoutProps } from 'types';

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
