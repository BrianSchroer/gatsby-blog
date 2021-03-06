module.exports = {
  pathPrefix: `/gatsby-blog`,
  siteMetadata: {
    title: 'Gatsby Blog Experimentation'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`
      }
    }
  ]
};
