import { RootState } from '../configureStore';

export const likedItemsSelector = (state: RootState) => state.likeList.items;
