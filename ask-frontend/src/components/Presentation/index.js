import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Logo, AskName, Card } from './styled'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
@inject('present')
@observer
class Present extends React.Component {
  componentWillMount () {
    this.props.present.getRoomData()
    this.props.present.getQuestion()
  }
  render () {
    return (
      <Container fluid>
        <Row>
          <Card className='justify-content-center'>
            <AskName className='m-5 text-center'>
              <h1>ASK #3.0</h1>
            </AskName>
            <div className='d-flex justify-content-center'>
              <Logo />
            </div>
            <div className='m-5'>
              <Link to='/'>
                <h1>ask.kmutt.ac.th</h1>
              </Link>
            </div>
          </Card>
          <Col sm='12' className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='text-center'>
              <h1>{this.props.present.roomName}</h1>
              <h1>PIN : {this.props.present.roomPin}</h1>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
Present.PropTypes = {
  present: PropTypes.shape({
    getRoomData: PropTypes.func.isRequired,
    roomName: PropTypes.string.isRequired,
    roomPin: PropTypes.string.isRequired,
    getQuestion: PropTypes.func.isRequired,
  }),
}

export default Present