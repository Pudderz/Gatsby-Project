exports.createPages = async({actions: {createPage}, graphql})=>{
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