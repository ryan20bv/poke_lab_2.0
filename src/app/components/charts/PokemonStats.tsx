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
		labels: Object.keys(stats),
		datasets: [
			{
				label: "Stats",
				data: Object.values(stats),
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
		],
	};
	return <Radar data={data} />;
};

export default PokemonStats;
