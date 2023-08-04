import { createSlice } from "@reduxjs/toolkit";

interface IDashboardState {
	name: string;
}

const initialDashboardState: IDashboardState = {
	name: "Jack",
};

const dashboardSlice = createSlice({
	name: "Dashboard Slice",
	initialState: initialDashboardState,
	reducers: {
		updateNameRed(state, action) {
			state.name = action.payload.name;
		},
	},
});

export const { updateNameRed } = dashboardSlice.actions;
export default dashboardSlice;
