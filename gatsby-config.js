module.exports = {
  siteMetadata: {
    title: `MVP Stack`,
    description: `A company by solo founder [Mohd Danish] and building micro-startups for you`,
    author: `@mddanishyusuf`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: 'gatsby-source-apiserver',
      options: {
          // Type prefix of entities from server
          typePrefix: 'mvp__',

          // The url, this should be the endpoint you are attempting to pull data from
          url: `https://v1.nocodeapi.com/betauser/airtable/IPVYmHtHJtQWsDWU?tableName=projects`,

          method: 'get',

          headers: {
              'Content-Type': 'application/json',
          },

          data: {},

          name: 'projects',

          entityLevel: `records`,

          verboseOutput: true,
      },
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mvpstack.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
