import { configureStore } from '@reduxjs/toolkit';
import gamesSlice from './games/gamesSlice';

const store = configureStore({
	reducer: {
		games: gamesSlice,
	},
	devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
