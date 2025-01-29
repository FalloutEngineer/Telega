import { createSlice } from "@reduxjs/toolkit"
import SelectUserAction from "./selectUserAction"

interface SliceState {
  userID: string | null
}

const InitialState: SliceState = { userID: null }

const selectedUserSlice = createSlice({
  name: "sidebarSelectedUser",
  initialState: InitialState,
  reducers: {
    setSelectedUser: (state: SliceState, action: SelectUserAction) => {
      state.userID = action.payload
    },
    removeSelection: (state: SliceState) => {
      state.userID = null
    },
  },
})

export const { setSelectedUser, removeSelection } = selectedUserSlice.actions
export default selectedUserSlice.reducer
