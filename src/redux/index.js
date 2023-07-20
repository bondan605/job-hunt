import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import persistedReducer from "./combine-reducer";
import { persistStore } from "redux-persist";

const middleware = [thunk];

middleware.push(logger);

export const store = configureStore({
	reducer: persistedReducer,
	middleware,
});

export const persistor = persistStore(store);
