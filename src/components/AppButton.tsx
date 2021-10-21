import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

type AppButtonProps = {
	buttonText: string;
	onClick: () => void;
};

export default function AppButton({ buttonText, onClick }: AppButtonProps) {
	return (
		<div>
			<button
				className="text-white rounded-full h-80 w-80 bg-indigo-300 flex 
                  flex-col justify-center items-center content-around hover:shadow-2xl"
				onClick={onClick}
			>
				{buttonText === 'play' ? (
					<div className="text-9xl h-[128px] w-[128px]">
						<FontAwesomeIcon icon={faPlay} color="white" />
					</div>
				) : (
					<div className="text-6xl">
						<p>{buttonText}</p>
					</div>
				)}
			</button>
		</div>
	);
}
