"use client";
import React, { useState, useEffect, useRef } from "react";

import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import ColorData from "./ColorData";
// form redux
import {
	useAppDispatch,
	useAppSelector,
	RootState,
} from "@/reduxToolkit/store/indexStore";
import { updateHexColorDataAction } from "@/reduxToolkit/dashboard/actions/dashboardAction";
import { IColor } from "@/app/_data/dataTypes";
import convert from "color-convert";
import useColorConvert from "@/app/_customHooks/use-colorconvert";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const ColorChart = () => {
	const dispatch = useAppDispatch();
	const { pokemonByColor, hexColorData } = useAppSelector(
		(state: RootState) => state.dashboardReducer
	);

	const { convertColorNameToRGB } = useColorConvert();

	const [totalPokemonPerColor, setTotalPokemonPerColor] = useState<number[]>([]);
	const [colorStateToRgba, setColorStateToRgba] = useState<string[]>([]);
	const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

	useEffect(() => {
		setIsLoadingData(true);

		const noOfPokemonPerColor: number[] = [];
		const colorToRgba: string[] = [];

		const namesOfColors: string[] = [];
		const arrayOfHexColor: string[] = [];
		pokemonByColor.arrayOfColors.forEach((color: IColor) => {
			noOfPokemonPerColor.push(color.no_of_Pokemon);
			namesOfColors.push(color.name);

			// const convertedColor = convert.keyword.rgb(color.name);
			const { convertedColor, convertedColorToRgba, convertedColorToHex } =
				convertColorNameToRGB(color.name);

			// const convertedColorToRgba = convertedColor.join(",") + ",0.7";
			colorToRgba.push(`rgba(${convertedColorToRgba})`);

			// const convertedColorToHex = convert.rgb.hex(convertedColor);

			arrayOfHexColor.push(`bg-[#${convertedColorToHex}]`);
		});
		setTotalPokemonPerColor([...noOfPokemonPerColor]);

		setColorStateToRgba([...colorToRgba]);

		dispatch(updateHexColorDataAction(arrayOfHexColor));
		setIsLoadingData(false);
	}, [dispatch, pokemonByColor.arrayOfColors, convertColorNameToRGB]);

	const chartData = {
		// labels: [...colorsName],
		datasets: [
			{
				// label: "# of Votes",
				data: [...totalPokemonPerColor],
				backgroundColor: [...colorStateToRgba],
				borderWidth: 1,
			},
		],
	};

	if (isLoadingData) {
		return <div>Loading</div>;
	}
	if (!isLoadingData) {
		return (
			<main className='flex flex-col items-center justify-center '>
				<div className='flex flex-col items-center justify-center sm:flex-row sm:justify-around  '>
					{/* for larger screen */}
					<div className='hidden  w-[400px] h-[400px] md:flex flex-col items-center justify-center border border-black  bg-white'>
						<PolarArea data={chartData} />
					</div>
					{/* for smaller screen */}
					<div className='m-2  w-[250px] h-[250px] flex flex-col items-center justify-center sm:justify-around md:hidden border border-black  bg-white'>
						<PolarArea
							data={chartData}
							onClick={(e) => console.log(e.target)}
						/>
					</div>
					<section className=' grid grid-cols-2 gap-2 p-4 mt-4 border border-black bg-white'>
						{pokemonByColor.arrayOfColors.map((eachColor: IColor, index: number) => (
							<ColorData
								key={eachColor.id}
								name={eachColor.name}
								quantity={eachColor.no_of_Pokemon}
								url={eachColor.url}
							/>
						))}
					</section>
				</div>
				<p className='m-2'>Pokemon by Color</p>
			</main>
		);
	}
};
export default ColorChart;
