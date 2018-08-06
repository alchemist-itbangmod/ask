require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'ASK #3.0',
    description: `ระบบถาม-ตอบ เพื่อสนับสนุนงานสัมนา หรือประชุม`,
    keywords: 'ask, question, conference, seminar',
    ogTitle: 'ASK #3.0',
    ogType: 'company',
    url: 'https://ask.kmutt.ac.th',
    siteName: 'ASK #3.0',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/organizer/*`] },
    },
  ],
}
