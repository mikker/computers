import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { formatPostDate, formatReadingTime } from '../utils/dates'

const BlogIndexPage = ({ data: { allMdx } }) => (
  <Layout>
    <SEO title={`blog.10er.app`} />
    <div className="mt4 ph3">
      <h2 className="f5 f4-ns mb3">Archive</h2>
      {allMdx.nodes.map(post => (
        <div key={post.fields.slug} name={post.fields.slug}>
          <Link to={post.fields.slug} className="link blue lh-title db mb3">
            <strong className="tiempos-headline fw3 f4 f3-m f2-l">{post.frontmatter.title}</strong>
            <div className="black-50 mt0 f6-ns fw5">
              {formatPostDate(post.frontmatter.date)}
            </div>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
)

export default BlogIndexPage

export const query = graphql`
  query BlogIndex {
    allMdx(
      filter: { fields: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          categories
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
