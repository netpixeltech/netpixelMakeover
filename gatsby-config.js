/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
    resolve: `gatsby-source-sanity`,
      options: {
        projectId: `zkyvt2x6`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby image gallery example`,
        short_name: `GIG Example`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `browser`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  
  ],
}
