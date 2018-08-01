import React from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Container, Row, Col, Card } from 'reactstrap'
import { observer, inject } from 'mobx-react'

@inject(store => ({
  handleSubmit: store.ask.handleSubmit,
  name: store.ask.name,
  changeInputName: store.ask.changeInputName,
  roomName: store.ask.roomName,
}))
@observer
class JoinPage extends React.Component {
  render () {
    return (
      <Container className='mt-5 pt-5'>
        <Row className='justify-content-center'>
          <Col xs='12' md='8'>
            <h2 className='text-center' >
              {`Welcome to`}
              <p className='text-center font-weight-normal'>{`"${this.props.roomName}"`}</p>
            </h2>
            <Card body className='text-center' outline>
              <form onSubmit={this.props.handleSubmit}>
                <Input
                  type='text'
                  value={this.props.name}
                  onChange={this.props.changeInputName}
                  placeholder='Type your name'
                  name='name'
                  className='text-center mb-1'
                  required
                  maxLength='50'
                />
                <div className='text-right'>
                  {50 - this.props.name.length}
                </div>
                <Button type='submit' color='primary' block>{`Let's ASK`}</Button>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

JoinPage.propTypes = {
  roomName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  changeInputName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}
JoinPage.defaultProps = {
  roomName: '',
  handleSubmit: () => null,
  changeInputName: () => null,
  name: '',
}

export default JoinPage