import React from "react";
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
		<main className='h-screen border border-black'>
			<section className='absolute h-[80%] w-[200px]'>
				<SideBar />
			</section>
			<section className='text-center'>{children}</section>
		</main>
	);
};

export default DashboardLayout;
