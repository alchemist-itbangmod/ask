import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  margin-top: 25px;
  padding: 10px;
  border: 1px solid grey;
  height: 80vh;
`
const Card = styled.div`
  padding: 10px;
`
const CardOnScroll = styled.div`
  padding: 10px;
  overflow-y: scroll;
  height: 20vh;
`

const index = () => (
  <Box className="container">
    <h2>ROOM NAME</h2>
    <div className="card">
      <Card className="card-header">
        <div className="row">
          <div className="col text-left">
            <h3>Selected</h3>
          </div>
          <div className="col-2 text-right">
            <button className="btn btn-success point">SEND</button>
          </div>
        </div>
      </Card>
      <CardOnScroll className="card-block">
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </CardOnScroll>
    </div>
    <div className="card">
      <Card className="card-header">
        <div className="row">
          <div className="col text-left">
            <h3>Question</h3>
          </div>
          <div className="col-2 text-right">
            <button className="btn btn-primary point">Refresh</button>
          </div>
        </div>
      </Card>
      <CardOnScroll className="card-block">
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </CardOnScroll>
    </div>
  </Box>
)

export default index
