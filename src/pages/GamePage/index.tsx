import React from 'react';
import { Main } from './styles';
import Header from '../../components/Header';
import { Container } from '../../global';

const GamePage = () => {
	return (
		<Container>
			<Header />
			<Main>
				<img
					src='https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1631908705'
					alt='Game Poster'
				/>
				<h2>Counter-Strike: Global Offensive</h2>
				<span>21 Aug, 2012</span>
				<p>
					Counter-Strike: Global Offensive (CS: GO) expands upon the team-based
					action gameplay that it pioneered when it was launched 19 years ago.
					CS: GO features new maps, characters, weapons, and game modes, and
					delivers updated versions of the classic CS content (de_dust2, etc.).
				</p>
				<span>Free to Play</span>
			</Main>
		</Container>
	);
};

export default GamePage;
