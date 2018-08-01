import React from 'react'
import api from '../utils/api'
import styled from 'styled-components'
import { BeatLoader } from 'react-spinners'
import Link, { navigateTo } from 'gatsby-link'
import {
  Navbar,
  Nav
} from 'reactstrap'
import color from './Core/color'
import { FacebookButton, Button } from './Core/global'
import Loader from './Core/Loader'
import { inject } from 'mobx-react'
import PropTypes from 'prop-types'

const CustomNavbar = styled(Navbar)`
  padding: 15px 20px;
  background: ${color.PURPLE};
  color: #fff;
`

@inject('org')
class Login extends React.PureComponent {
  state = {
    authStatus: 'checking',
    authResponse: null,
    fb_id: '',
    name: '',
    loginLoad: false,
  }

  static propTypes = {
    org: PropTypes.shape({
      isLogin: PropTypes.bool.isRequired,
      setAuth: PropTypes.func.isRequired,
    }),
  }

  async componentDidMount () {
    const name = localStorage.getItem('user')
    if (name) { this.setState({ name }) }
    const FB = await window.facebookSDKPromise
    FB.getLoginStatus((response) => {
      this.onAuthResponseChange(response)
      this.onStatusChange(response)
      FB.Event.subscribe(
        'auth.authResponseChange',
        this.onAuthResponseChange
      )
      FB.Event.subscribe(
        'auth.statusChange',
        this.onStatusChange
      )
    })
  }

  login = async () => {
    this.setState({ loginLoad: true })
    await new Promise(resolve => {
      window.FB.login(resolve, { scope: 'public_profile,email' })
    })
  }

  onAuthResponseChange = async ({ authResponse }) => {
    if (authResponse) {
      const data = await api.post('/auth/facebook', { accessToken: authResponse.accessToken })
      this.props.org.setAuth(true)
      localStorage.setItem('user', data.data.first_name)
      this.setState({
        name: data.data.first_name,
        fb_id: data.data.fb_id,
        loginLoad: false,
      })
    }
  }

  onStatusChange = ({ status }) => {
    this.setState({
      authStatus: status,
    })
    this.authStatus = status
  }

  logout = () => {
    api.get('/auth/logout')
    new Promise(resolve =>
      window.FB.logout(resolve)
    ).then(() => {
      this.props.org.setAuth(false)
      navigateTo('/organizer')
    })
    localStorage.removeItem('user')
  }

  render () {
    return (
      <React.Fragment>
        {this.state.authStatus === 'checking' && <Loader />}
        <CustomNavbar expand='md'>
          <Link className='text-white navbar-brand' to='/organizer'>ASK</Link>
          <Nav className='ml-auto'>
            {this.state.authStatus === 'unknown' && (
              <FacebookButton
                disabled={this.state.loginLoad}
                onClick={this.login}
              >
                {!this.state.loginLoad ? (
                  <span>Login with Facebook</span>
                ) : (
                  <BeatLoader margin='7px' color='#fff' />
                )}
              </FacebookButton>
            )}
            {this.state.authStatus === 'connected' && (
              <div>
                <span>สวัสดี, {this.state.name}</span>
                <Button onClick={this.logout} className='ml-2'>ออกจากระบบ</Button>
              </div>
            )}
          </Nav>
        </CustomNavbar>
      </React.Fragment>
    )
  }
}

export default Login
