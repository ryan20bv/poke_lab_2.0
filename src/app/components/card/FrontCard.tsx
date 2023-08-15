import React from "react";
import Image from "next/image";

interface PropsType {
	id: string;
	srcImage: string;
	onFlip: () => void;
}

const FrontCard: React.FC<PropsType> = ({ id, srcImage, onFlip }) => {
	return (
		<div
			className='bg-white '
			onClick={onFlip}
		>
			<p>{id}</p>
			<Image
				src={srcImage}
				alt='pokemon'
				width={100}
				height={100}
			/>
		</div>
	);
};

export default FrontCard;
