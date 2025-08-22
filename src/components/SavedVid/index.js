import {BsBookmark} from 'react-icons/bs'

import Header from '../Header'
import {
  NavBar,
  Heading,
  NoSavedVidContainer,
  VideosBg,
  RightTextVid,
} from './styledComponents'
import SideBar from '../SideBar'
import WatchContext from '../WatchContext'
import './index.css'

const SavedVid = () => (
  <WatchContext.Consumer>
    {value => {
      const {savedVideos, lightMode} = value

      return (
        <div className="mainContainer">
          <Header />

          <div className="secondContainer">
            <SideBar />
            {savedVideos.length === 0 ? (
              <NoSavedVidContainer bgColor9={lightMode}>
                <div className="noVidContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                    className="noSaveImg"
                  />
                  <h1>No Saved Videos Found</h1>
                  <p>You can save your videos while watching them</p>
                </div>
              </NoSavedVidContainer>
            ) : (
              <VideosBg bgColor89={lightMode}>
                <NavBar colorBg={lightMode}>
                  <BsBookmark />
                  <Heading>Saved Videos</Heading>
                </NavBar>
                <ul>
                  {savedVideos.map(each => (
                    <li className="eachVid">
                      <img
                        className="img12"
                        src={each.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <RightTextVid colorBg={lightMode}>
                        <p>{each.title}</p>
                        <p>{each.channel.name}</p>
                        <div>
                          <p>{`${each.viewCount} views`}</p>
                          <p>{each.publishedAt}</p>
                        </div>
                      </RightTextVid>
                    </li>
                  ))}
                </ul>
              </VideosBg>
            )}
          </div>
        </div>
      )
    }}
  </WatchContext.Consumer>
)

export default SavedVid
