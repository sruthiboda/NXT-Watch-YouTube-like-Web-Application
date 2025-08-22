import './App.css'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
// Replace your code here
import {Component} from 'react'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'

import SavedVid from './components/SavedVid'

import VideoItemDetails from './components/VideoItemDetails'

import Trending from './components/Trending'
import WatchContext from './components/WatchContext'

import NotFound from './components/NotFound'
import Home from './components/Home'

import Gaming from './components/Gaming'

class App extends Component {
  state = {lightmode: true, savedVideos: []}

  changeMode = () => {
    this.setState(prevState => ({
      lightmode: !prevState.lightmode,
    }))
  }

  savingVids1 = video => {
    const {savedVideos} = this.state
    const isVideo = savedVideos.some(each => video.id === each.id)
    console.log(isVideo)
    if (!isVideo) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    }
  }

  removeSavingVids = video => {
    const {savedVideos} = this.state
    const updatedVids = savedVideos.filter(each => each.id !== video.id)

    this.setState({savedVideos: updatedVids})
  }

  render() {
    const {lightmode, savedVideos} = this.state

    return (
      <WatchContext.Provider
        value={{
          lightMode: lightmode,
          changeMode: this.changeMode,
          savedVideos,
          savingVids: this.savingVids1,
          removeSavingVids: this.removeSavingVids,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginRoute} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute exact path="/saved-videos" component={SavedVid} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </WatchContext.Provider>
    )
  }
}

export default App
