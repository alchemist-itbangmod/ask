import React from 'react'
import { Card, Button, TextArea, Name } from '../components/ask-page/ask'

class AskPage extends React.Component {
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
                  <Button type='submit' className='btn btn-primary btn-block'>
                SEND
                  </Button>
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