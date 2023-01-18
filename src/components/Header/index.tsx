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
import { useAppSelector } from '../../hooks/useAppSelector';
import { totalCountSelector } from '../../store/likeList/likeListSelectors';

const Header = () => {
	const totalCount = useAppSelector(totalCountSelector);
	return (
		<HeaderStyled>
			<Wrapper>
				<Link to='/'>
					<img src={SteamIcon} alt='steam logo' />
				</Link>
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
