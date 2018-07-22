import React from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Container, Row, Col, Card } from 'reactstrap'
import { observer, inject } from 'mobx-react'

@inject(store => ({
  roomName: store.ask.roomName,
  handleSubmit: store.ask.handleSubmit,
  changeInputName: store.ask.changeInputName,
  initialJoin: store.ask.initialJoin,
  name: store.ask.name,
}))
@observer
class JoinPage extends React.Component {
  componentWillMount () {
    console.log(this.props)
    // this.props.initialJoin()
    // console.log('props', this.props)
  }
  render () {
    return (
      <Container className='mt-5 pt-5'>
        <Row>
          <Col sm='12' md={{ size: 10, offset: 1 }}>
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
                  className='text-center mb-3'
                  required
                />
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
  join: PropTypes.shape({
    handleSubmit: PropTypes.func.isRequired,
    initialJoin: PropTypes.func.isRequired,
    changeInputName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    themeTemplates: PropTypes.string.isRequired,
    roomName: PropTypes.string.isRequired,
  }),
}

export default JoinPage