import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import styled from 'styled-components'
import { inject } from 'mobx-react'
import PropTypes from 'prop-types'

const StyledContainer = styled(Container)`
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  background: #663399;

`
@inject(store => ({
  resetAsk: store.ask.resetAsk,
}))
class Navbar extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    resetAsk: PropTypes.func,
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <StyledContainer fluid>
        <Row className='justify-content-between align-items-center py-2'>
          <Col xs='4'>
          ASK
          </Col>
          <Col xs='4 text-right'>
            <Button color='danger' onClick={this.props.resetAsk}>
              <i className='fa fa-sign-out ' />
            </Button>
          </Col>
        </Row>
      </StyledContainer>
    )
  }
}

export default Navbar