import React from 'react'

const WatchContext = React.createContext({
  lightMode: true,
  changeMode: () => {},
  savedVideos: [],
  savingVids: () => {},
  removeSavingVids: () => {},
})

export default WatchContext
