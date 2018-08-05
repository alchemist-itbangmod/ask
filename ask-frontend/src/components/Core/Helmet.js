import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const HelmetComponent = ({ title }) => (
  <Helmet
    title={`ASK #3.0 | ${title}`}
  />
)

HelmetComponent.propTypes = {
  title: PropTypes.string,
}

export default HelmetComponent