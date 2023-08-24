import React from "react";

interface PropsType {
	children: React.ReactNode;
}

const PokemonByColorLayout: React.FC<PropsType> = ({ children }) => {
	return <section className='pt-10 border border-red-400'>{children}</section>;
};

export default PokemonByColorLayout;
