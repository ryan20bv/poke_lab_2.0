import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IPokemonData } from "@/app/data/dataTypes";
import PokemonStats from "../charts/PokemonStats";
import FlipCard from "../framer_motion/FlipCard";

interface PropsType {
	name: string;
	id: string;
}

const PokemonCard: React.FC<PropsType> = ({ name, id }) => {
	const [pokemonData, setPokemonData] = useState<IPokemonData>(
		{} as IPokemonData
	);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const getPokemonData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
				console.log(response);
				const data = await response.json();
				console.log(data);
				const pokemon: IPokemonData = {
					srcImage: data.sprites.front_default,
					type: data.types[0].type.name,
					stats: {
						hp: data.stats[0].base_stat,
						attack: data.stats[1].base_stat,
						defense: data.stats[2].base_stat,
						special_Attack: data.stats[3].base_stat,
						special_Defense: data.stats[4].base_stat,
						speed: data.stats[5].base_stat,
					},
				};
				setPokemonData(pokemon);
				setIsLoading(false);
			} catch (err) {
				console.log(err);
				console.log("cant get pokemon data");
			}
		};
		getPokemonData();
	}, [id]);
	console.log(pokemonData);

	return (
		<main className='border border-black '>
			{!isLoading && (
				<section>
					<FlipCard
						id={id}
						pokemonData={pokemonData}
					/>
					<header>
						<h3>{name}</h3>
						<p>{pokemonData.type}</p>
					</header>
				</section>
			)}
			{isLoading && (
				<Image
					src='/static/poke-ball.png'
					alt='pokemon ball'
					width={100}
					height={100}
				/>
			)}
		</main>
	);
};

export default PokemonCard;
