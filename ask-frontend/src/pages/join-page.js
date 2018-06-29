import React from 'react'
import { CardBox } from '../components/styled-components/global'

const JoinPage = props => (
  <div className='container' style={{ paddingTop: 150, }}>
    <div className='row'>
      <div className='col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3'>
        <h2
          className='text-center'
          style={{
            color: 'black',
          }}
        >
          {`Welcome to`}
        </h2>
        <h4 className='text-center text-black'>{`"ROOM NAME"`}</h4>
        <CardBox
          className='card'
        >
          <div className='container pt-4'>
            <form>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control text-center'
                  placeholder='Enter asker name'
                  style={{
                    backgroundColor: 'rgba(211,211,211,0.8)',
                    borderRadius: 10,
                  }}
                />
              </div>
              <div className='row'>
                <div className='col-6'>
                  <button type='submit' className='btn btn-primary btn-block'>
                    JOIN ROOM
                  </button>
                </div>

                <div className='col-6'>
                  <button type='submit' className='btn btn-primary btn-block'>
                    Facebook
                  </button>
                </div>
              </div>
            </form>
          </div>
        </CardBox>
      </div>
    </div>
  </div>
)

export default JoinPage
