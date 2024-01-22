// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { ThunkDispatch } from 'redux-thunk';

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
  isAuthenticated: boolean;
  error: string | null;
}

// export const loginUser = createAsyncThunk(
//   'user/loginUser',
//   async (userCredentials: UserMotDePasse) => {
//     axios.post<ResponseLogin>(
//         `http://localhost:3001/api/v1/user/login`,
//         userCredentials,
//       )
//       .then((response) => {
//         console.log(response);
//         console.log(response.data);
//         console.log(response.data.status);
//         return response.data
//       })
//     }
    
// )


// export const loginUser = createAsyncThunk<ResponseLogin, UserMotDePasse>(
//   'user/loginUser',
//   async (userCredentials: UserMotDePasse) => {
//     try {
//       const response = await axios.post<ResponseLogin>(
//         'http://localhost:3001/api/v1/user/login',
//         userCredentials
//       );

//       console.log(response);
//       console.log(response.data);
//       console.log(response.data.status);

//       return response.data;

//     } 
//     catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
// );

export const loginUser = (userCredentials: UserMotDePasse) => 
async (dispatch: ThunkDispatch<{}, {}, any>) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', userCredentials);

    console.log('Identifiant CORRECT');
    dispatch(loginSuccess())

    return response
  }
  catch(error) {
    console.log(error);
    console.error(error);
    
    
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    error: null,
} as AuthState,
reducers: {
  loginSuccess: (state) => {
    state.isAuthenticated = true;
    state.error = null;
    console.log('loginSuccess');
  },
  loginFailure: (state) => {
    state.isAuthenticated = false;
    state.error = 'null';
    console.log('loginFailure');
    
  },
},
});
export default authSlice.reducer
export const {loginSuccess, loginFailure} = authSlice.actions