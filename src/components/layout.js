import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { ArrowUpRight } from "react-feather";
import tiemposBoldPath from "../fonts/TiemposHeadline/TiemposHeadline-Bold.woff2";
import tiemposRegularPath from "../fonts/TiemposHeadline/TiemposHeadline-Regular.woff2";

import "./layout.css";

const Layout = ({ children }) => {
  const { logo } = useStaticQuery(
    graphql`
      query LayoutQuery {
        logo: file(absolutePath: { regex: "/logo.png/" }) {
          childImageSharp {
            fixed(width: 32, quality: 100) {
              base64
              width
              height
              src
              srcSet
            }
          }
        }
      }
    `
  );

  return (
    <main className="f4-l black-80 sans-serif measure-wide center">
      <Helmet>
        <link
          rel="preload"
          href={tiemposRegularPath}
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href={tiemposBoldPath}
          as="font"
          type="font/woff2"
        />
      </Helmet>
      <header className="pa3">
        <h1 className="f6">
          <a href="/" className="btn pa0 br-100 ba bw1 b--black-10">
            <Image
              fixed={logo.childImageSharp.fixed}
              className="db"
            />
          </a>
        </h1>
      </header>

      {children}

      <footer className="mt5 lh-copy f6 ph3 pv4 tc nested-links">
        Af <a href="https://mikkelmalmberg.com">Mikkel Malmberg</a> ·{" "}
        <Link href="/">COMPUTERS</Link> est. 2016
      </footer>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
