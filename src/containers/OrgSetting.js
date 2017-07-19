import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
// import Toggle from 'react-toggle'

const OrgSetting = prop => (
  <div className="container">
    <div className="row">
      <div className="col-12 h2 text-center">
        Room name
      </div>
      <div className="col-12">
        Title:
        <input type="text" />
      </div>
      <div className="col-12">
        PIN
        <input type="text" readOnly />
      </div>
      <div className="col-12">
        Open Sending
        <input type="checkbox" />
      </div>
    </div>
  </div>
)

const SettingCompose = compose(
)(OrgSetting)
export default SettingCompose
