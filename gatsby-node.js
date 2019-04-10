const path = require("path")
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
        allContentfulPortfolio {
        edges {
          node {
            slug
            blogTitle
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulPortfolio.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/template/blog-single.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
        },
      })
    })
  })
}



exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
	const { createNodeField } = boundActionCreators;

	if (node.internal.type === `contentfulPortfolio`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
};
