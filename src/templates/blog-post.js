import React from "react";
import { Link, graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MessageSquare, ArrowLeft, ArrowRight } from "react-feather";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Embed from "../components/embed";
import Buttondown from "../components/Buttondown";
import { formatPostDate, formatReadingTime } from "../utils/dates";

export default function PageTemplate({ data: { mdx, site }, pageContext }) {
  const { previous, next } = pageContext;
  const publicUrl = `${site.siteMetadata.siteUrl}${mdx.fields.slug}`;

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />

      <section className="ph3">
        <article className="measure-wide">
          <div className="nested-copy-line-height nested-links">
            <MDXRenderer components={{ Embed }}>{mdx.code.body}</MDXRenderer>
          </div>
        </article>

        <footer className="mv4">
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href={`https://twitter.com/search?q=${publicUrl}`}
            className="f6 f4-l mv3 w-100 w-auto-l tc btn b--pinkish pinkish ph3 pv2 br-pill"
          >
            <MessageSquare className="icon mr1" />
            Kommentér på Twitter
          </a>

          <div className="pa3 pa4-l f4-l bg-near-white mv4 br3 lh-copy f6">
            <h3 className="mt0 mb1">Kunne du lide, hvad du læste?</h3>
            <p className="mt0">
              Modtag et mindst lige så lækkert brev <del>hver fredag</del>{" "}
              (næsten) <strong>hver uge</strong>:
            </p>
            <Buttondown />
          </div>

          <ul className="list pl0 ma0 nested-links lh-copy">
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  <ArrowLeft className="icon mr1" />#
                  {previous.frontmatter.issue} {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li className="tr">
                <Link to={next.fields.slug} rel="next">
                  #{next.frontmatter.issue} {next.frontmatter.title}
                  <ArrowRight className="icon ml1" />
                </Link>
              </li>
            )}
          </ul>
        </footer>
      </section>
    </Layout>
  );
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
        published_on(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`;
