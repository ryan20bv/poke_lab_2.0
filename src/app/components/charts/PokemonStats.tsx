import React from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { IStats } from "@/app/data/dataTypes";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

interface PropsType {
	stats: IStats;
}

const PokemonStats: React.FC<PropsType> = ({ stats }) => {
	const data = {
		// labels: Object.keys(stats),
		labels: [1, 2, 3, 4, 5, 6],
		datasets: [
			{
				label: "Stats",
				data: Object.values(stats),
				backgroundColor: "rgba(0, 0, 255, 0.2)",
				borderColor: "rgba(0, 0, 255, 0.2)",
				borderWidth: 1,
			},
		],
	};
	const options = {
		scales: {
			r: {
				pointLabels: {
					color: "blue",
				},
			},
		},
		plugins: {
			legend: {
				display: false, // Set this to false to hide the dataset labels in the legend
			},
		},
	};
	return (
		<div className='w-40 h-40'>
			<Radar
				data={data}
				options={options}
			/>
		</div>
	);
};

export default PokemonStats;
