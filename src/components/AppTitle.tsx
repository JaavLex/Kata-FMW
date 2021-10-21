import React from 'react';

type AppTitleProps = {
	titleText: string;
	subText: string;
};

export default function AppTitle({ titleText, subText }: AppTitleProps) {
	return (
		<div
			className="items-center bg-gray-discord h-20 w-screen 
								flex justify-center flex-col shadow-lg absolute"
		>
			<h1 className="text-center text-white text-4xl font-bold">{titleText}</h1>
			<h2 className="text-center text-white text-2xl font-bold">{subText}</h2>
		</div>
	);
}
