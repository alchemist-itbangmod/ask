/* global graphql */
import { Provider } from 'mobx-react'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import store from '../store/combineStore'

const Layout = ({ children, data }) => (
  <Provider {...store}>
    <React.Fragment>
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
        <style>{`
          body {
            background: #F5F3F7;
            
          }
        `}</style>

        <link href='https://fonts.googleapis.com/css?family=Taviraj' rel='stylesheet' />
        <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' rel='stylesheet' />
      </Helmet>
      {children()}
    </React.Fragment>
  </Provider>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
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
