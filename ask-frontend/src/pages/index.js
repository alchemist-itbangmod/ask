import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      <li>
        <Link to="/pin-page">Go to PinPage</Link>
      </li>
      <li>
        <Link to="/join-page">Go to JoinPage</Link>
      </li>
      <li>
        <Link to="/org-create-room-page">Go to OrgCreateRoom</Link>
      </li>
      <li>
        <Link to="/org-home-page">Go to OrgHomePage</Link>
      </li>
      <li>
        <Link to="/org-monitor">Go to OrgMonitor</Link>
      </li>
      <li>
        <Link to="/ask-page">Go to AskPage</Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
