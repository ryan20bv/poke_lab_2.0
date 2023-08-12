export interface IPokemonByColor {
	count: number;
	arrayOfColors: IColor[];
}
export interface IColor {
	id: string;
	name: any;
	url: string;
	no_of_Pokemon: number;
}
export interface IListOfPokemonPerColor {
	name: string;
	pokemon_species: IPokemon_Species[];
}

export interface IPokemon_Species {
	id: string;
	name: string;
}
