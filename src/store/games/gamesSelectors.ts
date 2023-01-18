import { TGame } from '../../types/types';
import { RootState } from '../configureStore';
import { likedItemsSelector } from '../likeList/likeListSelectors';

export const gamesSelector = (state: RootState) => state.games.items;
export const loadingSelector = (state: RootState) => state.games.loading;
export const selectSelector = (state: RootState) => state.games.select;
export const orderSelector = (state: RootState) => state.games.order;

// * Checking, is game liked or not *
export const isLikedGamesSelector = (state: RootState) => {
	const games = gamesSelector(state);
	const likedGames = likedItemsSelector(state);

	const resultArr: TGame[] = [...games];

	for (let i = 0; i < resultArr.length; i += 1) {
		for (let j = 0; j < likedGames.length; j += 1) {
			if (resultArr[i].appId === likedGames[j].appId) {
				const item = {
					...resultArr[i],
					liked: true,
				};

				resultArr[i] = item;
			}
		}
	}

	return resultArr;
};

// * Sorting By Price *

export const sortByPrice = (state: RootState) => {
	const games = isLikedGamesSelector(state);
	const order = orderSelector(state);

	const gamesArr = [...games];

	return gamesArr.sort((a: TGame, b: TGame) => {
		const aPrice = Number(a.price.replace(/[^0-9.-]+/g, ''));
		const bPrice = Number(b.price.replace(/[^0-9.-]+/g, ''));

		return order === 'Lower to bigger' ? aPrice - bPrice : bPrice - aPrice;
	});
};

// * Sorting By Date *

export const sortByDate = (state: RootState) => {
	const games = isLikedGamesSelector(state);
	const order = orderSelector(state);

	const gamesArr = [...games];

	return gamesArr.sort((a: TGame, b: TGame) => {
		const aDate = new Date(a.released).getTime();
		const bDate = new Date(b.released).getTime();

		return order === 'Lower to bigger' ? aDate - bDate : bDate - aDate;
	});
};

// * Final sort *

export const sortedGamesSelector = (state: RootState) => {
	const select = selectSelector(state);

	if (select === 'Price') {
		return sortByPrice(state);
	} else {
		return sortByDate(state);
	}
};
