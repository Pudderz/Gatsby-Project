
module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: "gatsby-source-filesystem",
    options:{
      path: "./data/blogPosts",
    },
  },
  {resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gatsby Blog",
        short_name: "GatsbyBlog",
        start_url: "/",
        background_color: "#131127",
        theme_color: "#2d2640",
        display: "standalone",
        icon: "static/favicon.ico",
      }
  },
  'gatsby-plugin-offline',
  `gatsby-plugin-react-helmet`,
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  "gatsby-plugin-sass",
  
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: ['.md', '.mdx'],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          
        }, 
        `gatsby-remark-autolink-headers`,
        `gatsby-remark-slug`,
        {
          resolve: "gatsby-plugin-page-creator",
          options: {
            path: `${__dirname}/src/posts`,
          },
        }
      ]

    }
  }
    

],
}
