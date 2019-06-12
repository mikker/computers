import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Embed from '../components/embed'
import { formatPostDate, formatReadingTime } from '../utils/dates'

export default function PageTemplate({ data: { mdx, site }, pageContext }) {
  const { previous, next } = pageContext
  const publicUrl = `${site.siteMetadata.siteUrl}${mdx.fields.slug}`

  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        keywords={mdx.frontmatter.categories || []}
      />
      <section className="ph3">
        <article className="measure-wide">
          <header className="lh-title mv4">
            <h1 className="mb0">
              <Link to={mdx.fields.slug} className="link blue lh-title">
                {mdx.frontmatter.title}
              </Link>
            </h1>
            <p className="mt0 black-50 fw5 f6">
              {formatPostDate(mdx.frontmatter.date)}
            </p>
          </header>

          <div className="nested-copy-line-height nested-links">
            <MDXRenderer components={{ Embed }}>{mdx.code.body}</MDXRenderer>
          </div>
        </article>

        <hr />

        <footer>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href={`https://twitter.com/search?q=${publicUrl}`}
            className="link blue"
          >
            Discuss this post on Twitter
          </a>

          {false && (
            <ul>
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>

              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          )}
        </footer>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        categories
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`
