"use client";
import React from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
	// labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	datasets: [
		{
			// label: "# of Votes",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				"black,0.5",
				"rgba(54, 162, 235, 0.5)",
				"rgba(255, 206, 86, 0.5)",
				"rgba(75, 192, 192, 0.5)",
				"rgba(153, 102, 255, 0.5)",
				"rgba(255, 159, 64, 0.5)",
			],
			borderWidth: 1,
		},
	],
};

const ColorChart = () => {
	return (
		<div>
			{/* for larger screen */}
			<div className='hidden mt-10 w-[300px] h-[300px] sm:flex flex-col items-center justify-center border border-black p-4'>
				<PolarArea data={data} />
				<p>Pokemon by Color</p>
			</div>
			{/* for smaller screen */}
			<div className='mt-10 w-[300px] h-[300px] flex flex-col items-center justify-center border border-black p-4'>
				<PolarArea data={data} />
				<p>Pokemon by Color</p>
			</div>
		</div>
	);
};
export default ColorChart;
