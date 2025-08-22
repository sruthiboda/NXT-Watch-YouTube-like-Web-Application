import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import SideBar from '../SideBar'
import './index.css'
import {
  Button12,
  TextDiv,
  GameDiv,
  RightGameContainer,
} from './styledComponents'
import WatchContext from '../WatchContext'
import Header from '../Header'

const apiStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    checkApi: apiStatus.loading,
    videoDetailsArray: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount = () => {
    this.fetchVideoDetails()
  }

  fetchVideoDetails = async () => {
    this.setState({checkApi: apiStatus.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(id)

    const token = Cookies.get('jwt_token')

    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()

    if (response.ok) {
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileIamgeUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        videoDetailsArray: updatedData,
        checkApi: apiStatus.success,
      })
      console.log(updatedData.videoUrl)
    } else {
      this.setState({checkApi: apiStatus.failure})
    }
  }

  ChangeUnlike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: prevState.isLiked ? !prevState.isLiked : false,
    }))
  }

  ChangeLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: prevState.isDisliked ? !prevState.isDisliked : false,
    }))
  }

  displayVideoDetails = () => {
    const {videoDetailsArray, isLiked, isDisliked} = this.state

    return (
      <WatchContext.Consumer>
        {value => {
          const {savingVids, savedVideos, removeSavingVids, lightMode} = value

          const isSaved = savedVideos.some(
            vid => vid.id === videoDetailsArray.id,
          )

          return (
            <RightGameContainer colorMode={lightMode}>
              <ReactPlayer
                className="reactPlayer12"
                url={videoDetailsArray.videoUrl}
                controls
                width="95%"
                height="500px"
              />
              <p style={{'margin-left': '9px'}}>{videoDetailsArray.title}</p>
              <div className="timeDate">
                <div className="dateEl">
                  <p>{`${videoDetailsArray.viewCount} views`}</p>
                  <p>{videoDetailsArray.publishedAt}</p>
                </div>

                <div className="icons">
                  <Button12
                    className="btn12"
                    onClick={this.ChangeLike}
                    toggleColor={isLiked}
                  >
                    <AiOutlineLike /> Like
                  </Button12>
                  <Button12
                    className="btn12"
                    onClick={this.ChangeUnlike}
                    toggleColor={isDisliked}
                  >
                    <AiOutlineDislike />
                    Dislike
                  </Button12>
                  <Button12
                    className="btn12"
                    onClick={() =>
                      isSaved
                        ? removeSavingVids(videoDetailsArray)
                        : savingVids(videoDetailsArray)
                    }
                    toggleColor={isSaved}
                  >
                    <BsBookmark />
                    {isSaved ? 'Saved' : 'Save'}
                  </Button12>
                </div>
              </div>
            </RightGameContainer>
          )
        }}
      </WatchContext.Consumer>
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
      <h1 type="button">Oops! Something Went Wrong</h1>
      <p>We are having some trouble</p>
      <button onClick={this.fetchVideoDetails}>Retry</button>
    </div>
  )

  renderView = () => {
    const {checkApi} = this.state

    switch (checkApi) {
      case apiStatus.loading:
        return this.loadingView()

      case apiStatus.failure:
        return this.failureView()

      case apiStatus.success:
        return this.displayVideoDetails()

      default:
        return null
    }
  }

  render() {
    const {videoDetailsArray} = this.state
    return (
      <>
        <WatchContext.Consumer>
          {value => {
            const {lightMode} = value

            return (
              <div className="app-container">
                <Header />
                <div className="MainContainer">
                  <SideBar />
                  <GameDiv bgColor={lightMode}>
                    {this.renderView()}
                    <hr className="hrLine" />
                    <TextDiv color12={lightMode}>
                      <div className="textDiv">
                        <img
                          src={videoDetailsArray.channel?.profileIamgeUrl}
                          alt="channel logo"
                          className="channel_img"
                        />
                        <div className="eachTextSide">
                          <p>{videoDetailsArray.channel?.name}</p>
                          <p>{videoDetailsArray.channel?.subscriberCount}</p>
                        </div>
                      </div>
                      <p className="bottomDesc">
                        {videoDetailsArray.description}
                      </p>
                    </TextDiv>
                  </GameDiv>
                </div>
              </div>
            )
          }}
        </WatchContext.Consumer>
      </>
    )
  }
}

export default withRouter(VideoItemDetails)
