import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import XLSX from 'xlsx'

export default class OrgAnalyst extends React.Component {
  state = {
    allQuestion: [
      { id: 1, question: 'Hi1' },
      { id: 2, question: 'Hi2' },
      { id: 3, question: 'Hi3' },
      { id: 4, question: 'Hi4' },
      { id: 5, question: 'Hi5' },
    ],
    selectQuestion: [],
    allUser: 0,
    cols: [{ name: 'A', key: 0 }, { name: 'B', key: 1 }, { name: 'C', key: 2 }],
    data: [
      [ 'id', 'name', 'value' ],
      [ 1, 'fame', 7262 ],
      [ 2, 'papop', 6969 ],
      [ 3, 'tiny', 9999 ],
    ],
  }
  testExport = () => {
    let worksheet = XLSX.utils.aoa_to_sheet(this.data)
    let newWorkbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(newWorkbook, worksheet, 'SheetJS')
  }
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
                      {this.state.allQuestion.length}
                    </h2>
                    <p>
                      AllQuestion
                    </p>
                  </Col>
                  <Col>
                    <h2>
                      {this.state.selectQuestion.length}
                    </h2>
                    <p>
                      SelectQuestion
                    </p>
                  </Col>
                  <Col>
                    <h2>
                      {this.state.allUser}
                    </h2>
                    <p>
                      AllUsers
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col />
                  <Col >
                    <Button color='danger' block onClick={() => this.testExport}>Export to excel</Button>
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
