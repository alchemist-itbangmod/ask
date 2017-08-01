import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './static/bootstrap/bootstrap.min.css'
import '../node_modules/sweetalert2/dist/sweetalert2.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import BG from './static/images/bg-us.png'

import {
  PinPage,
  JoinPage,
  AskPage,
  OrgPage,
  NotFoundPage
} from './containers'

injectGlobal([`
  html {
    height: 100%;
  }

  body {
    background: url(${BG}) no-repeat center center fixed;
    background-size: cover;
    min-height: 100%;
  }

  #root {
    // background: rgba(81,99,149,0.9) no-repeat center center fixed;
    // background: linear-gradient(to right, rgba(81,99,149,0.2), rgba(97,67,133,0.2))  no-repeat center center fixed;
    min-height: 100%;
  }

  .fade-appear,
  .fade-enter {
    opacity: 0;
  }

  .fade-appear-active,
  .fade-enter-active {
    transition: all .4s;
    opacity: 1;
  }

  .fade-exit {
    transition: all .3s;
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
  }

  .page-main {
    position: relative;
    width: 100%;
    margin: 0px auto;
  }

  .page-main-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`])

const App = props => {
  const currentKey = props.location.pathname.split('/')[1] || '/'
  const timeout = { enter: 400, exit: 300 }

  return (
    <div>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <section className="page-main-inner">
            <Switch location={props.location}>
              <Route exact path="/" component={PinPage} />
              <Route path="/join" component={JoinPage} />
              <Route path="/ask" component={AskPage} />
              <Route path="/organizer" component={OrgPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(App)
