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

const ScrollBox = styled.ul`
  display: block;
  height: 80vh;
  overflow-y: scroll;
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
            <ScrollBox className="list-group list-group-flush">
              {
                [1, 2, 3].map(e => (
                  <li className="list-group-item">
                    <div className="col-10">
                      Cras justo odio {e}
                    </div>
                    <div className="col-2">
                      <ButtonTrash className="card">
                        <i className="fa fa-trash fa-2x" aria-hidden="true" />
                      </ButtonTrash>
                    </div>
                  </li>
                ))
              }
            </ScrollBox>
          </div>
        </div>
        <div className="right-side col-sm-4">
          <form action="" method="post">
            <div className="title text-center">
              <h4>Selected Question</h4>
              ( MAX 5 )
            </div>
            <div>
              {
                [1, 2, 3, 4, 5].map(e => (
                  <Card className="card col-12 btn">
                    Question {e}
                  </Card>
                ))
              }
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
