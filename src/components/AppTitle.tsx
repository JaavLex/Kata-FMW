import React from 'react';

type AppTitleProps = {
	titleText: string;
};

export default function AppTitle({ titleText }: AppTitleProps) {
	return (
		<div
			className="items-center bg-gray-300 h-20 w-screen 
								flex justify-center flex-row shadow-lg"
		>
			<h1 className="text-blue-400 text-center text-4xl font-bold">{titleText}</h1>
		</div>
	);
}
