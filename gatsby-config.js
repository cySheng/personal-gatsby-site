module.exports = {
  siteMetadata: {
    siteUrl: `https://www.samsheng.my`,
    title: `Sheng - Developer. Resident Association Enthusiast. 3D Printer.`,
    description: `I’m passionate about improving the lives of professionals and organizations by utilizing new technologies`,
    author: `Sheng`,
    keywords: `Web Developer, Malaysia, 3D Printing, Resident Association, Rukun Tetangga`,
    // pageTitle: `Sheng`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`500`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
     {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-166840889-1",
        head: true,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
