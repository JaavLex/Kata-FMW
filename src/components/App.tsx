import { useState } from 'react';
import ApiBlock from './apiBlock';
import AppButton from './AppButton';
import AppTitle from './AppTitle';

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
						<ApiBlock />
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
