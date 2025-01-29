import { configureStore } from "@reduxjs/toolkit"
import selectedUserReducer from "./slices/sidebarSelectedUser"

export const store = configureStore({
  reducer: {
    selectedUser: selectedUserReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
