import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import dashboardSlice from "../dashboard/slices/dashboardSlice";
// for redux toolkit persist
import { persistStore, persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage"; // defaults to localStorage for web

const reducers = combineReducers({
	dashboardReducer: dashboardSlice.reducer,
});

const persistConfig = {
	key: "root",
	storage,
	blacklist: [],
	// storageSession,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const indexStore = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // Disable serializable check for redux-persist
		}),
});

export type RootState = ReturnType<typeof indexStore.getState>;
export type AppDispatch = typeof indexStore.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

// export default indexStore;

export const persistor = persistStore(indexStore);
