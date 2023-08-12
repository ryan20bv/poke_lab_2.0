import { IPokemonByColor, IListOfPokemonPerColor } from "@/app/data/dataTypes";
import {
	updatePokemonByColorRed,
	updateHexColorData,
	setSelectedUrlRed,
	setListOfPokemonPerColorRed,
} from "../slices/dashboardSlice";

// save to redux the data for the pokemon by colors
export const updatePokemonByColorAction =
	(data: IPokemonByColor) => async (dispatch: any, getState: any) => {
		dispatch(updatePokemonByColorRed({ pokemonByColor: data }));
	};

// update hexColorData
export const updateHexColorDataAction =
	(hexColor: string[]) => async (dispatch: any, getState: any) => {
		dispatch(updateHexColorData({ hexColorData: hexColor }));
	};

// set selected url
export const updateSelectedUrlAction =
	(url: string) => async (dispatch: any, getState: any) => {
		dispatch(setSelectedUrlRed({ selectedUrl: url }));
	};

// set the list of pokemon per color
export const updateListOfPokemonPerColorAction =
	(listOfPokemon: IListOfPokemonPerColor) =>
	async (dispatch: any, getState: any) => {
		dispatch(
			setListOfPokemonPerColorRed({ listOfPokemonPerColor: listOfPokemon })
		);
	};
