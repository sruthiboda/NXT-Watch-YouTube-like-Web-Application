import {FaMoon, FaSun} from 'react-icons/fa'
import './index.css'

import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'
import {NavBar12, Button} from './styledComponents'
import WatchContext from '../WatchContext'

const Header = () => {
  const history = useHistory()

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.push('/login')
  }
  return (
    <WatchContext.Consumer>
      {value => {
        const {changeMode, lightMode} = value

        const clickMode = () => {
          changeMode()
        }

        return (
          <div className="mainNav">
            <NavBar12 bgColor={lightMode}>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                  className="logoN"
                />
              </div>

              <div className="rightNav">
                <button type="button" className="modeBtn" data-testid="theme">
                  {lightMode ? (
                    <FaMoon onClick={clickMode} role="button" />
                  ) : (
                    <FaSun
                      onClick={clickMode}
                      role="button"
                      style={{color: 'white', size: '30px'}}
                    />
                  )}
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  className="profile"
                />

                <Button colorBg89={lightMode} onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </NavBar12>
          </div>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default Header
