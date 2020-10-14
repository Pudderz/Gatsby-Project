
module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: "gatsby-source-filesystem",
    options:{
      path: "./data/",
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
  "gatsby-transformer-json",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  "gatsby-plugin-sass",
  
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          
        }
      ]

    }
  }
],
}
