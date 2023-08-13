import React from "react";
import { useRouter } from "next/navigation";

const AppTitle = () => {
	const router = useRouter();
	const goToHomePageHandler = () => {
		router.push(`${process.env.NEXT_PUBLIC_FRONT_END_URL}/`);
	};
	return (
		<span
			className='self-center text-xl font-semibold md:text-2xl whitespace-nowrap dark:text-white'
			onClick={goToHomePageHandler}
		>
			PokeLab
		</span>
	);
};

export default AppTitle;
