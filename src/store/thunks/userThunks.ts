import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginForm, RegisterForm, User } from "../../type";
import { loginUser, registerUser } from "../../api/userApi";

export const register = createAsyncThunk("user/register", async (data: RegisterForm, { rejectWithValue }) => {
    try {
        const response: User = await registerUser(data);
        return response;
    } catch (error: any) {
        return rejectWithValue(error?.response?.data?.message);
    }
});

export const login = createAsyncThunk("user/login", async (data: LoginForm, { rejectWithValue }) => {
    try {
        const response: User = await loginUser(data);
        return response;
    } catch (error: any) {
        return rejectWithValue(error?.response?.data?.message);
    }
});
