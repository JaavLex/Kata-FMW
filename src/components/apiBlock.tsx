/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import AppButton from './AppButton';

type ApiBlockProps = {
	starting?: boolean;
};

export default function ApiBlock({ starting = true }: ApiBlockProps) {
	const [cardList, setCardList]: any = useState();
	useEffect((): any => {
		return fetch('https://api.fbi.gov/wanted/v1/list')
			.then(response => response.ok && response.json())
			.then(data => {
				let tempData: any[] = [];
				data.items.length = 8;
				data.items.forEach((e: any, i: any) => tempData.push({ id: i, info: e }));
				setCardList(tempData);
				console.log(cardList);
			});
	}, []);

	function removeCard(cardId: number) {
		const templList = [...cardList];
		cardList.forEach((e: any, i: any) => e.id === cardId && templList.splice(i, 1));
		setCardList(templList);
	}

	return (
		<div className="flex flex-wrap justify-around content-between gap-11">
			{cardList &&
				cardList.map((item: any) => {
					return (
						<div
							className="flex justify-start items-center flex-col bg-gray-discord 
                    border-solid rounded-lg w-96 h-96 overflow-hidden text-white"
						>
							<div className="overflow-hidden w-full h-40">
								<button
									className="bg-none outline-none w-2 h-2 font-bold absolute p-3"
									onClick={() => removeCard(item.id)}
								>
									⤬
								</button>
								<img
									src={item.info.images[0].original}
									className="object-center object-cover w-full"
								/>
							</div>
							<h3 className="font-bold text-lg">{item.info.title}</h3>
							<h4 className="text-red-600">→ {item.info.subjects[0]}</h4>
							{item.info.description && (
								<p className="text-center">{item.info.description}</p>
							)}
							{item.info.reward_text && (
								<p className="text-center text-yellow-100">
									{item.info.reward_text}
								</p>
							)}
						</div>
					);
				})}
		</div>
	);
}
