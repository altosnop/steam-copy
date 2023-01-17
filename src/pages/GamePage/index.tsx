import React, { useEffect, useState } from 'react';
import { Main } from './styles';
import Header from '../../components/Header';
import { Container } from '../../global';
import { useParams } from 'react-router-dom';
import { TGame } from '../../types/types';
import axios from 'axios';

const GamePage = () => {
	const { id } = useParams();
	const [game, setGame] = useState<TGame | undefined>(undefined);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getGame = async () => {
			const response = await axios
				.get<TGame>(`https://steam2.p.rapidapi.com/appDetail/${id}`, {
					headers: {
						'X-RapidAPI-Key':
							'e6022f972dmshccaf5c1cda42304p19bb81jsn8ed37c1188ba',
						'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
					},
				})
				.finally(() => setLoading(false));

			setGame(response.data);
		};

		getGame();
	}, [id]);
	return (
		<Container>
			<Header />
			<Main>
				{loading ? (
					<p style={{ color: 'white' }}>Loading...</p>
				) : (
					<>
						<img src={game?.imgUrl} alt='Game Poster' />
						<h2>{game?.title}</h2>
						<span>{game?.released}</span>
						<p>{game?.description}</p>
						<span>{game?.price}</span>
					</>
				)}
			</Main>
		</Container>
	);
};

export default GamePage;
