import React from 'react';
import AppButton from './AppButton';

type QuizzBlockProps = {
	starting?: boolean;
};

export default function QuizzBlock({ starting = true }: QuizzBlockProps) {
	return (
		<div
			className="flex justify-center items-center bg-gray-discord 
                    border-solid rounded-lg w-80 h-96 
                    sm:w-[500px] sm:h-[500px] shadow-lg"
		>
			{starting ? (
				<AppButton buttonText="Play !" onClick={() => void 1} />
			) : (
				<h1>TEEEST</h1>
			)}
		</div>
	);
}
