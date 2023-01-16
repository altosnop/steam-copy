import React from 'react';
import { Header, Menu, Wrapper } from './styles';
import { Container } from '../../global';

import SteamIcon from './../../assets/steam.svg';
import SearchBar from '../../components/SearchBar';
import SortBar from '../../components/SortBar';
import GamesList from '../../components/GamesList';

const HomePage = () => {
	return (
		<Container>
			<Header>
				<Wrapper>
					<img src={SteamIcon} alt='steam logo' />
					<Menu>
						<a href='/'>Search</a>
						<a href='/'>Like list</a>
					</Menu>
				</Wrapper>
				<SearchBar />
				<SortBar />
			</Header>
			<GamesList />
		</Container>
	);
};

export default HomePage;
