module.exports = {
  siteMetadata: {
    title: "cakrazemlak",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://cakraz-emlak-cms.herokuapp.com",
        queryLimit: 1000,
        contentTypes: ["adverts", "pages"],
        singleTypes: [`homepage`],
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'StrapiAdverts',
        imagePath: 'images[].url',
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "@chakra-ui/gatsby-plugin",
  ],
};
