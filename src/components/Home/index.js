import {Component} from 'react'
import Cookies from 'js-cookie'

import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'
import WatchContext from '../WatchContext'
import {
  RightBg,
  LiItem1,
  ButtonSearch,
  SearchContainer,
  InputEl,
  NoVidContainer,
} from './styledComponents'
import './index.css'

import Header from '../Header'

import SideBar from '../SideBar'

const apiStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchVal: '',
    videoList: [],
    checkApi: apiStatus.loading,
    searchVideoStatus: apiStatus.success,
  }

  componentDidMount = () => {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({checkApi: apiStatus.loading})

    const token = Cookies.get('jwt_token')

    const {searchVal} = this.state

    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchVal}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

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

      this.setState({videoList: updatedData, checkApi: apiStatus.success})
    } else {
      this.setState({checkApi: apiStatus.failure})
    }
  }

  searchValFunc = event => {
    this.setState({searchVal: event.target.value})
  }

  searchVid = () => {
    this.fetchVideos()
  }

  displayVidoesView = lightMode => {
    const {videoList} = this.state

    return (
      <div>
        <ul className="vidElement">
          {videoList.map(each => (
            <LiItem1 tColor={lightMode} key={each.id}>
              <Link
                className="no-style-link"
                to={`/videos/${each.id}`}
                onClick={() => console.log(each.id)}
              >
                <div className="eachVideo">
                  <img
                    src={each.thumbnailUrl}
                    className="thumbnail"
                    alt="thumbnail url"
                  />

                  <div className="vidTextEl">
                    <img
                      src={each.channel.profileImageUrl}
                      alt="channel logo"
                      className="channelImg"
                    />
                    <div>
                      <p className="headTitle">{each.title}</p>
                      <p>{each.channel.name}</p>
                      <div className="timeElement">
                        <p>{each.viewCount}</p>

                        <p>{each.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </LiItem1>
          ))}
        </ul>
      </div>
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

  renderView = lightMode => {
    const {checkApi, videoList} = this.state

    switch (checkApi) {
      case apiStatus.loading:
        return this.loadingView()

      case apiStatus.failure:
        return this.failureView(lightMode)

      case apiStatus.success:
        return videoList.length === 0
          ? this.noVideos(lightMode)
          : this.displayVidoesView(lightMode)

      default:
        return null
    }
  }

  noVideos = lightMode => (
    <NoVidContainer tColor1={lightMode}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        className="noVids"
      />
      <h1>No Search Results Found</h1>
      <p>Try different key words or remove search filter</p>
    </NoVidContainer>
  )

  render() {
    return (
      <>
        <div className="app-container">
          <Header />
          <div className="mainBg">
            <SideBar />
            <WatchContext.Consumer>
              {value => {
                const {lightMode} = value

                return (
                  <RightBg lightMode={lightMode}>
                    <SearchContainer>
                      <InputEl
                        inputBg={lightMode}
                        type="search"
                        onChange={this.searchValFunc}
                        placeholder="Search"
                      />
                      <ButtonSearch
                        searchBg={lightMode}
                        onClick={this.searchVid}
                        data-testid="searchButton"
                      >
                        <FaSearch style={{marginRight: '8px'}} />
                      </ButtonSearch>
                    </SearchContainer>

                    <div className="bg-vid">{this.renderView(lightMode)}</div>
                  </RightBg>
                )
              }}
            </WatchContext.Consumer>
          </div>
        </div>
      </>
    )
  }
}

export default Home
