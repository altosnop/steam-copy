import React from 'react';

import { Container } from '../../global';
import GamesList from '../../components/GamesList';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';

const HomePage = () => {
	return (
		<Container>
			<Header />
			<GamesList />
			<Pagination />
		</Container>
	);
};

export default HomePage;
