const { Component } = require("react")


exports.createPages = ({actions: {createPage}}) =>{
        const blogs = require('./data/data.json');
        blogs.forEach(product=>{
            createPage({
                path: `blogs/${product.slug}/`,
                component: require.resolve('./src/templates/blogTemplate.js'),
                context:{
                    title: product.title,
                    info: product.description,
                    image: product.image,
                }
            })
        })
    
}