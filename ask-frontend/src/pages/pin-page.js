import React from 'react'
import Link from 'gatsby-link'
import { Card, Container, Pin, H1 } from '../components/pin-page/pin'

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
            </form>
          </div>
        </Card>
        <Link to='/org-home-page/'>
          <p className='text-center text-info pt-4'>
            {`>>> if you want to create your room`}
          </p>
        </Link>
      </div>
    </div>
  </Container>
)

export default PinPage
