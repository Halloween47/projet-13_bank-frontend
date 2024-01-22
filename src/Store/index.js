import { configureStore } from '@reduxjs/toolkit'
import useReducer from './AuthSlice'

const store = configureStore({
  reducer: {
    auth: useReducer,
  },
})
export default store
