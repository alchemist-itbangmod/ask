import React from 'react'
import styled from 'styled-components'
import { RingLoader } from 'react-spinners'
import color from './color'

const Layout = styled.div`
  position: fixed;
  z-index: 1;
  background: rgba(255,255,255,0.9);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.PURPLE};
  flex-direction: column;
`
class Loader extends React.Component {
  render () {
    return (
      <Layout>
        <RingLoader size={300} color={color.PURPLE} />
        <h1>Loading</h1>
      </Layout>
    )
  }
}

export default Loader
