import React, { useState } from 'react';
import AppButton from './AppButton';
import AppTitle from './AppTitle';
import TestComponents from './testComponents';

function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<div>
			<AppTitle
				titleText="Kata-FMW"
				subText="Top 10 Most Wanted by the FBI quizz !"
			/>
			<div className="flex justify-center items-center flex-col h-screen w-screen">
				<div className="align-middle">
					{!isPlaying ? (
						<AppButton
							buttonText="play"
							bigButton={true}
							onClick={() => setIsPlaying(true)}
						/>
					) : (
						<TestComponents />
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
