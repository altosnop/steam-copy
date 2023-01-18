import React from 'react';
import GamesList from '../../components/GamesList';
import Header from '../../components/Header';
import { Container } from '../../global';
import { useAppSelector } from '../../hooks/useAppSelector';
import { likedItemsSelector } from '../../store/likeList/likeListSelectors';

const LikeListPage = () => {
	const likedItems = useAppSelector(likedItemsSelector);
	return (
		<Container>
			<Header />
			<GamesList items={likedItems} />
		</Container>
	);
};

export default LikeListPage;
