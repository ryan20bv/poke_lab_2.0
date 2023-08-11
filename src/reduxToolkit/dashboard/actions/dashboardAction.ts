import { IPokemonByColor } from "@/app/data/dataTypes";
import {
	updatePokemonByColorRed,
	updateHexColorData,
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
