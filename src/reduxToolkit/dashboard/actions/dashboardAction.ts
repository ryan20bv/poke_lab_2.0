import { IPokemonByColor } from "@/app/data/dataTypes";
import { updatePokemonByColorRed } from "../slices/dashboardSlice";

// save to redux the data for the pokemon by colors
export const updatePokemonByColorAction =
	(data: IPokemonByColor) => async (dispatch: any, getState: any) => {
		dispatch(updatePokemonByColorRed({ pokemonByColor: data }));
	};
