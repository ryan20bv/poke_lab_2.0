"use client";
import React, { useState, useEffect } from "react";
import DashboardNav from "../components/nav/DashboardNav";
import SideBar from "../components/ui/SideBar";
import useWindowSize from "../customHooks/use-windowSize";

export const metadata = {
	title: "Dashboard PokeLab",
	description: "Pokemon Laboratory Dashboard",
};
interface PropsType {
	children: React.ReactNode;
}

const DashboardLayout: React.FC<PropsType> = ({ children }) => {
	const windowSize = useWindowSize();
	const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

	useEffect(() => {
		if (windowSize.width <= 768) {
			setIsSideBarOpen(false);
		} else {
			setIsSideBarOpen(true);
		}
	}, [windowSize]);

	const openSideBarHandler = () => {
		setIsSideBarOpen(true);
	};
	const closeSideBarHandler = () => {
		setIsSideBarOpen(false);
	};

	return (
		<main className='h-screen overflow-x-scroll'>
			<DashboardNav
				isSideBarOpen={isSideBarOpen}
				openSideBarHandler={openSideBarHandler}
				closeSideBarHandler={closeSideBarHandler}
			/>
			{isSideBarOpen && <SideBar isSideBarOpen={isSideBarOpen} />}

			{children}
		</main>
	);
};

export default DashboardLayout;
