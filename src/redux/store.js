import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/post';

export const store = configureStore({
  reducer: { posts: postReducer },
});
