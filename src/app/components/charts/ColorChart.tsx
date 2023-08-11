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
import { IColor } from "@/app/data/dataTypes";
import convert from "color-convert";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const ColorChart = () => {
	const dispatch = useAppDispatch();
	const { pokemonByColor, hexColorData } = useAppSelector(
		(state: RootState) => state.dashboardReducer
	);

	const [totalPokemonPerColor, setTotalPokemonPerColor] = useState<number[]>([]);
	const [colorStateToRgba, setColorStateToRgba] = useState<string[]>([]);
	const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
	const [colorsName, setColorsName] = useState<string[]>([]);
	useEffect(() => {
		setIsLoadingData(true);

		const noOfPokemonPerColor: number[] = [];
		const colorToRgba: string[] = [];

		const namesOfColors: string[] = [];
		const arrayOfHexColor: string[] = [];
		pokemonByColor.arrayOfColors.forEach((color: IColor) => {
			noOfPokemonPerColor.push(color.no_of_Pokemon);
			namesOfColors.push(color.name);
			const convertedColor = convert.keyword.rgb(color.name);
			const convertedColorToRgba = convertedColor.join(",") + ",0.7";
			colorToRgba.push(`rgba(${convertedColorToRgba})`);

			const convertedColorToHex = convert.rgb.hex(convertedColor);
			arrayOfHexColor.push(`bg-[#${convertedColorToHex}]`);
		});
		setTotalPokemonPerColor([...noOfPokemonPerColor]);

		setColorStateToRgba([...colorToRgba]);
		setColorsName([...namesOfColors]);
		dispatch(updateHexColorDataAction(arrayOfHexColor));
		setIsLoadingData(false);
	}, []);

	console.log(colorsName);
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
			<main className='pt-8 flex flex-col items-center justify-center border border-red-300 w-screen h-screen'>
				<div className='flex flex-col items-center justify-center sm:flex-row sm:justify-around  '>
					{/* for larger screen */}
					<div className='hidden  w-[400px] h-[400px] md:flex flex-col items-center justify-center border border-black  bg-white'>
						<PolarArea data={chartData} />
					</div>
					{/* for smaller screen */}
					<div className='m-2  w-[250px] h-[250px] flex flex-col items-center justify-center sm:justify-around md:hidden border border-black bg-gray-200'>
						<PolarArea
							data={chartData}
							onClick={(e) => console.log(e.target)}
						/>
					</div>
					<section className=' grid grid-cols-2 gap-1 '>
						{pokemonByColor.arrayOfColors.map((eachColor: IColor, index: number) => (
							<ColorData
								key={eachColor.id}
								name={eachColor.name}
								quantity={eachColor.no_of_Pokemon}
								color={hexColorData[index]}
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
