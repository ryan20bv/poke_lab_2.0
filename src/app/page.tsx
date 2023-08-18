"use client";
import { Alert } from "flowbite-react";
import { useEffect } from "react";
import Image from "next/image";
import useWindowSize from "./_customHooks/use-windowSize";
import { useRouter } from "next/navigation";
import { IPokemonByColor, IColor } from "./_data/dataTypes";
// for redux purposes
import { useAppDispatch } from "@/reduxToolkit/store/indexStore";
import { updatePokemonByColorAction } from "@/reduxToolkit/dashboard/actions/dashboardAction";
import { each } from "chart.js/dist/helpers/helpers.core";

const HomePage = () => {
	const windowSize = useWindowSize();
	const router = useRouter();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const getData = async () => {
			const result = await fetch(
				process.env.NEXT_PUBLIC_FRONT_END_URL + "/api/getColorOfPokemon"
			);

			const { data } = await result.json();
			// console.log(data);

			const mapOfDataResultUrlPromises: Promise<IColor>[] = data.results.map(
				(result: any) => {
					const getTotalPokemonPerColor = async (url: string) => {
						const res = await fetch(url);
						const data = await res.json();
						// console.log(data);
						const eachData: IColor = {
							id: Math.random().toString() + "_" + data.name,
							name: data.name,
							url: url,
							no_of_Pokemon: data.pokemon_species.length,
						};

						return eachData;
					};
					return getTotalPokemonPerColor(result.url);
				}
			);
			// Wait for all the promises to resolve using Promise.all
			Promise.all(mapOfDataResultUrlPromises)
				.then((mapOfDataResultUrl: IColor[]) => {
					const pokemonByColor: IPokemonByColor = {
						count: data.count,
						arrayOfColors: mapOfDataResultUrl,
					};
					// console.log(pokemonByColor);
					dispatch(updatePokemonByColorAction(pokemonByColor));
				})
				.catch((error) => {
					console.error("An error occurred:", error);
				});
			// const pokemonByColor: IPokemonByColor = {
			// 	count: data.count,
			// 	arrayOfColors: mapOfDataResultUrl,
			// };
			// dispatch(updatePokemonByColorAction(pokemonByColor));
		};
		getData();
	}, [dispatch]);

	const goToDashBoardHandler = () => {
		router.push("/dashboard");
	};

	return (
		<main
			className={`w-screen h-screen flex items-center justify-center flex-col relative`}
		>
			<Image
				src='/static/pokemon_main.jpg'
				alt='pokemon-main'
				// layout='responsive'
				width={windowSize.width || 1920}
				height={800}
				// layout='fill'
				// objectFit='cover'
				className='absolute z-[-1] inset-0  w-full h-full '
				/* width='100vw' // Set the width to 100% of the viewport width
				height='100vh' // Set the height to 100% of the viewport height */
			/>

			<section className='flex flex-col  h-4/6  justify-end'>
				{/* <Alert color='info'>Alert!</Alert> */}
				<h1 className='text-7xl text-stroke text-stroke-black text-black'>
					Pokemon
				</h1>

				<p className='self-end'>v 2.0</p>
				<button
					onClick={goToDashBoardHandler}
					type='button'
					className='text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900'
				>
					Gotta Catch them all
				</button>
			</section>
		</main>
	);
};

export default HomePage;
