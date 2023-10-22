import { createSlice } from "@reduxjs/toolkit";
import { TaskState } from "../../type";

const initialState: TaskState = {
    error: null,
    status: "loading",
    tasks: [],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
});

export default taskSlice.reducer;
