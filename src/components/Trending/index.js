import {Component} from 'react'

import {MdWhatshot} from 'react-icons/md'

import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'
import {
  VideoContainer,
  RightContainer,
  NavBar1,
  HeadTag,
  TextContainer,
} from './styledComponents'
import './index.css'
import SideBar from '../SideBar'
import Header from '../Header'
import WatchContext from '../WatchContext'

const apiStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {videoList1: [], checkApi: apiStatus.loading}

  componentDidMount = () => {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({checkApi: apiStatus.loading})

    const token = Cookies.get('jwt_token')

    const response = await fetch('https://apis.ccbp.in/videos/trending', {
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,

        publishedAt: each.published_at,
      }))

      this.setState({videoList1: updatedData, checkApi: apiStatus.success})
    } else {
      this.setState({checkApi: apiStatus.failure})
    }
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

  displayVidoesView = lightMode => {
    const {videoList1} = this.state
    return (
      <>
        <div>
          {videoList1.map(each => (
            <Link className="liItem1" to={`/videos/${each.id}`}>
              <VideoContainer key={each.id}>
                <div>
                  <img
                    src={each.thumbnailUrl}
                    className="thumbnail_img"
                    alt="video thumbnail"
                  />
                </div>
                <TextContainer textcolor={lightMode}>
                  <p>{each.title}</p>
                  <p>{each.channel.name}</p>

                  <div>
                    <p>
                      {each.viewCount}
                      <span>views</span>
                    </p>
                    <p>{each.publishedAt}</p>
                  </div>
                </TextContainer>
              </VideoContainer>
            </Link>
          ))}
        </div>
      </>
    )
  }

  renderView = lightMode => {
    const {checkApi} = this.state

    switch (checkApi) {
      case apiStatus.loading:
        return this.loadingView()

      case apiStatus.failure:
        return this.failureView()

      case apiStatus.success:
        return this.displayVidoesView(lightMode)

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
            <div className="app-container">
              <Header />
              <div className="mainBg2">
                <SideBar />
                <RightContainer bgColor={lightMode}>
                  <NavBar1 className="navBarEl" bgcolor={lightMode}>
                    <MdWhatshot />
                    <HeadTag tcolor={lightMode}>Trending</HeadTag>
                  </NavBar1>
                  <div>{this.renderView(lightMode)}</div>
                </RightContainer>
              </div>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Trending
