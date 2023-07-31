import React from 'react'
import { Provider } from 'react-redux'
import Tuner from './pages/tuner'
import store from './store'
import './container_tuner.css'
function Guitar_tuner() {
  return (
    <Provider store={store}>
    <div className="MainContainer">
      <Tuner />
    </div>
  </Provider>
  )
}

export default Guitar_tuner
