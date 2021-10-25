/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import AppButton from './AppButton';

type ApiBlockProps = {
	starting?: boolean;
};

export default function ApiBlock({ starting = true }: ApiBlockProps) {
	const [data, setData]: any = useState();
	useEffect((): any => {
		return fetch('https://api.fbi.gov/wanted/v1/list')
			.then(response => response.ok && response.json())
			.then(data => {
				data.items.length = 8;
				setData(data.items);
				console.log(data.items);
			});
	}, []);
	return (
		<div className="flex flex-wrap justify-around content-between gap-11">
			{data &&
				data.map((item: any) => {
					return (
						<div
							className="flex justify-start items-center flex-col bg-gray-discord 
                    border-solid rounded-lg w-96 h-96 overflow-hidden text-white"
						>
							<div className="flex justify-center items-center overflow-hidden w-full h-40">
								<img
									src={item.images[0].original}
									className="object-center object-cover w-full"
								/>
							</div>
							<h3 className="font-bold text-lg">{item.title}</h3>
							<h4 className="text-red-600">→ {item.subjects[0]}</h4>
							{item.description && <p className="text-center">{item.description}</p>}

							<div className="flex justify-center items-center overflow-hidden w-full h-40"></div>
							{item.reward_text && (
								<p className="text-center text-yellow-100">{item.reward_text}</p>
							)}
						</div>
					);
				})}
		</div>
	);
}
