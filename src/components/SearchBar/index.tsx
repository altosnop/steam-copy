import React from 'react';
import { SearchForm } from './styles';

import SearchIcon from './../../assets/search.svg';

const SearchBar = () => {
	return (
		<SearchForm>
			<input
				type='text'
				name='game'
				id='game'
				placeholder='Enter an app name...'
			/>
			<button type='submit'>
				<img src={SearchIcon} alt='Search' height='20' />
			</button>
		</SearchForm>
	);
};

export default SearchBar;
