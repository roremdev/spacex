import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '@redux/pageSlice.js';

export default configureStore({
    reducer: {
        page: pageReducer,
    },
});
