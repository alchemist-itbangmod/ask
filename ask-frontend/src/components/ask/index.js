import React from 'react'
import { Card, Button, TextArea, Name } from './ask'

class AskPage extends React.Component {
  state = {
    themeTemplates: '',
    question: [],
    anonymous: false,
    roomId: '',
    showNoti: false,
    status: '',
  }

  render () {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-10 col-md-8'>
            <h2
              className='text-right mt-5'
            >
          Question
            </h2>
            <form >
              <Card className='card'>
                <div className='form-group m-2'>
                  <Name className='text-right'>Hi, Alchemist</Name>
                  <TextArea
                    rows='5'
                    className='form-control'
                  />
                  <div className='row'>
                    <div className='col-7 col-sm-8 col-md-8 pl-5'>
                      <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                      <label className='form-check-label' htmlFor='exampleCheck1'>Send as anonymous</label>
                    </div>
                    <div className='col-5 col-sm-4 col-md-4'>
                      <Button type='submit' className='btn btn-primary btn-block'>SEND</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AskPage