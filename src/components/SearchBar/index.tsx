import React, { useState } from 'react';
import { SearchForm } from './styles';

import SearchIcon from './../../assets/search.svg';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getGames } from '../../store/games/gamesSlice';

const SearchBar = () => {
	const history = useNavigate();
	const dispatch = useAppDispatch();
	const [query, setQuery] = useState('');

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.currentTarget.value);
	};

	const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const params = {
			query,
			page: 1,
		};

		dispatch(getGames(params));
		history('/');
	};
	return (
		<SearchForm onSubmit={onFormSubmit}>
			<input
				type='text'
				name='game'
				id='game'
				placeholder='Enter an app name...'
				value={query}
				onChange={onInputChange}
			/>
			<button type='submit'>
				<img src={SearchIcon} alt='Search' height='20' />
			</button>
		</SearchForm>
	);
};

export default SearchBar;
