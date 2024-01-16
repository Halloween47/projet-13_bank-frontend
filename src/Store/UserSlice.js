import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (useCredentials) => {
    const request = await axios.post(
      `http://localhost:3001/api/v1/user/login`,
      useCredentials,
    )
    const response = request.data.data
    localStorage.setItem('user', JSON.stringify(response))
    console.log(request)
    return response
  },
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.user = null
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
        console.log('Mot de passe valide. Connexion réussie !')
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.user = null
        console.log(action.error.message)
        if (action.error.message === 'Request failed with status code 401') {
          state.error = 'Access Denied Invalid Credentials'
        } else {
          state.error = action.error.message
        }
      })
  },
})
export default userSlice.reducer

// export const fetchUserProfile = createAsyncThunk(
//   'user/fetchUserProfile',
//   async (token) => {
//     const headerConfig = {
//       headers: {
//         Authorization: `Bearer ${token},`,
//       },
//     }

//     const request = await axios.post(
//       `http://localhost:3001/api/v1/user/profile`,
//       headerConfig,
//     )
//     const { firstName, lastName } = request.data.body
//     localStorage.setItem('firstName', firstName)
//     localStorage.setItem('lastName', lastName)
//     return request
//   },
// )
