import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import {SiXbox} from 'react-icons/si'
import Cookies from 'js-cookie'
import Header from '../Header'
import {NavBar1, HeadTag, RightContainer, EachGame} from './styledComponents'
import WatchContext from '../WatchContext'

import SideBar from '../SideBar'

import './index.css'

const apiStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamesList: [],
    checkApi: apiStatus.loading,
  }

  componentDidMount = () => {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({checkApi: apiStatus.loading})

    const token = Cookies.get('jwt_token')

    const response = await fetch('https://apis.ccbp.in/videos/gaming', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,

        viewCount: each.view_count,
      }))

      this.setState({gamesList: updatedData, checkApi: apiStatus.success})
    } else {
      this.setState({checkApi: apiStatus.failure})
    }
  }

  displayGamesView = lightMode => {
    const {gamesList} = this.state
    return (
      <RightContainer bgcolor={lightMode}>
        {gamesList.map(each => (
          <Link className="linkItem" to={`/videos/${each.id}`}>
            <EachGame key={each.id} color1={lightMode}>
              <img
                src={each.thumbnailUrl}
                className="gameImg"
                alt="video thumbnail"
              />

              <p>{each.title}</p>
              <p>{`${each.viewCount}Watching WorldWide`}</p>
            </EachGame>
          </Link>
        ))}
      </RightContainer>
    )
  }

  loadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  failureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble</p>
      <button type="button" onClick={this.fetchVideos}>
        Retry
      </button>
    </div>
  )

  renderGames = lightMode => {
    const {checkApi} = this.state

    switch (checkApi) {
      case apiStatus.loading:
        return this.loadingView()

      case apiStatus.failure:
        return this.failureView()

      case apiStatus.success:
        return this.displayGamesView(lightMode)

      default:
        return null
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {lightMode} = value

          return (
            <div className="mainDiv">
              <Header />
              <div className="mainBg2">
                <SideBar />
                <div className="rightGamesDiv">
                  <NavBar1 bgcolor={lightMode}>
                    <SiXbox />
                    <HeadTag tcolor={lightMode}>Gaming</HeadTag>
                  </NavBar1>

                  {this.renderGames(lightMode)}
                </div>
              </div>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Gaming
