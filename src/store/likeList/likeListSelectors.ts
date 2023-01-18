import { RootState } from '../configureStore';

export const likedItemsSelector = (state: RootState) => state.likeList.items;
export const totalCountSelector = (state: RootState) =>
	state.likeList.totalCount;
