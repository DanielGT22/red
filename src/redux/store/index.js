import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'

import {  combineReducers } from '@reduxjs/toolkit'
import favReducer from '../reducers/favourite' 
import userReducer from '../reducers/user' 
import aziendaReducer from '../reducers/azienda'




const store = configureStore({
  reducer: mainReducer,
})

export default store
