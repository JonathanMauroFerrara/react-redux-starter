import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import loggedSlice from './reducers/isLogged'
import counterSlice from './reducers/counter'
import usersSlice from './reducers/users'
import thunk from 'redux-thunk'

const rootReducer = combineReducers(
  {
    counter: counterSlice,
    logged: loggedSlice,
    users: usersSlice
  },
)

const store = configureStore({
  reducer: rootReducer,
  middleware:[thunk]
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
