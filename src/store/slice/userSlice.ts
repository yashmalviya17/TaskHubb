import { createSlice } from "@reduxjs/toolkit";
import { getInitialStateFromLocalStorage } from "../../utils/getUserStateFromLocal";
import { UserState } from "../../type";

const initialState: UserState = getInitialStateFromLocalStorage();

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: state => {
            state.user.token = "";
            state.user.name = "";
            state.user.id = "";
            state.user.isLogin = false;
        },
    },
});

export default userSlice.reducer;
