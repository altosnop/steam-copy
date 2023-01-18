import React from 'react';
import { Wrapper } from './styles';
import GameCard from '../GameCard';
import { useAppSelector } from '../../hooks/useAppSelector';
import { loadingSelector } from '../../store/games/gamesSelectors';
import { TGamesListProps } from '../../types/types';

const GamesList = ({ items }: TGamesListProps) => {
	const loading = useAppSelector(loadingSelector);

	return (
		<Wrapper>
			{loading ? (
				<p style={{ color: 'white' }}>Loading...</p>
			) : (
				items.map((game, index) => {
					return (
						<GameCard
							// I set the key for element as an index, because not all recieved elements have their own ID, sometimes undefined happens. I know that it is bad practice, to set key as an index.
							key={index}
							id={game.appId}
							img={game.imgUrl}
							url={game.url}
							title={game.title}
							date={game.released}
							price={game.price}
							liked={game.liked}
						/>
					);
				})
			)}
		</Wrapper>
	);
};

export default GamesList;
