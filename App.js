import * as React from 'react';
import {Provider} from 'react-redux'
import { StatusBar } from 'react-native'
import AppContainer from './src/navigation/AppContainer'
import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import platform from './src/helpers/platform'


import rootReducer from './src/rootReducer'

const store = createStore(rootReducer, applyMiddleware(Thunk))

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={platform.brandSuccess}
        barStyle="light-content"
      />
      <AppContainer />
    </Provider>
  )
}
