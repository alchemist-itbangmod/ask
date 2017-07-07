import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'

const withApp = (title) => {
  return (Component) => {
    class HOC extends React.Component {
      render() {
        return (
          <div>
            <Head>
              <title>ASK | { title }</title>
              <link rel="stylesheet" href="/static/bootstrap.min.css" />
              <link href="https://fonts.googleapis.com/css?family=Prompt" rel="stylesheet" />
            </Head>
            <Navbar />
            <div className="container">
              <Component {...this.props} />
            </div>
            <style jsx global>{`
              body,
              h1,h2,h3,h4,h5,h6 {
                font-family: 'Prompt', sans-serif;
              }

            `}</style>
          </div>
        )
      }
    }

    return HOC
  }
}
export default withApp
