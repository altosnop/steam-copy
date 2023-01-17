import React from 'react';

import { Container } from '../../global';
import GamesList from '../../components/GamesList';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';
import { useAppSelector } from '../../hooks/useAppSelector';
import { gamesSelector } from '../../store/games/gamesSelectors';

const HomePage = () => {
	const games = useAppSelector(gamesSelector);
	return (
		<Container>
			<Header />
			<GamesList />
			{games.length > 0 && <Pagination />}
		</Container>
	);
};

export default HomePage;
