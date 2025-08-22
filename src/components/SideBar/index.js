import {AiFillHome} from 'react-icons/ai'
import {SiPlaystation} from 'react-icons/si'
import {MdWhatshot, MdWatchLater} from 'react-icons/md'

import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'
import {LiItem, MainContainer, FooterSec} from './styledComponents'
import WatchContext from '../WatchContext'
import './index.css'

class SideBar extends Component {
  state = {activeIndex: 0}

  colorChange = index => {
    this.setState({activeIndex: index})
  }

  render() {
    const {location} = this.props
    const currentPath = location.pathname

    const buttons = [
      {name: 'Home', path: '/', icon: <AiFillHome />},
      {name: 'Trending', path: '/trending', icon: <SiPlaystation />},
      {name: 'Gaming', path: '/gaming', icon: <MdWhatshot />},
      {name: 'Saved Videos', path: '/saved-videos', icon: <MdWatchLater />},
    ]

    return (
      <WatchContext.Consumer>
        {value => {
          const {lightMode} = value

          return (
            <MainContainer mode={lightMode}>
              <ul className="sidebarEl">
                {buttons.map((label, index) => (
                  <LiItem
                    key={label.name}
                    as={Link}
                    to={label.path}
                    onClick={() => this.colorChange(index)}
                    isactive={label.path === currentPath}
                    mode={lightMode ? 'white' : '#313131'}
                    textColor={lightMode}
                  >
                    {label.icon}
                    <span className="sideElements">{label.name}</span>
                  </LiItem>
                ))}
              </ul>
              <FooterSec tColor={lightMode}>
                <p>CONTACT US</p>
                <div className="logosDown">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="imgLogos"
                  />

                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="imgLogos"
                  />

                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="imgLogos"
                  />
                </div>
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </FooterSec>
            </MainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
