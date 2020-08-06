import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Buttondown, { generateRandomEmail } from "../components/buttondown";
import { formatPostDate, formatReadingTime } from "../utils/dates";

const BlogIndexPage = ({ data: { allMdx, avatar } }) => {
  const [memberCount, setMemberCount] = useState(null);
  const [randomEmail, _] = useState(generateRandomEmail());

  useEffect(() => {
    fetch("https://computers-stats.now.sh/api/")
      .then(resp => resp.json())
      .then(stats => setMemberCount(stats.member_count));
  });

  return (
    <Layout>
      <SEO title={`COMPUTERS – Et nyhedsbrev af Mikkel Malmberg`} />

      <header className="ph3 lh-copy">
        <p className="p3 f3">
          <Link href="/" className="link">
            COMPUTERS
          </Link>{" "}
          er et (<del>stort set</del>på ingen måder) ugentligt nyhedsbrev af{" "}
          <a href="https://mikkelmalmberg.dk">
            <Image
              fixed={avatar.childImageSharp.fixed}
              className="br-100 icon mr1"
            />
          </a>
          <a href="https://mikkelmalmberg.dk" className="link">
            Mikkel Malmberg
          </a>{" "}
          om computere, software, comedy, arbejde og det at lave ting.
        </p>
      </header>

      <section className="mh3 pa3 pa4-ns bg-near-white br3 mv4">
        <h3 className="sans-serif mt1 black-80 tc-ns">
          Slut dig til <span className="black">{memberCount || "…"} andre</span>{" "}
          på en rejse for livet
        </h3>
        <Buttondown placeholder={randomEmail} />
      </section>

      <div className="lh-copy nested-links ma3 mt4">
        <Quote>
          "Subscribed"{" "}
          <cite>
            &mdash;{" "}
            <a href="https://twitter.com/tveskov/status/790880099927224320">
              @tveskov
            </a>
          </cite>
        </Quote>

        <Quote>
          "[&hellip;] dit nyhedsbrev var fremragende i dag."{" "}
          <cite>
            &mdash;{" "}
            <a href="https://twitter.com/jonasjuhler/status/802202419547488256">
              @jonasjuhler
            </a>
          </cite>
        </Quote>

        <Quote>
          "for mange ord" <cite>&mdash; Anonym unsubscriber</cite>
        </Quote>

        <Quote>
          "funny and truly inspirational quips from a multi-hyphenate coder"{" "}
          <cite>
            &mdash;{" "}
            <a href="https://twitter.com/nynnest/status/1071754896154771456">
              @nynnest
            </a>
          </cite>
        </Quote>

        <Quote>
          "Du skriver virkelig godt, det er en fornøjelse at læse dine
          tankevækkende nyhedsbreve"{" "}
          <cite>
            &mdash;{" "}
            <a href="https://twitter.com/JulieLynghede">@julielynghede</a>
          </cite>
        </Quote>

        <Quote>
          "Når du mener noget føler jeg det kommer fra et sted der er venligt,
          lunt, eftertænksomt og samtidig ikke personlighedsløst. Det er et
          meget godt sted. Så bliv venligst VED."{" "}
          <cite>
            &mdash; <a href="https://twitter.com/rankenberg">@rankenberg</a>
          </cite>
        </Quote>

        <Quote>
          "Følg med her. Det er en ordre. Hyggelig blanding af spas, sunde
          refleksioner og WTFs"{" "}
          <cite>
            &mdash;{" "}
            <a href="https://twitter.com/markbuskbjerg/status/909058765156216832">
              @MarkBuskbjerg
            </a>
          </cite>
        </Quote>

        <Quote>
          "[…] den eneste maillingliste der giver noget værdifuldt"
          <cite>
            &mdash; <a href="https://twitter.com/esbenab">@esbenab</a>
          </cite>
        </Quote>
      </div>

      <div className="mt4 ph3">
        <h2 className="">Udgivelser</h2>
        <ul className="f6 nested-links lh-copy">
          {allMdx.nodes.map(post => (
            <li key={post.fields.slug} className="numeric">
              <Link to={post.fields.slug} className="">
                #{post.frontmatter.issue} &ndash;{" "}
                {post.frontmatter.published_on} &ndash; {post.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default BlogIndexPage;

export const query = graphql`
  query BlogIndex {
    allMdx(sort: { fields: [frontmatter___issue], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          issue
          title
          published_on(formatString: "YYYY-MM-DD")
        }
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fixed(width: 20, quality: 100) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`;

function Quote(props) {
  return <blockquote className="i gray ml3 mr0" {...props} />;
}
