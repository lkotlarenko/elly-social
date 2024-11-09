module.exports = {
  siteMetadata: {
    title: `Elly's Social Hub`,
    description: `A hub where you can find all the links to Elly's social profiles.`,
    author: `@Elly`,
    siteUrl: `https://elly.social/`,
    headline: `Find Elly Everywhere`,
    image: `/src/images/favicon.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        name: `Elly's Social Hub`,
        short_name: `EllyHub`,
        start_url: `/`,
        background_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
