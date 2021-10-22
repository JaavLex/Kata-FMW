import React from 'react';
import '../css/input.css';

type AppInputProps = {
	placeHolder: string;
};

export default function AppInput({ placeHolder }: AppInputProps) {
	return (
		<div className="mb-4 relative">
			<input
				className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 
									pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none 
									active:border-indigo-600"
				id="input"
				type="text"
			></input>
			<label
				htmlFor="input"
				className="label absolute -mt-2 mb-0 pt-4 pl-3 leading-tighter 
									text-gray-400 text-base cursor-text"
			>
				{placeHolder}
			</label>
		</div>
	);
}
