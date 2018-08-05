import React from 'react'
import { Container, Row, Col, Card, CardBody, CardTitle, Button } from 'reactstrap'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('analyst')

@observer
class OrgAnalyst extends React.Component {
  get roomId () {
    return this.props.match.params.id
  }

  componentDidMount () {
    this.props.analyst.getAnalystData(this.roomId)
  }

  render () {
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col sm='10' xs='12'>
            <Card className='mt-4'>
              <CardBody>
                <CardTitle tag='h4' className='text-center mb-5'>Analyst</CardTitle>
                <Row className='text-center mb-5'>
                  <Col>
                    <h2>
                      {this.props.analyst.allQuestion}
                    </h2>
                    <p>
                      AllQuestions
                    </p>
                  </Col>
                  <Col>
                    <h2>
                      {this.props.analyst.answeredQuestions}
                    </h2>
                    <p>
                      SelectedQuestions
                    </p>
                  </Col>
                  <Col>
                    <h2>
                      {this.props.analyst.allUser}
                    </h2>
                    <p>
                      Asker
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col />
                  <Col >
                    <Button color='danger' block onClick={() => this.props.analyst.exportToExcel(this.props.match.params.id)}>Export to excel</Button>
                  </Col>
                  <Col />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

OrgAnalyst.propTypes = {
  analyst: PropTypes.shape({
    exportToExcel: PropTypes.func.isRequired,
    allQuestion: PropTypes.array.isRequired,
    answeredQuestions: PropTypes.array.isRequired,
    allUser: PropTypes.number.isRequired,
  }),
}

export default OrgAnalyst
