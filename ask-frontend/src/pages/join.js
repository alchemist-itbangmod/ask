import React from 'react'
import { observable, action } from 'mobx'
import { Div, CardBox, H2, Input } from '../components/join-page/join'

class Name {
  @observable name = ''

  @action
  changeInputName = e => {
    this[e.target.name] = e.target.value
  }

  @action
  handleSubmit = e => {
    e.preventDefault()
    console.log('name : ', this.name)
  }
}

const store = new Name()

const JoinPage = props => (
  <Div className='container'>
    <div className='row'>
      <div className='col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3'>
        <H2 className='text-center' >
          {`Welcome to`}
        </H2>
        <h4 className='text-center text-black'>{`"ROOM NAME"`}</h4>
        <CardBox
          className='card'
        >
          <div className='container pt-4'>
            <form onSubmit={store.handleSubmit}>
              <div className='form-group'>
                <Input
                  type='text'
                  className='form-control text-center'
                  placeholder='Enter asker name'
                  name='name'
                  value={store.name}
                  onChange={store.changeInputName}
                />
              </div>
              <div className='row'>
                <div className='col-12'>
                  <button type='submit' className='btn btn-primary btn-block'>
                    JOIN ROOM
                  </button>
                </div>
              </div>
            </form>
          </div>
        </CardBox>
      </div>
    </div>
  </Div>
)

export default JoinPage