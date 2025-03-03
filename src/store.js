import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "src/rootReducer";

const store = configureStore({
    reducer: rootReducer
});

export default store;