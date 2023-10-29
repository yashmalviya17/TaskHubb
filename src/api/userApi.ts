import { LoginForm, RegisterForm, User } from "../type";
import { axiosInter } from "./axiosInterceptor";

export const registerUser = async (data: RegisterForm) => {
    const res = await axiosInter.post("/auth/register", data);
    return res.data as User;
};

export const loginUser = async (data: LoginForm) => {
    const res = await axiosInter.post("/auth/login", data);
    return res.data as User;
};
