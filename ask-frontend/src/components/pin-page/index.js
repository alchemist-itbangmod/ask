import React from 'react'
import { Card, Container, Pin, H1 } from './pin'

const PinPage = props => (
  <Container className='container'>
    <div className='row'>
      <div className='col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3'>
        <H1 className='text-center' > #ASK </H1>
        <Card className='card'>
          <div className='container pt-4'>
            <form>
              <div className='form-group'>
                <Pin
                  type='text'
                  className='form-control text-center'
                  placeholder='Enter room PIN'
                />
              </div>

              <button className='btn btn-primary btn-block'>ENTER ROOM</button>
              <button className='btn btn-success btn-block'>CREATE ROOM</button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  </Container>
)

export default PinPage
