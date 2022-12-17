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
        <p>A live performance brings so much to your relationship with dance</p>
        <button type="button">Register Here</button>
      </div>
    )
  }

  renderRegistered = () => (
    <div className="stat">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  renderClosed = () => (
    <div className="stat">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen </p>
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
