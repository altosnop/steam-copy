import { TGame } from '../../types/types';
import { RootState } from '../configureStore';

export const gamesSelector = (state: RootState) => state.games.items;
export const loadingSelector = (state: RootState) => state.games.loading;
export const selectSelector = (state: RootState) => state.games.select;
export const orderSelector = (state: RootState) => state.games.order;

// * Sorting By Price *

export const sortByPrice = (state: RootState) => {
	const games = gamesSelector(state);
	const order = orderSelector(state);

	const gamesArr = [...games];

	return gamesArr.sort((a: TGame, b: TGame) => {
		const aPrice = Number(a.price.replace(/[^0-9.-]+/g, ''));
		const bPrice = Number(b.price.replace(/[^0-9.-]+/g, ''));

		if (isNaN(aPrice) || isNaN(bPrice)) {
			return 0;
		}

		return order === 'Lower to bigger' ? aPrice - bPrice : bPrice - aPrice;
	});
};

// * Sorting By Date *

export const sortByDate = (state: RootState) => {
	const games = gamesSelector(state);
	const order = orderSelector(state);

	const gamesArr = [...games];

	return gamesArr.sort((a: TGame, b: TGame) => {
		const aDate = new Date(a.released).getTime();
		const bDate = new Date(b.released).getTime();

		if (isNaN(aDate) || isNaN(bDate)) {
			return 0;
		}

		return order === 'Lower to bigger' ? aDate - bDate : bDate - aDate;
	});
};

// * sort *

export const sortedGamesSelector = (state: RootState) => {
	const select = selectSelector(state);

	if (select === 'Price') {
		return sortByPrice(state);
	} else {
		return sortByDate(state);
	}
};
