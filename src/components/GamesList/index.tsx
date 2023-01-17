import React from 'react';
import { Wrapper } from './styles';
import GameCard from '../GameCard';

const GamesList = () => {
	return (
		<Wrapper>
			<GameCard />
			<GameCard />
		</Wrapper>
	);
};

export default GamesList;