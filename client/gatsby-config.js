module.exports = {
  siteMetadata: {
    title: "profitt",
  },
  plugins: [
    {
      // resolve: `gatsby-theme-material-ui`,
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-antd',
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   options: { prefixes: [`/*`] },
    // },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-191500067-1",
      },
    },
    "gatsby-plugin-sass",
    // `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
