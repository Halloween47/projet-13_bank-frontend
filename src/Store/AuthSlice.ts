import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ThunkDispatch } from 'redux-thunk'
import { editProfileNameReducer } from './EditProfileSlice'

interface ResponseLogin {
  status: number
  message: string
  body: {
    token: string
  }
}
interface UserMotDePasse {
  email: string
  password: string
}
interface AuthState {
  isAuthenticated: boolean
  error: string | null
  token: string | null
}

export const loginUser =
  (userCredentials: UserMotDePasse) =>
  async (dispatch: ThunkDispatch<{}, {}, any>) => {
    try {
      const response = await axios.post<ResponseLogin>(
        'http://localhost:3001/api/v1/user/login',
        userCredentials,
      )
      localStorage.setItem('token', response.data.body.token)

      console.log('Identifiant CORRECT')
      dispatch(loginSuccess())

      return response
    } catch (error) {
      // console.log(error);
      // console.error(error);
    }
  }

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    error: null,
    token: localStorage.getItem('token') || '',
  } as AuthState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true
      state.error = null
      state.token = localStorage.getItem('token')
      // console.log('loginSuccess');
    },
    loginFailure: (state) => {
      state.isAuthenticated = false
      state.error = 'null'
      // console.log('loginFailure');
    },
    setAuthenticationStatus: (state) => {
      // state.isAuthenticated = false
      state.isAuthenticated = true
      state.error = null
      state.token = null
    },
  },
})
export default authSlice.reducer
export const { loginSuccess, loginFailure, setAuthenticationStatus } =
  authSlice.actions

// export const fetchUserDatas = (token: 'string') => async () => {
export const fetchUserDatas =
  (token: string) => async (dispatch: ThunkDispatch<{}, {}, any>) => {
    let tokenWithoutQuotes = token.replace(/"/g, '')
    const headerConfig = {
      headers: {
        // Authorization: `Bearer `+ tokenWithoutQuotes,
        Authorization: `Bearer ${tokenWithoutQuotes}`,
        // Authorization: `Bearer ${token}`,
      },
    }
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        {},
        headerConfig,
      )
      console.log('fetch CORRECT')
      console.log(response)
      console.log(response.data.body.firstName)

      dispatch(
        editProfileNameReducer({
          firstName: response.data.body.firstName,
          lastName: 'NewLastName',
        }),
      )

      return response
    } catch (error) {
      console.error(error)
      console.log('fetch INCORRECT')
      throw error
    }
  }

export const logOut = () => {
  // console.log(localStorage.getItem('token'));
  localStorage.removeItem('token')
  // console.log(localStorage.getItem('token'));
  window.location.href = '/'
}
