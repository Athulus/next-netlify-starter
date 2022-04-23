import Layout from '@components/Layout'
import { getAllPostIds, getPostData } from 'lib/posts'
import utilStyles from '@styles/utils.module.css'
import Head from 'next/head'

export default function Post({ post}) {
  return (
  <Layout>
    <Head>
      <title>{post.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{post.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={post.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  </Layout>)
}

export async function getStaticPaths(){
  const paths = getAllPostIds()
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
  console.log(params)
  const post = await getPostData(params.id)
  console.log(post)
  return {
    props: {
      post
    }
  }

}