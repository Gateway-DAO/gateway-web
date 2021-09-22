import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { reducer as appReducer } from '../slices/app'

const mainReducer = combineReducers({
    app: appReducer
})

export const store = configureStore({
  reducer: mainReducer,
})