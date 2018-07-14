import React from 'react'
import OrgMonitor from '../components/org-monitor'
import OrgSetting from '../components/org-setting'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap'
import classnames from 'classnames'
import styled from 'styled-components'

const Card = styled.div`
  border-radius: 0.75rem !important;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .4);
  min-height:80vh;
`

const Title = styled.h3`
  position: absolute;
  left: 15px;
  top: 7px;
  // font-size: 24px;
  // font-weight: bold;
`

class OrgMonitorShow extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1',
    }
  }

  toggle (tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  render () {
    return (
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Card className='mt-2 rounded p-2'>
              <Nav tabs style={{ flexDirection: 'row-reverse', position: 'relative', marginLeft: 0, }}>
                <Title>
                  test
                </Title>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3', })}
                    onClick={() => { this.toggle('3') }}
                  >
                  Analyst
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2', })}
                    onClick={() => { this.toggle('2') }}
                  >
                  Setting
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1', })}
                    onClick={() => { this.toggle('1') }}
                  >
                  Question
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId='1'>
                  <OrgMonitor />
                </TabPane>
                <TabPane tabId='2'>
                  <Row>
                    <Col sm='6'>
                      <OrgSetting />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId='3'>
                  <Row>
                    <Col sm='12'>
                      <h4>Analyst component</h4>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default OrgMonitorShow
