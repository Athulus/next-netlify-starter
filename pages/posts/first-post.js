import Link from 'next/link'
import Head from 'next/head'
import Layout from '@components/Layout'

export default function FirstPost() {
    return <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h1 className='title'>
            <Link href='/'> Back Home!</Link>
        </h1>

        <h1>First Post</h1>
    </Layout>
}