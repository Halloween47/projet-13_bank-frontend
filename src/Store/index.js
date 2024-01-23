import { configureStore } from '@reduxjs/toolkit'
import useReducer from './AuthSlice'
import useReducerEditProfile from './EditProfileSlice'

const store = configureStore({
  reducer: {
    auth: useReducer,
    editProfile: useReducerEditProfile,
  },
})
export default store
