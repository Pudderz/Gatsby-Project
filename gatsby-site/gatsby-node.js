//import { paginate } from 'gatsby-awesome-pagination'
const {paginate} = require('gatsby-awesome-pagination')
const path = require('path')
exports.createPages = async({actions, graphql})=>{
  const {createPage} = actions
const results = await graphql(`
      {
        allBlogInfoJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

if(results.error){
    console.log('There was an error')
    return;
}

paginate({
  createPage,
  items: results.data.allBlogInfoJson.edges,
  itemsPerPage: 3,
  pathPrefix: '/posts',
  component: path.resolve('./src/templates/blogTemplate.js'),
})


results.data.allBlogInfoJson.edges.forEach(edge=>{
    const product = edge.node;
    createPage({
        path: `/blogs/${product.slug}`,
        component: require.resolve('./src/templates/product-graphql.js'),
        context: {
            slug: product.slug,
        }
    })
})
}