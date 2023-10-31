import { createSlice } from "@reduxjs/toolkit";
import { blankUserState, getInitialStateFromLocalStorage } from "../../utils/getUserStateFromLocal";
import { UserState } from "../../type";
import { login, register } from "../thunks/userThunks";

const initialState: UserState = getInitialStateFromLocalStorage();

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: state => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            state = blankUserState;
        },
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled || register.fulfilled, (state, { payload }) => {
            const userState = { ...payload, isLogin: true };
            state.user = userState;
            state.error = null;
            state.status = "succeeded";
            sessionStorage.setItem("userState", JSON.stringify(userState));
        });
        builder.addCase(login.pending || register.pending, state => {
            state.status = "loading";
        });
        builder.addCase(login.rejected || register.rejected, (state, action) => {
            if (action.payload) {
                state.status = "failed";
                state.error = action.payload as string;
            }
        });
    },
});

export default userSlice.reducer;
