import { createSlice } from "@reduxjs/toolkit";
import { IPokemonByColor, IListOfPokemonPerColor } from "@/app/data/dataTypes";

interface IDashboardState {
	pokemonByColor: IPokemonByColor;
	hexColorData: string[];
	selectedUrl: string;
	listOfPokemonPerColor: IListOfPokemonPerColor;
}

const initialDashboardState: IDashboardState = {
	pokemonByColor: {} as IPokemonByColor,
	hexColorData: [],
	selectedUrl: "",
	listOfPokemonPerColor: {} as IListOfPokemonPerColor,
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
		setListOfPokemonPerColorRed(state, action) {
			state.listOfPokemonPerColor = action.payload.listOfPokemonPerColor;
		},
	},
});

export const {
	updatePokemonByColorRed,
	updateHexColorData,
	setSelectedUrlRed,
	setListOfPokemonPerColorRed,
} = dashboardSlice.actions;
export default dashboardSlice;
