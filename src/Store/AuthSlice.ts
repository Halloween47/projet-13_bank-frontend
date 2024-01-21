// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

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

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (useCredentials: UserMotDePasse) => {
    axios
      .post<ResponseLogin>(
        `http://localhost:3001/api/v1/user/login`,
        useCredentials,
      )
      .then((response) => {
        
        localStorage.setItem('user', JSON.stringify(response.data))
        localStorage.setItem('token', JSON.stringify(response.data.body.token))
        
        return response.data
      })
  },
)

export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async () => {
    const token = JSON.stringify(localStorage.getItem('token'));
    const tokenWithoutQuotes = token.replace(/"/g, '');
    console.log(tokenWithoutQuotes);
    
    const headerConfig = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWMyODc3NWVkYmI0MWFjNDA3MzZlNyIsImlhdCI6MTcwNTg0ODc4NiwiZXhwIjoxNzA1OTM1MTg2fQ.jrqiIRo3mXP86ZaUEnEMRnIJbpgtz7CRd-INxfbWS2E`,
      },
    }

    axios.post(
      "http://localhost:3001/api/v1/user/profile"
      ,{},headerConfig
    )
    .then(
      (response) => {
        console.log(response.data);
        
        console.log(headerConfig);
        return response.data
      }
    )
    // const { firstName, lastName } = request.data.body;
    // localStorage.setItem('firstName', firstName);
    // localStorage.setItem('lastName', lastName);
    // console.log(token);
    
  },
)

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     loading: false,
//     user: null,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true
//         state.user = null
//         state.error = null
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false
//         state.user = action.payload
//         state.error = null
//         console.log('Mot de passe valide. Connexion réussie !')
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false
//         state.user = null
//         console.log(action.error.message)
//         if (action.error.message === 'Request failed with status code 401') {
//           state.error = 'Access Denied Invalid Credentials'
//         } else {
//           state.error = action.error.message
//         }
//       })
//   },
// })
// export default userSlice.reducer

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

/*
interface UserState {
  loading: boolean;
  // user: null | UserData; // Assurez-vous de définir le type UserData selon votre modèle de données utilisateur
  user: null; // Assurez-vous de définir le type UserData selon votre modèle de données utilisateur
  error: null | string;
}

const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}, // Ajoutez des reducers personnalisés si nécessaire
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      // .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserData>) => {
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.user = action.payload;
        state.user = null;
        state.error = null;
        console.log('Mot de passe valide. Connexion réussie !');
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === 'Request failed with status code 401') {
          state.error = 'Access Denied Invalid Credentials';
        } else {
          // state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (token) => {
    const headerConfig = {
      headers: {
        Authorization: `Bearer ${token},`,
      },
    }

    const request = await axios.post(
      `http://localhost:3001/api/v1/user/profile`,
      headerConfig,
    )
    const { firstName, lastName } = request.data.body
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    return request
  },
)

export const accessToken = createAsyncThunk('user/token', async () => {
  const request = await axios.post(
    `http://localhost:3001/api/v1/user/login`,
    {},
  )
  const response = request.data.body.token
  console.log(response)
  return response
})


*/