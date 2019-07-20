const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const path = createFilePath({ node, getNode });

    createNodeField({
      name: "slug",
      node,
      value: `/issues${path}`
    });
  }
};

exports.createPages = ({ graphql, actions, reporter, pathPrefix }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___published_on], order: DESC }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                issue
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors && result.errors.length) {
      if (result.errors.length === 1) {
        throw new Error(result.errors[0]);
      }

      result.errors.forEach(error => {
        reporter.error("Error while querying the mdx", error);
      });

      throw new Error("See errors above");
    }

    const posts = result.data.allMdx.edges;

    posts.forEach(({ node }, index) => {
      let previous = index === posts.length - 1 ? null : posts[index + 1].node;
      let next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `${pathPrefix}${node.fields.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: { id: node.id, previous, next }
      });
    });
  });
};
