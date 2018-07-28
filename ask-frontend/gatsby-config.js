module.exports = {
  siteMetadata: {
    title: 'ASK #3.0',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/org/*`] },
    },
  ],
}
