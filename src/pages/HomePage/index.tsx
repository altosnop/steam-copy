import React from 'react';
import { Container } from '../../global';
import GamesList from '../../components/GamesList';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
	loadingSelector,
	sortedGamesSelector,
} from '../../store/games/gamesSelectors';

const HomePage = () => {
	const loading = useAppSelector(loadingSelector);
	const sortedGames = useAppSelector(sortedGamesSelector);

	return (
		<Container>
			<Header />
			<GamesList items={sortedGames} />
			{sortedGames.length > 0 && !loading ? <Pagination /> : ''}
		</Container>
	);
};

export default HomePage;
