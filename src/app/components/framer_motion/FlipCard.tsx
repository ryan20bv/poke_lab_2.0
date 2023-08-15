import React, { useState } from "react";
import { motion } from "framer-motion";
import FrontCard from "../card/FrontCard";
import BackCard from "../card/BackCard";
import { IPokemonData } from "@/app/data/dataTypes";

interface PropsType {
	id: string;
	pokemonData: IPokemonData;
}

const FlipCard: React.FC<PropsType> = ({ id, pokemonData }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const toggleFlip = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<div className='perspective-origin-center'>
			{/* // <div className='w-64 h-80 '> */}
			<motion.div
				// className={`w-full h-full absolute transform ${
				className={`w-full h-full transform ${isFlipped ? "-rotate-y-180" : ""}`}
				initial='front'
				animate={isFlipped ? "back" : "front"}
				variants={{
					front: { rotateY: 0 },
					back: { rotateY: 180 },
				}}
				transition={{ duration: 0.6 }}
			>
				{isFlipped ? (
					<BackCard
						onFlip={toggleFlip}
						pokemonData={pokemonData}
					/>
				) : (
					<FrontCard
						onFlip={toggleFlip}
						id={id}
						srcImage={pokemonData.srcImage}
					/>
				)}
			</motion.div>
		</div>
	);
};

export default FlipCard;
