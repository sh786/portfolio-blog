module.exports = {
  siteMetadata: {
    siteUrl: "https://sam-hamburger.netlify.app",
    title: `Sam Hamburger`,
    description: `Welcome to Sam Hamburger's Portfolio and Blog site. Explore example works as well as the new blog section.`,
    author: `Sam Hamburger`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-works`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPosts`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        name: `scss`,
        path: `${__dirname}/src/components/layout.scss`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `B612 Mono`,
          },
          {
            family: `Montserrat`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#09d3ac`,
        theme_color: `#09d3ac`,
        display: `minimal-ui`,
        icon: `src/images/port-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sam Hamburger Portfolio & Blog`,
        short_name: `Sam Hamburger Portfolio`,
        start_url: `/`,
        background_color: `#09d3ac`,
        theme_color: `#455357`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-offline",
  ],
}
