import axios from "axios"

export const axiosInter = axios.create({
    baseURL: "http://localhost:5000"
});
