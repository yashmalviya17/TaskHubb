import { combineReducers } from "@reduxjs/toolkit";

import themeReduce from "../slice/themeSlice";
import userDetailsReducer from "../slice/userSlice";
import tasksReducer from "../slice/taskSlice";
import categoryReducer from "../slice/categorySlice";


export const rootReducer = combineReducers({
    theme: themeReduce,
    userDetails: userDetailsReducer,
    tasks: tasksReducer,
    category: categoryReducer,
});


 export default rootReducer;
