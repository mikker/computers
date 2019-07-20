const mdxFeed = require("gatsby-mdx/feed");

const configuration = {
  // the name of your website
  title: "COMPUTERS af Mikkel Malmberg",
  // the description of the website (eg. what shows on Google)
  description:
    "COMPUTERS er et (stort set) ugentligt nyhedsbrev om computere, software, comedy, arbejde og det at lave ting.",
  // a short bio shown at the bottom of your blog posts
  // It should complete the sentence: Written by {{ authorName }} ...
  // shortBio: "10er makes it easy to turn likes into money.",
  // a longer bio showing on the landing page of the blog
  author: "Mikkel Malmberg",
  // replace this by the url where your website will be published
  siteUrl: "https://computers.mikkelmalmberg.com",
  social: {
    // leave the social media you do not want to appear as empty strings
    twitter: "@mikker"
  }
};

module.exports = {
  siteMetadata: configuration,
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-mdx",
      options: {
        extensions: [".md", ".mdx"],
        globalScope: `
          import Tweet from '${__dirname}/src/components/tweet'
          export default { Tweet }
        `,
        gatsbyRemarkPlugins: [
          // "gatsby-remark-numbered-footnotes",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
              backgroundColor: "transparent",
              showCaptions: true
            }
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-embed-video",
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: ""
            }
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-smartypants",
          "gatsby-remark-external-links",
          require.resolve("./plugins/twitter-embeds"),
          {
            resolve: `gatsby-remark-figure-caption`,
            options: { figureClassName: "post-figure" }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "COMPUTERS",
        short_name: "COMPUTERS",
        start_url: "/",
        background_color: "#ff2076",
        theme_color: "#ff2076",
        display: "minimal-ui",
        mikker: "src/images/logo.png" // This path is relative to the root of the site.
      }
    },
    // `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`)(),
          require(`postcss-preset-env`)({ stage: 0 })
        ]
      }
    }
  ]
};
