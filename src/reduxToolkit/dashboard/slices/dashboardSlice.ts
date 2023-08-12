import { createSlice } from "@reduxjs/toolkit";
import { IPokemonByColor } from "@/app/data/dataTypes";

interface IDashboardState {
	pokemonByColor: IPokemonByColor;
	hexColorData: string[];
	selectedUrl: string;
}

const initialDashboardState: IDashboardState = {
	pokemonByColor: {} as IPokemonByColor,
	hexColorData: [],
	selectedUrl: "",
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
		setSelectedUrlRed(state, action) {
			state.selectedUrl = action.payload.selectedUrl;
		},
	},
});

export const {
	updatePokemonByColorRed,
	updateHexColorData,
	setSelectedUrlRed,
} = dashboardSlice.actions;
export default dashboardSlice;
