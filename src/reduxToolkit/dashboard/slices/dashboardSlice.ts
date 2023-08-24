import { createSlice } from "@reduxjs/toolkit";
import {
	IPokemonByColor,
	IListOfPokemonPerColor,
	IPokemonType,
} from "@/app/_data/dataTypes";

interface IDashboardState {
	rawTypesOfPokemon: IPokemonType;
	pokemonByColor: IPokemonByColor;
	hexColorData: string[];
	selectedUrl: string;
	listOfPokemonPerColor: IListOfPokemonPerColor;
}

const initialDashboardState: IDashboardState = {
	rawTypesOfPokemon: {} as IPokemonType,
	pokemonByColor: {} as IPokemonByColor,
	hexColorData: [],
	selectedUrl: "",
	listOfPokemonPerColor: {} as IListOfPokemonPerColor,
};

const dashboardSlice = createSlice({
	name: "Dashboard Slice",
	initialState: initialDashboardState,
	reducers: {
		getRawTypesOfPokemon(state, action) {
			state.rawTypesOfPokemon = action.payload.rawTypesOfPokemon;
		},
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
	getRawTypesOfPokemon,
	updatePokemonByColorRed,
	updateHexColorData,
	setSelectedUrlRed,
	setListOfPokemonPerColorRed,
} = dashboardSlice.actions;
export default dashboardSlice;
