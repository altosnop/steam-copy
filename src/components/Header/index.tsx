import React from 'react';
import {
	HeaderStyled,
	Menu,
	Wrapper,
	MenuWrapper,
	SearchBarWrapper,
} from './styles';

import SteamIcon from './../../assets/steam.svg';
import SearchBar from '../../components/SearchBar';
import SortBar from '../../components/SortBar';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<HeaderStyled>
			<Wrapper>
				<img src={SteamIcon} alt='steam logo' />
				<MenuWrapper>
					<Menu>
						<Link to='/'>Search</Link>
						<Link to='/like-list'>Like list</Link>
					</Menu>
					<SearchBarWrapper>
						<SearchBar />
						<SortBar />
					</SearchBarWrapper>
				</MenuWrapper>
			</Wrapper>
		</HeaderStyled>
	);
};

export default Header;
