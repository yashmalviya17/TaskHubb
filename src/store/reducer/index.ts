import themeSlice from "../slice/themeSlice";
import userSlice from "../slice/userSlice";
import taskSlice from "../slice/taskSlice";
import categorySlice from "../slice/categorySlice";

const rootReducer = {
    theme: themeSlice,
    userDetails: userSlice,
    tasks: taskSlice,
    category: categorySlice,
};

export default rootReducer;
