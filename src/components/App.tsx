import React from 'react';
import AppTitle from './AppTitle';
import QuizzBlock from './quizzBlock';

function App() {
	return (
		<div className="flex justify-center items-center flex-col">
			<AppTitle titleText="Kata-FMW" />
			<div className="align-middle">
				<QuizzBlock></QuizzBlock>
			</div>
		</div>
	);
}

export default App;
