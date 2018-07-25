import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('analy')

@observer
class OrgAnalyst extends React.Component {
  render () {
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col sm='10' xs='12'>
            <Card className='mt-3'>
              <CardHeader>Room Name</CardHeader>
              <CardBody>
                <CardTitle tag='h4' className='text-center mb-5'>Analyst</CardTitle>
                <Row className='text-center mb-5'>
                  <Col>
                    <h2>
                      {this.props.analy.allQuestion.length}
                    </h2>
                    <p>
                      AllQuestion
                    </p>
                  </Col>
                  <Col>
                    <h2>
                      {this.props.analy.selectionQuestion.length}
                    </h2>
                    <p>
                      SelectQuestion
                    </p>
                  </Col>
                  <Col>
                    <h2>
                      {this.props.analy.allUser}
                    </h2>
                    <p>
                      AllUser
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col />
                  <Col >
                    <Button color='danger' block onClick={() => this.props.analy.exportExcel()}>Export to excel</Button>
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
  analy: PropTypes.shape({
    exportExcel: PropTypes.func.isRequired,
    allQuestion: PropTypes.array.isRequired,
    selectionQuestion: PropTypes.array.isRequired,
    allUser: PropTypes.number.isRequired,
  }),
}

export default OrgAnalyst
