import React from 'react';
import { Wrapper } from './styles';
import GameCard from '../GameCard';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
	loadingSelector,
	sortedGamesSelector,
} from '../../store/games/gamesSelectors';

const GamesList = () => {
	const loading = useAppSelector(loadingSelector);
	const sortedGames = useAppSelector(sortedGamesSelector);

	return (
		<Wrapper>
			{loading ? (
				<p style={{ color: 'white' }}>Loading...</p>
			) : (
				sortedGames.map((game, index) => {
					return (
						<GameCard
							key={index}
							id={game.appId}
							img={game.imgUrl}
							title={game.title}
							date={game.released}
							price={game.price}
						/>
					);
				})
			)}
		</Wrapper>
	);
};

export default GamesList;
