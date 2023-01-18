import React from 'react';
import { Wrapper } from './styles';
import GameCard from '../GameCard';
import { useAppSelector } from '../../hooks/useAppSelector';
import { loadingSelector } from '../../store/games/gamesSelectors';
import { TGame } from '../../types/types';

export type TGamesListProps = {
	items: TGame[];
};

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
