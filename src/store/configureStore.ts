import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gamesSlice from './games/gamesSlice';
import likeListSlice from './likeList/likeListSlice';
import storage from 'redux-persist/lib/storage';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

const reducers = combineReducers({
	games: gamesSlice,
	likeList: likeListSlice,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['likeList'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV === 'development',
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
