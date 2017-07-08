import React from 'react'
import styled from 'styled-components'

import Nav from './NavdevOrganizer'
import NavOrganizer from './NavbarOrganizer'

const ButtonTrash = styled.button`
  cursor: pointer;
  float: right;
  display: block;
`

const Card = styled.button`
  padding: 20px;
  margin: 10px 0;
  display: block;
`
const Div = styled.div`
  margin-top: 20px;
`

export default props => (
  <div>
    <Nav />
    <NavOrganizer />
    <Div className="container-fluid">
      <div className="row">
        <div className="left-side col-sm-8">
          <div className="card">
            <div className="card-header text-center">
              <h4>Question</h4>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="col-10">
                  Cras justo odio
                </div>
                <div className="col-2">
                  <ButtonTrash className="card">
                    <i className="fa fa-trash fa-2x" aria-hidden="true" />
                  </ButtonTrash>
                </div>
              </li>
              <li className="list-group-item">
                <div className="col-10">
                  Dapibus ac facilisis in
                </div>
                <div className="col-2">
                  <ButtonTrash className="card">
                    <i className="fa fa-trash fa-2x" aria-hidden="true" />
                  </ButtonTrash>
                </div>
              </li>
              <li className="list-group-item">
                <div className="col-10">
                  Vestibulum at eros
                </div>
                <div className="col-2">
                  <ButtonTrash className="card">
                    <i className="fa fa-trash fa-2x" aria-hidden="true" />
                  </ButtonTrash>
                </div>
              </li>
              <li className="list-group-item">
                <div className="col-10">
                  Vestibulum at eros
                </div>
                <div className="col-2">
                  <ButtonTrash className="card">
                    <i className="fa fa-trash fa-2x" aria-hidden="true" />
                  </ButtonTrash>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side col-sm-4">
          <form action="" method="post">
            <div className="title text-center">
              <h4>Selected Question</h4>
              ( MAX 5 )
            </div>
            <div>
              <Card className="card col-12 btn">
                Question 1
              </Card>
              <Card className="card col-12">
                Question 2
              </Card>
            </div>
            <div className="btn-group col-12">
              <button type="button" className="btn btn-warning col-6">CLEAR</button>
              <button type="button" className="btn btn-primary col-6">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </Div>
  </div>
)
