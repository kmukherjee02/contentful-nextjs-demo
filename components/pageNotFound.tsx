import Container from './container';
import Layout from './layout';
import Head from 'next/head';
import Link from 'next/link';

export default function PageNotFound({preview}) {
    return (
        <Layout preview={preview}>
            <Head>
                <title>404 Page Not Found</title>
            </Head>
            <Container>
                <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-600 to-blue-400">
                    <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-blue-600 text-9xl">404</h1>

                            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                                <span className="text-red-500">Oops!</span> Page not found
                            </h6>

                            <p className="mb-8 text-center text-gray-500 md:text-lg">
                                The page you’re looking for doesn’t exist.
                            </p>
                            <Link href={'/'}>
                                <a className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
                                    Go home
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}