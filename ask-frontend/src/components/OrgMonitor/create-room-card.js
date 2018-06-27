import React from 'react'

const CreateRoomCard = props => (
  <div>
    <div className='container'>
      <div
        className='card'
        style={{
          marginTop: 20,
          backgroundColor: 'rgba(255,255,255,0.8)',
        }}
      >
        <div className='card-block'>
          <form>
            <div className='container pt-3 pl-4'>
              <div className='col-10'>
                <h1>Create Room</h1>
              </div>
            </div>
            <div className='row pl-4 pr-4'>
              <div className='col-10 pl-4'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter room name'
                  />
                </div>
              </div>
              <div className='col-2'>
                <div className='form group'>
                  <div
                    className='btn-group'
                    role='group'
                    aria-label='Basic example'
                  >
                    <button
                      type='button'
                      className={
                        'btn btn-secondary ' +
                        (props.isOpen ? 'active' : 'point')
                      }
                    >
                      {'Open'}
                    </button>
                    <button
                      type='button'
                      className={
                        'btn btn-secondary ' +
                        (!props.isOpen ? 'active' : 'point')
                      }
                    >
                      {'Close'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row pl-5 pr-5'>
              <button type='submit' className='btn btn-success btn-block point'>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default CreateRoomCard
