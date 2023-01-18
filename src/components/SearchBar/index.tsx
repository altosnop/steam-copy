import React, { useState, useRef } from 'react';
import { SearchForm } from './styles';
import SearchIcon from './../../assets/search.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getGames } from '../../store/games/gamesSlice';
import { debounce } from 'lodash';
import { TUrlParams } from '../../types/types';

const SearchBar = () => {
	const dispatch = useAppDispatch();
	const [query, setQuery] = useState('');

	const debaunceFn = useRef(
		debounce((params: TUrlParams) => dispatch(getGames(params)), 1000)
	).current;

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const params = {
			query: e.currentTarget.value,
			page: 1,
		};

		setQuery(e.currentTarget.value);
		debaunceFn(params);
	};

	return (
		<SearchForm>
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
