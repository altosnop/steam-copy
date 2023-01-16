import { createSlice } from '@reduxjs/toolkit';
import { TState } from '../../types/types';

const initialState: TState = {
	items: [],
	params: {
		query: '',
		page: 1,
	},
	loading: false,
};

const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {},
});

export default gamesSlice.reducer;
