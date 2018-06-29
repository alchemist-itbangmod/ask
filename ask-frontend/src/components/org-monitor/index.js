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
  overflow-x:hidden;
`

const index = () => (
  <Box className='container'>
    <h2>ROOM NAME</h2>
    <div className='card'>
      <Card className='card-header'>
        <div className='row'>
          <div className='col-sm-6 text-left'>
            <h3>Selected</h3>
          </div>
          <div className='col-sm-6 text-right'>
            <button className='btn btn-success point'>
              {'SEND'} <span className='badge badge-default'>10</span>
            </button>
          </div>
        </div>
      </Card>
      <CardOnScroll className='card-block'>
        {[ 1, 2, 3, 4, 5, ].map((item, index) =>
          <li className='row' key={index}>
            <p className='col-6'>อิอิ</p>
            <i className='text-right col-6 fa fa-trash' />
          </li>)
        }
      </CardOnScroll>
    </div>
    <div className='card'>
      <Card className='card-header'>
        <div className='row'>
          <div className='col-sm-6 text-left'>
            <h3>Question</h3>
          </div>
          <div className='col-sm-6 text-right'>
            <button className='btn btn-info pull-right point'>
              <i className='fa fa-refresh' />
              {` Refresh `}
              <span className='badge badge-default'>10</span>
            </button>
          </div>
        </div>
      </Card>
      <CardOnScroll className='card-block'>
        {[ 1, 2, 3, 4, 5, ].map((item, index) =>
          <li className='row' key={index}>
            <p className='col-6'>อิอิ</p>
            <i className='text-right col-6 fa fa-trash' />
          </li>)
        }
      </CardOnScroll>
    </div>
  </Box>
)

export default index
