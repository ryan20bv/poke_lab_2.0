export interface IPokemonByColor {
	count: number;
	arrayOfColors: IColor[];
}
export interface IPokemonType {
	count: number;
	arrayOfTypes: IType[];
}
export interface IType {
	id: string;
	name: any;
	url: string;
	no_of_Pokemon: number;
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

export interface IPokemonData {
	srcImage: string;
	type: string;
	stats: IStats;
}

export interface IStats {
	hp: number;
	attack: number;
	defense: number;
	special_Attack: number;
	special_Defense: number;
	speed: number;
}
