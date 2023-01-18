import React, { useRef } from 'react';
import { SearchForm } from './styles';
import SearchIcon from './../../assets/search.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getGames, setPage, setQuery } from '../../store/games/gamesSlice';
import { debounce } from 'lodash';
import { useAppSelector } from '../../hooks/useAppSelector';
import { querySelector } from '../../store/games/gamesSelectors';

const SearchBar = () => {
	const dispatch = useAppDispatch();
	const query = useAppSelector(querySelector);

	const debaunceFn = useRef(debounce(() => dispatch(getGames()), 1000)).current;

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setQuery(e.currentTarget.value));
		dispatch(setPage(1));
		debaunceFn();
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<SearchForm onSubmit={onSubmit}>
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
