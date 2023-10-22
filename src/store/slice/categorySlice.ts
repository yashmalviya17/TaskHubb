import { createSlice } from "@reduxjs/toolkit";
import { CategoriesState } from "../../type";

const initialState: CategoriesState = {
    categories: [],
    status: "loading",
    error: null,
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
});

export default categorySlice.reducer;
