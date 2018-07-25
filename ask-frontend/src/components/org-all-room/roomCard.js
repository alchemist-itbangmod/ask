import React from 'react'
import { Card, Container, Row, Col, Button } from 'reactstrap'
import Link from 'gatsby-link'

class RoomCard extends React.Component {
    render(){
      return(
        <Container>
            <Row className='m-2'>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Card>
                        <Row>
                            <Col>
                                <h3 className='p-3'>Name Room</h3>
                            </Col>
                            <Col className='text-right p-3 mr-3' >
                                <Link  to='/org-monitor/'>  
                                    <Button outline color='secondary'>
                                        Manage
                                    </Button>
                                </Link>
                                <Link className='pl-3' to='/org-present-page/'>  
                                    <Button outline color='secondary'>
                                        Presentation
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
      )}}

export default RoomCard