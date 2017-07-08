import React from 'react'
import styled from 'styled-components'
import swal from 'sweetalert2'

import Navbar from './Navbar'

// style.css component
const SentButton = styled.button`
  background-color: #FF4312;
  border: 0;
  border-radius: 22px;
  padding-top: 8px;
  padding-bottom: 8px; 
`

const Box = styled.div`
  margin-top: 150px;
  border-radius: 10px;
`

const AskPage = props => (
  <div>
    <Navbar />
    <div className="container">
      <div className="text-center">
        <Box className="form-group">
          <label htmlFor="exampleTextarea">"Hi! เขมนิจ"</label>
          <textarea className="form-control" placeholder="Question here"  id="exampleTextarea" rows="3"></textarea>
        </Box>
        <SentButton type="button" className="btn btn-primary btn-sm btn-block" 
          onClick = {() => 
            swal({
              title: 'Are you sure',
              text: '',
              showCancelButton: true,
              reverseButtons: true,
              confirmButtonText: 'Confirm',
              confirmButtonColor: '#FF4312',
              customClass: 'btn'
            }) .then(function () {
              swal(
                'Sucess',
                'You question has been sent!',
                'success'
              )
            })
          }
        >Sent</SentButton>
      </div>
    </div>
  </div>
)

export default AskPage
