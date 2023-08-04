import { createSlice } from "@reduxjs/toolkit";
import { IPokemonByColor } from "@/app/data/dataTypes";

interface IDashboardState {
	pokemonByColor: IDataByColor;
}

const initialDashboardState: IDashboardState = {
	pokemonByColor: {} as IPokemonByColor,
};

const dashboardSlice = createSlice({
	name: "Dashboard Slice",
	initialState: initialDashboardState,
	reducers: {
		updatePokemonByColorRed(state, action) {
			state.pokemonByColor = action.payload.pokemonByColor;
		},
	},
});

export const { updatePokemonByColorRed } = dashboardSlice.actions;
export default dashboardSlice;
