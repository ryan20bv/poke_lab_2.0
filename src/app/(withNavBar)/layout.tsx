"use client";
import React, { useState, useEffect } from "react";
import DashboardNav from "../_components/nav/DashboardNav";
import SideBar from "../_components/ui/SideBar";
import useWindowSize from "../_customHooks/use-windowSize";

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
	const isLargeScreen = windowSize.width > 768 ? true : false;

	return (
		<main className='w-screen h-screen'>
			<DashboardNav
				isSideBarOpen={isSideBarOpen}
				openSideBarHandler={openSideBarHandler}
				closeSideBarHandler={closeSideBarHandler}
			/>
			<section className='flex h-full border border-black'>
				{isSideBarOpen && (
					<SideBar
						isSideBarOpen={isSideBarOpen}
						isLargeScreen={isLargeScreen}
					/>
				)}
				<div className='pt-20 w-full '>{children}</div>
			</section>
		</main>
	);
};

export default DashboardLayout;
