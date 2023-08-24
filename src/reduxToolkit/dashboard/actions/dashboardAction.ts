import {
	IPokemonType,
	IPokemonByColor,
	IListOfPokemonPerColor,
} from "@/app/_data/dataTypes";
import {
	getRawTypesOfPokemon,
	updatePokemonByColorRed,
	updateHexColorData,
	setSelectedUrlRed,
	setListOfPokemonPerColorRed,
} from "../slices/dashboardSlice";

// get the list of pokemon types
export const getRawTypesOfPokemonAction =
	(data: IPokemonType) => async (dispatch: any, getState: any) => {
		dispatch(getRawTypesOfPokemon({ rawTypesOfPokemon: data }));
	};

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
