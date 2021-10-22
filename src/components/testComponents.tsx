import React from 'react';
import AppButton from './AppButton';
import AppInput from './AppInput';

export default function TestComponents() {
	return (
		<div
			className="flex justify-center items-center flex-col gap-2 bg-gray-discord 
                    border-solid rounded-lg w-80 h-96 
                    sm:w-[500px] sm:h-[500px] shadow-lg"
		>
			<AppButton buttonText="Play !" onClick={() => void 1} />
			<AppInput placeHolder="Test question" />
		</div>
	);
}
