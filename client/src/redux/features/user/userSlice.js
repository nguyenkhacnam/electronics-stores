import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  accessToken: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {name, email, accessToken} = action.payload
      // console.log('action', action)
      state.name = name || email
      state.email = email
      state.accessToken = accessToken
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions

export default userSlice.reducer