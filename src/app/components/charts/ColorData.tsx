import React from "react";

interface PropsType {
	name: string;
	color: string;
	quantity: number;
}

const ColorData: React.FC<PropsType> = ({ name, color, quantity }) => {
	const colorClassMap: Record<string, string> = {
		black: "bg-[#000000]",
		blue: "bg-[#0000FF]",
		brown: "bg-[#A52A2A]",
		gray: "bg-[#808080]",
		green: "bg-[#008000]",
		pink: "bg-[#FFC0CB]",
		purple: "bg-[#800080]",
		red: "bg-[#FF0000]",
		white: "bg-[#FFFFFF]",
		yellow: "bg-[#FFFF00]",

		// Add more color mappings here if needed
	};

	const bgColor = colorClassMap[name] || "";
	return (
		<div
			className='flex border border-black w-40 p-1 text-sm bg-gray-200'
			key={name}
		>
			<p className='w-10'>{name}</p>

			<div className={`${bgColor} w-12 h-full mx-2`}></div>
			<p>= {quantity}</p>
		</div>
	);
};

export default ColorData;
