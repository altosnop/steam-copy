import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TGame, TState } from '../../types/types';

const initialState: TState = {
	items: [],
	params: {
		query: '',
		page: 1,
	},
	loading: false,
};

export type UrlParams = {
	query: string;
	page: number;
};

export const getGames = createAsyncThunk(
	'games/getGames',
	async ({ query, page }: UrlParams) => {
		const response = await axios.get<TGame>(
			`https://steam2.p.rapidapi.com/search/${query}/page/${page}`,
			{
				headers: {
					'X-RapidAPI-Key':
						'e6022f972dmshccaf5c1cda42304p19bb81jsn8ed37c1188ba',
					'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
				},
			}
		);

		return response.data;
	}
);

const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getGames.fulfilled, (state, action) => {
			state.items.push(action.payload);
		});
	},
});

export default gamesSlice.reducer;
