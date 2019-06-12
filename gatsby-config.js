const mdxFeed = require('gatsby-mdx/feed')

const configuration = {
  // the name of your website
  title: '10er blog',
  // the description of the website (eg. what shows on Google)
  description: 'Telling the story behind a wholesome service',
  // a short bio shown at the bottom of your blog posts
  // It should complete the sentence: Written by {{ authorName }} ...
  shortBio: '10er makes it easy to turn likes into money.',
  // a longer bio showing on the landing page of the blog
  author: '10er',
  // replace this by the url where your website will be published
  siteUrl: 'https://blog.10er.app',
  social: {
    // leave the social media you do not want to appear as empty strings
    twitter: '@10erdotapp',
  },
}

module.exports = {
  siteMetadata: configuration,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              backgroundColor: 'transparent',
              showCaptions: true,
            },
          },
          // 'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-embed-video',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: '',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants',
          // {
          //   resolve: '@weknow/gatsby-remark-twitter',
          //   options: {
          //     debug: true,
          //     align: 'center'
          //   }
          // },
          'gatsby-remark-external-links',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '10er',
        short_name: '10er',
        start_url: '/',
        background_color: '#001724',
        theme_color: '#001724',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`)(),
          require(`postcss-preset-env`)({ stage: 0 }),
        ],
      },
    },
  ],
}
