/* global graphql */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import HeaderMod from '../components/headerMod'
import './index.css'

const Layout = ({
  children,
  data,
}) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Sample',
        },
        {
          name: 'keywords',
          content: 'sample, something',
        },
      ]}
    >
      <link href='https://fonts.googleapis.com/css?family=Itim' rel='stylesheet' />
      <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' rel='stylesheet' />
    </Helmet>
    <HeaderMod siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
