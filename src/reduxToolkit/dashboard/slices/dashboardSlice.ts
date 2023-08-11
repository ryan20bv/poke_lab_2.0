import { createSlice } from "@reduxjs/toolkit";
import { IPokemonByColor } from "@/app/data/dataTypes";

interface IDashboardState {
	pokemonByColor: IPokemonByColor;
	hexColorData: string[];
}

const initialDashboardState: IDashboardState = {
	pokemonByColor: {} as IPokemonByColor,
	hexColorData: [],
};

const dashboardSlice = createSlice({
	name: "Dashboard Slice",
	initialState: initialDashboardState,
	reducers: {
		updatePokemonByColorRed(state, action) {
			state.pokemonByColor = action.payload.pokemonByColor;
		},
		updateHexColorData(state, action) {
			state.hexColorData = action.payload.hexColorData;
		},
	},
});

export const { updatePokemonByColorRed, updateHexColorData } =
	dashboardSlice.actions;
export default dashboardSlice;
