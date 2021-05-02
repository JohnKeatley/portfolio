module.exports = {
    siteMetadata: {
        title: `John Keatley | Software Engineer`,
      },
      plugins: [{
        resolve: `gatsby-plugin-layout`,
        options: {
          // add relative path to your layout component
          component: `${__dirname}/src/components/Layout.js`
        }
      }]
  }