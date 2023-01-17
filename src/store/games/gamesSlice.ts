import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TGame, TState, TUrlParams } from '../../types/types';

const initialState: TState = {
	items: [],
	params: {
		query: '',
		page: 1,
	},
	select: 'Price',
	order: '',
	loading: false,
};

export const getGames = createAsyncThunk(
	'games/getGames',
	async ({ query, page }: TUrlParams, { rejectWithValue, dispatch }) => {
		const response = await axios.get<TGame[]>(
			`https://steam2.p.rapidapi.com/search/${query}/page/${page}`,
			{
				headers: {
					'X-RapidAPI-Key':
						'e6022f972dmshccaf5c1cda42304p19bb81jsn8ed37c1188ba',
					'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
				},
			}
		);

		dispatch(reset(''));
		dispatch(setGames(response.data));
	}
);

const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		setGames: (state, action: PayloadAction<TGame[]>) => {
			state.items = [...state.items, ...action.payload];
		},
		setSelect: (state, action: PayloadAction<string>) => {
			state.select = action.payload;
		},
		setOrder: (state, action: PayloadAction<string>) => {
			state.order = action.payload;
		},
		reset: (state, _) => {
			state.items = [];
			state.select = 'Price';
			state.order = '';
			state.loading = false;
		},
	},
	extraReducers: builder => {
		builder.addCase(getGames.pending, (state, _) => {
			state.loading = true;
		});
		builder.addCase(getGames.fulfilled, (state, _) => {
			state.loading = false;
		});
	},
});

export const { setGames, setSelect, setOrder, reset } = gamesSlice.actions;

export default gamesSlice.reducer;
