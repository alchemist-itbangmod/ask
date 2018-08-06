import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import statusCallback from '../../config/statusCallback'
import PropTypes from 'prop-types'

const Card = styled.div`
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .4);
  padding: 20px 15px;
  background-color: ${props => props.bg};
  color: ${props => props.color};
`

const FixPosition = styled.div`
    position: fixed;
    top: ${props => props.show ? '10px' : '-200px'};
    transition: top 0.3s ease-in;
    width: 100%;
    left: 0;
`

class Dialog extends React.Component {
  get icon () {
    switch (this.props.status) {
      case statusCallback.SUCCESS:
        return <i className='fa fa-check-circle fa-2x' />
      case statusCallback.CLOSED:
        return <i className='fa fa-times-circle fa-2x' />
      default:
        return <i className='fa fa-exclamation-circle fa-2x' />
    }
  }

  get message () {
    switch (this.props.status) {
      case statusCallback.SUCCESS:
        return <span>Your question has been sent.</span>
      case statusCallback.CLOSED:
        return <span>Close to send question.</span>
      case statusCallback.ERROR:
        return <span>Your question was not send!</span>
      default:
        return <span>{this.props.message}</span>
    }
  }

  get bgColor () {
    switch (this.props.status) {
      case statusCallback.SUCCESS:
        return '#00D1B2'
      case statusCallback.CLOSED:
        return '#FFDD57'
      case statusCallback.ERROR:
        return '#FF3860'
      default:
        return '#FF3860'
    }
  }

  get color () {
    switch (this.props.status) {
      case statusCallback.SUCCESS:
        return '#fff'
      case statusCallback.CLOSED:
        return '#000'
      case statusCallback.ERROR:
        return '#fff'
      default:
        return '#fff'
    }
  }

  render () {
    return (
      <FixPosition show={this.props.show}>
        <Container>
          <Row className='justify-content-center'>
            <Col xs='12' md='6'>
              <Card className='rounded' bg={this.bgColor} color={this.color}>
                <Row>
                  <Col xs='2' sm='1' className='text-center' >
                    {this.icon}
                  </Col>
                  <Col xs='10' className='d-flex align-items-center'>
                    <h6 className='m-0'>{this.message}</h6>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </FixPosition>
    )
  }
}
Dialog.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
}
export default Dialog