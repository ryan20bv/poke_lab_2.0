import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import dashboardSlice from "../dashboard/slices/dashboardSlice";

const reducers = combineReducers({
	dashboardReducer: dashboardSlice.reducer,
});

export const indexStore = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof indexStore.getState>;
export type AppDispatch = typeof indexStore.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default indexStore;
