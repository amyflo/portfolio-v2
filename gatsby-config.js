module.exports = {
  siteMetadata: {
    title: "Amy Lo",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-image`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 4000,
              quality: 100,
              linkImagesToOriginal: false,
              showCaptions: ["title"],
              markdownCaptions: true,
            },
          },
        ],
      },
    },
  ],
};
