import React from 'react';
import { Header, Menu, Wrapper, MenuWrapper, SearchBarWrapper } from './styles';
import { Container } from '../../global';

import SteamIcon from './../../assets/steam.svg';
import SearchBar from '../../components/SearchBar';
import SortBar from '../../components/SortBar';
import GamesList from '../../components/GamesList';
import Pagination from '../../components/Pagination';

const HomePage = () => {
	return (
		<Container>
			<Header>
				<Wrapper>
					<img src={SteamIcon} alt='steam logo' />
					<MenuWrapper>
						<Menu>
							<a href='/'>Search</a>
							<a href='/'>Like list</a>
						</Menu>
						<SearchBarWrapper>
							<SearchBar />
							<SortBar />
						</SearchBarWrapper>
					</MenuWrapper>
				</Wrapper>
			</Header>

			<GamesList />
			<Pagination />
		</Container>
	);
};

export default HomePage;
