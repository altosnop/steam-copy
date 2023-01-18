import { configureStore } from '@reduxjs/toolkit';
import gamesSlice from './games/gamesSlice';
import likeListSlice from './likeList/likeListSlice';

const store = configureStore({
	reducer: {
		games: gamesSlice,
		likeList: likeListSlice,
	},
	devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
