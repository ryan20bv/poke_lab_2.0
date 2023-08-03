import React from "react";
import DashboardNav from "../components/nav/DashboardNav";
import SideBar from "../components/ui/SideBar";

export const metadata = {
	title: "Dashboard PokeLab",
	description: "Pokemon Laboratory Dashboard",
};
interface PropsType {
	children: React.ReactNode;
}

const DashboardLayout: React.FC<PropsType> = ({ children }) => {
	return (
		<main className='h-screen overflow-x-scroll'>
			<DashboardNav />
			<SideBar />

			{children}
		</main>
	);
};

export default DashboardLayout;
