import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { ArrowUpRight } from "react-feather";
import cn from "classnames";
import firaCodeLight from '../fonts/FiraCode/woff2/FiraCode-Light.woff2'
import firaCodeRegular from '../fonts/FiraCode/woff2/FiraCode-Regular.woff2'
import firaCodeMedium from '../fonts/FiraCode/woff2/FiraCode-Medium.woff2'
import firaCodeBold from '../fonts/FiraCode/woff2/FiraCode-Bold.woff2'

import "./layout.css";

const Layout = ({ className, children }) => {
  const { logo } = useStaticQuery(
    graphql`
      query LayoutQuery {
        logo: file(absolutePath: { regex: "/logo.png/" }) {
          childImageSharp {
            fixed(width: 60, quality: 100) {
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
    <main
      className={cn("f4-m f4-l black-80 fira-code fw3 measure-wide center", className)}
    >
      <Helmet>
        <link
          rel="preload"
          href={firaCodeLight}
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href={firaCodeRegular}
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href={firaCodeMedium}
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href={firaCodeBold}
          as="font"
          type="font/woff2"
        />
      </Helmet>

      <header className="pv3">
        <h1 className="f6">
          <a href="/" className="dib dim">
            <Image fixed={logo.childImageSharp.fixed} />
          </a>
        </h1>
      </header>

      {children}

      <footer className="mt5 lh-copy f6 ph3 pv4 tc nested-links">
        af <a href="https://mikkelmalmberg.com">Mikkel Malmberg</a> ·{" "}
        <Link to="/">COMPUTERS</Link> est. 2016
      </footer>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
