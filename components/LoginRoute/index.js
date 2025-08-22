import {Component} from 'react'

import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginRoute extends Component {
  state = {user: '', pass: '', showPassword: false, showError: ''}

  handleUser = e => {
    this.setState({user: e.target.value})
  }

  handlePass = e => {
    this.setState({pass: e.target.value})
  }

  toggleShowPass = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  LoginFunc = async e => {
    e.preventDefault()

    const {user, pass} = this.state

    const url = 'https://apis.ccbp.in/login'
    try {
      const options = {
        method: 'POST',

        body: JSON.stringify({username: user, password: pass}),
      }

      const response = await fetch(url, options)
      const data = await response.json()

      console.log(data)

      if (response.ok) {
        const jwtToken = data.jwt_token
        Cookies.set('jwt_token', jwtToken, {expires: 10})

        const {history} = this.props
        history.push('/')
      } else {
        this.setState({showError: data.error_msg})
      }
    } catch (error) {
      this.setState({showError: error})
    }
  }

  render() {
    const {pass, user, showPassword, showError} = this.state

    return (
      <div className="mainBgs">
        <div className="loginContainer">
          <form className="formEL" onSubmit={this.LoginFunc}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
              className="imgLogo"
            />

            <label className="labels1" htmlFor="user1">
              USERNAME
            </label>
            <input
              type="text"
              id="user1"
              placeholder="Username"
              onChange={this.handleUser}
              value={user}
            />

            <label className="labels1" htmlFor="pass1">
              PASSWORD
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              id="pass1"
              onChange={this.handlePass}
              value={pass}
            />

            <div>
              <input
                type="checkbox"
                id="showtext"
                onChange={this.toggleShowPass}
              />
              <label htmlFor="showtext">Show Password</label>
            </div>

            <button type="submit" className="btnLogin">
              Login
            </button>
          </form>
          {showError && <p>{showError}</p>}
        </div>
      </div>
    )
  }
}

export default withRouter(LoginRoute)
