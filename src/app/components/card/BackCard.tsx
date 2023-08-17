import React from "react";
import { motion } from "framer-motion";
import PokemonStats from "../charts/PokemonStats";
import { IPokemonData } from "@/app/data/dataTypes";

interface PropsType {
	onFlip: () => void;
	pokemonData: IPokemonData;
}

const BackCard: React.FC<PropsType> = ({ onFlip, pokemonData }) => {
	return (
		<div
			className=' bg-white p-1 flex items-center justify-center cursor-pointer '
			onClick={onFlip}
		>
			<motion.p
				initial={{ rotateY: 0 }}
				animate={{ rotateY: 180 }}
				transition={{ duration: 0.6 }}
			>
				<PokemonStats stats={pokemonData.stats} />
			</motion.p>
		</div>
	);
};

export default BackCard;
