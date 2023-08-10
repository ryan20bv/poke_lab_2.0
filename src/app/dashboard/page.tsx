import React from "react";
import ColorChart from "../components/charts/ColorChart";

const DashboardPage = () => {
	return (
		<main className='p-4 sm:ml-64 border border-red-400 '>
			<h1>dash board page</h1>
			<div className='flex justify-center'>
				<ColorChart />
			</div>
		</main>
	);
};

export default DashboardPage;
