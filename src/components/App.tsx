import React from 'react';
import AppButton from './AppButton';
import AppTitle from './AppTitle';
import QuizzBlock from './quizzBlock';

function App() {
	return (
		<div>
			<AppTitle
				titleText="Kata-FMW"
				subText="Top 10 Most Wanted by the FBI quizz !"
			/>
			<div className="flex justify-center items-center flex-col h-screen w-screen">
				<div className="align-middle">
					{true ? (
						<AppButton buttonText="play" onClick={() => alert('You clicked it !')} />
					) : (
						<QuizzBlock starting={true}></QuizzBlock>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
