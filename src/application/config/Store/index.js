import reducers from '../../actions';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({reducer: reducers});