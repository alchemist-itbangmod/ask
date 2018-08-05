/* global graphql */
import { Provider } from 'mobx-react'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import store from '../store/combineStore'
import '../static/bootstrap/bootstrap.min.css'
import color from '../components/Core/color'
import Alert from 'react-s-alert'

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import 'react-s-alert/dist/s-alert-css-effects/flip.css'
import 'react-s-alert/dist/s-alert-css-effects/jelly.css'
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css'
import 'react-s-alert/dist/s-alert-css-effects/genie.css'
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css'

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
            background: ${color.GRAY};
            
          }
        `}</style>

        <link href='https://fonts.googleapis.com/css?family=Taviraj' rel='stylesheet' />
        <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' rel='stylesheet' />
      </Helmet>
      <Alert stack={{ limit: 3 }} />
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
