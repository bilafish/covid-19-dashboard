module.exports = {
  siteMetadata: {
    title: `Let's Fight Covid-19 Together 💪`,
    description: `A dashboard to show the current global trends of the Covid-19 pandemic and share useful information on how to fight the virus together.`,
    author: `@bilafish`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Let's Fight Covid-19 Together`,
        short_name: `Fight Covid-19 Together`,
        start_url: `/`,
        background_color: `#2c4975`,
        theme_color: `#FEA3A8`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `UA-155874130-4`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
