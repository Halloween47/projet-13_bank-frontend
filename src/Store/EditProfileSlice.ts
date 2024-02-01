import { PayloadAction, ThunkDispatch, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const editProfileName =
  (firstName: string, lastName: string, token: string) =>
  async (dispatch: ThunkDispatch<{}, {}, any>) => {
    let tokenWithoutQuotes = token.replace(/"/g, '')
    const headerConfig = {
      headers: {
        // Authorization: `Bearer `+ tokenWithoutQuotes,
        Authorization: `Bearer ${tokenWithoutQuotes}`,
      },
    }
    const requestBody = {
      firstName,
      lastName,
    }
    console.log(requestBody)

    try {
      const response = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        requestBody,
        headerConfig,
      )

      console.log(response)
      console.log(response.data.body.firstName)

      dispatch(editProfileSlice.actions.editReducer({
        firstName: response.data.body.firstName,
        lastName: response.data.body.lastName,
      }));

      return response
    } catch (error) {
      console.log(error)
    }
  }
// interface EditState {
//   firstname: string
//   lastname: string
// }
// const editProfileSlice = createSlice({
//   name: 'editProfile',
//   initialState: {
//     firstname: '',
//     lastname: '',
//   } as EditState,
//   reducers: {
//     editReducer: (
//       state,
//       action: PayloadAction<{ firstName: string; lastName: string }>,
//     ) => {
//       state.firstname = action.payload.firstName
//       state.lastname = action.payload.lastName
//     },
//   },
// })
// export default editProfileSlice.reducer
// export const { editReducer } = editProfileSlice.actions

interface EditState {
  firstname: string
}
const editProfileSlice = createSlice({
  name: 'editProfile',
  initialState: {
    firstname: localStorage.getItem('firstname') || '',
  } as EditState,
  reducers: {
    editReducer: (
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>,
    ) => {
      state.firstname = action.payload.firstName
    },
  },
})
export default editProfileSlice.reducer
export const { editReducer } = editProfileSlice.actions
