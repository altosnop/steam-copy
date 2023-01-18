import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGame, TLikeListState } from '../../types/types';

const initialState: TLikeListState = {
	items: [],
	totalCount: 0,
};

const likeListSlice = createSlice({
	name: 'likeList',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<TGame>) => {
			const likedItem = {
				...action.payload,
				liked: true,
			};

			state.items = [likedItem, ...state.items];
			state.totalCount = state.items.length;
		},
		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter(item => item.appId !== action.payload);
			state.totalCount = state.items.length;
		},
	},
});

export const { addItem, removeItem } = likeListSlice.actions;

export default likeListSlice.reducer;
