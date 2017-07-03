import React from 'react'
import Head from 'next/head'

const withApp = (title) => {
  return (Component) => {
    class HOC extends React.Component {
      render() {
        return (
          <div>
            <Head>
              <title>ASK | { title }</title>
            </Head>
            <Component {...this.props} />
          </div>
        )
      }
    }

    return HOC
  }
}
export default withApp
