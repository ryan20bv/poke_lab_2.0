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
			className='bg-white w-40 h-40'
			onClick={onFlip}
		>
			<p>{id}</p>
			<Image
				src={srcImage}
				alt='pokemon'
				width={150}
				height={150}
				// layout='fill'
				objectFit='contain'
			/>
		</div>
	);
};

export default FrontCard;
