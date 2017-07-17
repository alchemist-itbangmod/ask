import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers } from 'recompose'
import NavOrganizer from './NavdevOrganizer'

const BlockForm = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -40%);
`

const OrganizerLogin = props => (
  <div>
    <NavOrganizer />
    <BlockForm className="container">
      <form action="" method="post">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <h2>Monitor Login #ASK</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center" style={{ marginBottom: '10px' }}>
          <div className="col-sm-8">
            <label className="sr-only" htmlFor="username">Username</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <div className="input-group-addon"><i className="fa fa-user" /></div>
              <input type="text" name="username" className="form-control" placeholder="Username" required />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <div className="form-group">
              <label className="sr-only" htmlFor="password">Password</label>
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" ><i className="fa fa-key" /></div>
                <input type="password" name="password" className="form-control" id="password" placeholder="Password" required />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center hide">
          <div className="col-sm-8 alert alert-danger text-center " role="alert">
            <strong>Oops!</strong> Look like username or password incorrect
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="form-check mb-2 mr-sm-2 mb-sm-0">
              <label className="form-check-label">
                <input className="form-check-input" name="remember" type="checkbox" />
                <span >Remember me</span>
              </label>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <button type="submit" className="btn btn-success btn-block">Login</button>
          </div>
        </div>
      </form>
    </BlockForm>
    <style>{`
      .hide{
        display: none;
      }  
      .fa{
        width: 16px;
        height: 16px;
        display: block
      }
    `}</style>
  </div>
)

const OrganizerLoginCompose = compose(
  withHandlers({
    testSocket: props => () => {
      console.log('Hi')
      // io.emit('hello-world', { data: 'hi' })
    }
  })
)(OrganizerLogin)

export default OrganizerLoginCompose
