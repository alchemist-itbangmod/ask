import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Form } from 'reactstrap'
import { Input, BottomContent, Logo, ErrorMessage, H1 } from './styled'
import { observer, inject } from 'mobx-react'
import Link from 'gatsby-link'
import logo from '../../static/img/ask-logo.png'

@inject('pin')
@observer
class PinComponent extends React.Component {
  render () {
    return (
      <Container>
        <div style={{
          minHeight: '95vh',
          position: 'relative',
          paddingBottom: '20px',
        }}>
          <Row className={`pt-5 text-center justify-content-center`}>
            <Col xs={12}>
              <Logo bg={logo} />
            </Col>
            <Col xs={12} className='mt-3'>
              {this.props.pin.loading && 'loading...'}
              {!this.props.pin.error ? (
                <H1>{`Type room's code`}</H1>
              ) : (
                <ErrorMessage>{`Invalid code, please try again`}</ErrorMessage>
              )}
            </Col>
            <Col xs={12} sm={7} md={6}>
              <Form
                innerRef={node => this.props.pin.setFormRef(node)}
              >
                <Row className='px-2'>
                  {[ 1, 2, 3, 4 ].map(ech => (
                    <Input
                      key={ech}
                      _ref={node => ech === 1 && this.props.pin.setFirstInput(node)}
                      onKeyUp={this.props.pin.handleKeyup}
                      pattern='[0-9]*'
                      maxLength={1}
                    />
                  ))}
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
        <BottomContent>
        create your own ASK for free via <Link to='/organizer'>ask.kmutt.ac.th/organizer</Link>
        </BottomContent>
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
