import React from 'react';
import GamesList from '../../components/GamesList';
import Header from '../../components/Header';
import { Container } from '../../global';

const LikeListPage = () => {
	return (
		<Container>
			<Header />
			<GamesList />
		</Container>
	);
};

export default LikeListPage;
