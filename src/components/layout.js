import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { ArrowUpRight } from 'react-feather'

import './layout.css'

const Layout = ({ children }) => {
  const { logo } = useStaticQuery(
    graphql`
      query LayoutQuery {
        logo: file(absolutePath: { regex: "/heart-coin-w1024.png/" }) {
          childImageSharp {
            fixed(width: 18, quality: 80) {
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
  )

  return (
    <main className="black-90 sans-serif f6 f4-m f3-l measure-wide center">
      <header className="pt3 mb2 mb5-l ph1">
        <h1 className="mv0 f6 f4-ns flex items-center">
          <a href="/" className="flex-none btn flex items-center fw4">
            <Image fixed={logo.childImageSharp.fixed} className="mr2" />
            <div>
              <strong className="fw7">10er</strong> blog
            </div>
          </a>
          <div className='flex-auto' />
          <a
            href="https://10er.app"
            className="flex-none btn f7 f6-ns fw5 flex items-center shadow-4 mr2"
          >
            <ArrowUpRight className="bg-black-30 white icon mr1 mr2-l br1" />
            Go to 10er
          </a>
        </h1>
      </header>

      {children}

      <footer className="mt5 lh-copy f4-ns f6 measure-wide ph3">
        <p>
          <a href="https://10er.app" className="link blue">
            10er.app
          </a>{' '}
          makes it easy for creators to get recurring donations for the work
          they are already doing.
        </p>
        <hr className="w2 center" />
      </footer>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
