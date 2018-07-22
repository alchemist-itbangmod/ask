import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Form } from 'reactstrap'
import { Input, BottomContent, Logo, ErrorMessage } from '../styled-components/Pin'
import { observer, inject } from 'mobx-react'

@inject('pin')
@observer
class PinComponent extends React.Component {
  render () {
    return (
      <Container>
        <Row className={`mt-5 text-center`}>
          <Col xs={12}>
            <Logo />
          </Col>
          <Col xs={12}>
            {!this.props.pin.error ? (
              <h1>{`Type room's code`}</h1>
            ) : (
              <ErrorMessage>{`Invalid code, please try again`}</ErrorMessage>
            )}
          </Col>
          <Col xs={12}>
            <Form
              innerRef={node => this.props.pin.setFormRef(node)}
            >
              {[ 1, 2, 3, 4 ].map(ech => (
                <Input
                  key={ech}
                  _ref={node => ech === 1 && this.props.pin.setFirstInput(node)}
                  onKeyUp={this.props.pin.handleKeyup}
                  pattern='[0-9]*'
                  maxLength={1}
                />
              ))}
            </Form>
          </Col>
          <BottomContent>
            create your own ASK for free via ask.kmutt.ac.th/organizer
          </BottomContent>
        </Row>
      </Container>
    )
  }
}

PinComponent.propTypes = {
  pin: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    setFormRef: PropTypes.func.isRequired,
    setFirstInput: PropTypes.func.isRequired,
    handleKeyup: PropTypes.string.isRequired,
  }),
}

export default PinComponent
