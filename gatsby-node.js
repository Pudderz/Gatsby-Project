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
//paginates /posts to divide the full list of pages up 
paginate({
  createPage,
  items: results.data.allBlogInfoJson.edges,
  itemsPerPage: 4,
  pathPrefix: '/posts',
  component: path.resolve('./src/templates/listOfPosts.js'),
})

//creates pages for each blog post
results.data.allBlogInfoJson.edges.forEach(edge=>{
    const product = edge.node;
    createPage({
        path: `/blogs/${product.slug}`,
        component: require.resolve('./src/templates/blogPages.js'),
        context: {
            slug: product.slug,
        }
    })
})


return graphql(`{
  allMarkdownRemark {
    edges {
      node {
        html
        id
        frontmatter {
          path
          title
        }
      }
    }
  }
}`)
.then(res=>{
  if(res.errors){
    return Promise.reject(res.error)
  }
  res.data.allMarkdownRemark.edges.forEach(({node})=>{
    createPage({
      path: node.frontmatter.path,
      component: path.resolve('src/templates/markdownTemp.js'),
    })  
  })
})



}
