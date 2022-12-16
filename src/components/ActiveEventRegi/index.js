// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderYetToRegister = () => {
    console.log('yetToRegister')
    return (
      <div className="stat">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
          alt="yet to register"
        />
        <p>a live performance</p>
        <button type="button">Register</button>
      </div>
    )
  }

  renderRegistered = () => (
    <div className="stat">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <p>you have already registered for the event</p>
    </div>
  )

  renderClosed = () => (
    <div className="stat">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations-closed"
      />
      <p>registrations are closed now</p>
      <p>stay tuned </p>
    </div>
  )

  render() {
    const {regiStatus} = this.props

    switch (regiStatus) {
      case 'YET_TO_REGISTER':
        return this.renderYetToRegister()
      case 'REGISTERED':
        return this.renderRegistered()
      case 'REGISTRATIONS_CLOSED':
        return this.renderClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
