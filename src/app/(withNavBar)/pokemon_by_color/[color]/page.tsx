"use client";
import React, { useEffect, useState } from "react";
import PokemonCard from "@/app/components/ui/PokemonCard";

// from redux
import {
	useAppDispatch,
	useAppSelector,
	RootState,
} from "@/reduxToolkit/store/indexStore";
import { IListOfPokemonPerColor, IPokemon_Species } from "@/app/data/dataTypes";
import { updateListOfPokemonPerColorAction } from "@/reduxToolkit/dashboard/actions/dashboardAction";

const PokemonByColorPage = () => {
	const dispatch = useAppDispatch();
	const { selectedUrl, listOfPokemonPerColor } = useAppSelector(
		(state: RootState) => state.dashboardReducer
	);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		setIsLoading(true);
		const getData = async () => {
			const queryParams = new URLSearchParams({ selectedUrl }).toString();
			const url = `${process.env.NEXT_PUBLIC_FRONT_END_URL}/api/getPokemonByColor?${queryParams}`;

			const options = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			};
			const response = await fetch(url, options);

			const { data } = await response.json();

			const transformedData = data.pokemon_species.map((pokemon: any) => ({
				name: pokemon.name,
				id: pokemon.url.split("/")[6], // Extracting the id from the URL
			}));

			const transformedPokemonPerColor: IListOfPokemonPerColor = {
				name: data.name,
				pokemon_species: transformedData,
			};

			dispatch(updateListOfPokemonPerColorAction(transformedPokemonPerColor));
			setIsLoading(false);
		};
		getData();
	}, [selectedUrl, dispatch]);

	if (isLoading) {
		return (
			<div className='border border-black  flex items-center justify-center'>
				<h1>loading</h1>
			</div>
		);
	}
	if (!isLoading) {
		return (
			<main className='border border-black   flex flex-wrap items-center justify-center'>
				{listOfPokemonPerColor.pokemon_species.map(
					(eachPokemon: IPokemon_Species) => (
						<PokemonCard
							key={eachPokemon.id}
							name={eachPokemon.name}
							id={eachPokemon.id}
						/>
					)
				)}

				{/* <PokemonCard
					name={listOfPokemonPerColor.pokemon_species[0].name}
					id={listOfPokemonPerColor.pokemon_species[0].id}
				/> */}
			</main>
		);
	}
};

export default PokemonByColorPage;
