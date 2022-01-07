import Container from './container'
import cn from 'classnames'
import Link from 'next/link'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2 hidden': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <div className={'h-8'}>
              This is page is a preview.{' '}
              <Link href={"/api/exitPreview"} passHref>
              <a className="underline hover:text-cyan duration-200 transition-colors" >
                Click here
              </a>
              </Link>{' '}
              to exit preview mode.
            </div>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </div>
  )
}
