import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feture/counter/counterSlice";
import todoReducer from "../feture/todolist/todoSlice";
import { countriesapi } from "../services/countriesapi";

export const store = configureStore({
  reducer: {
     counterRed: counterReducer,
      todoRed: todoReducer,
      [countriesapi.reducerPath]: countriesapi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(countriesapi.middleware),
});
