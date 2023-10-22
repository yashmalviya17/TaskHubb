import {  User, UserState } from "../type";

export const getInitialStateFromLocalStorage = (): UserState => {
  const storedState = localStorage.getItem("userState");
  if (storedState) {
    const user = JSON.parse(storedState) as User
    return {
      user,
      status: "idle",
      error: null,
    };
  } else {
    return {
      user: {
        token: "",
        name: "",
        email: "",
        id: "",
        isLogin: false,
      },
      status: "idle",
      error: null,
    };
  }
};
