import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

type AppButtonProps = {
	buttonText: string;
	bigButton?: boolean;
	onClick: () => void;
};

export default function AppButton({
	buttonText,
	bigButton = false,
	onClick,
}: AppButtonProps) {
	return (
		<div>
			{bigButton ? (
				<button
					className="text-white rounded-full h-80 w-80 bg-indigo-300 flex 
                  flex-col justify-center items-center content-around transition 
                  duration-200 hover:shadow-2xl"
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
			) : (
				<button
					className="text-white rounded-lg h-14 w-28 bg-indigo-300 flex 
                  flex-row justify-center items-center content-around transition 
                  duration-200 hover:shadow-2xl"
					onClick={onClick}
				>
					<div className="text-3xl">
						<p>{buttonText}</p>
					</div>
				</button>
			)}
		</div>
	);
}
