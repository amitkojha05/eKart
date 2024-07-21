import { createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "../Services/LocalStorageService";

// Default initial state
const initialState = LocalStorageService.getUser() || {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            LocalStorageService.setUser(action.payload);
            return action.payload;
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
