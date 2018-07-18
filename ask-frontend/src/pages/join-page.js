import React from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Container, Row, Col, Card } from 'reactstrap'
import { observer, inject } from 'mobx-react'

@inject(store => {
  console.log(store)
})
@observer
class JoinPage extends React.Component {
  componentWillMount () {
    this.props.name.initialJoin()
  }
  render () {
    return (
      <Container className='mt-5 pt-5'>
        <Row>
          <Col sm='12' md={{ size: 10, offset: 1, }}>
            <h2 className='text-center' >
              {`Welcome to`}
              <h2 className='text-center font-weight-normal'>{'"' + this.props.name.roomName + '"'}</h2>
            </h2>
            <Container>
              <Card body className='text-center' outline color='secondary'>
                <form>
                  <Input
                    type='text'
                    value={this.props.name.name}
                    onChange={this.props.name.changeInputName}
                    placeholder='Type your name'
                    name='name'
                    className='text-center mb-3'
                  />
                  <Button type='submit' color='primary' block>{'Let\'s ASK'}</Button>
                </form>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}

JoinPage.propTypes = {
  name: PropTypes.shape({
    handleSubmit: PropTypes.func.isRequired,
    initialJoin: PropTypes.func.isRequired,
    changeInputName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    themeTemplates: PropTypes.string.isRequired,
    roomName: PropTypes.string.isRequired,
  }),
}

export default JoinPage