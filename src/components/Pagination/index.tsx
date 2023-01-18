import React, { useState } from 'react';
import { Wrapper, Button } from './styles';
import LeftArrowIcon from './../../assets/arrow-left.svg';
import RightArrowIcon from './../../assets/arrow-right.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getGames, setPage } from '../../store/games/gamesSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { gamesSelector, pageSelector } from '../../store/games/gamesSelectors';
import getPage from '../../service/getPage';

const Pagination = () => {
	const dispatch = useAppDispatch();
	const games = useAppSelector(gamesSelector);
	const page = useAppSelector(pageSelector);

	// I fixed the pages quantity, because there is no way in SteamAPI to get all elements to dynamicaly calculate the number of pages.
	const pages = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];

	const [currentPage, setCurrentPage] = useState(page);

	const onThisPage = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		dispatch(setPage(pageNumber));
		dispatch(getGames());
	};
	const onNextPage = () => {
		if (currentPage <= 10) {
			setCurrentPage(currentPage + 1);
			dispatch(setPage(currentPage + 1));
			dispatch(getGames());
		}
	};
	const onPrevPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
			dispatch(setPage(currentPage - 1));
			dispatch(getGames());
		}
	};

	const pager = getPage(currentPage);

	return (
		<Wrapper>
			<Button disabled={currentPage === 1} onClick={onPrevPage}>
				<img src={LeftArrowIcon} alt='Left arrow' />
			</Button>
			<div>
				{games.length === 25 ? (
					pager.pages.map((page: number, index) => {
						return (
							<Button
								key={index}
								active={page === currentPage}
								onClick={() => onThisPage(page)}
							>
								{page}
							</Button>
						);
					})
				) : (
					<Button
						active={page === currentPage}
						onClick={() => onThisPage(page)}
					>
						{page}
					</Button>
				)}
			</div>
			<Button
				disabled={currentPage === pages[pages.length - 1] || games.length < 25}
				onClick={onNextPage}
			>
				<img src={RightArrowIcon} alt='Right arrow' />
			</Button>
		</Wrapper>
	);
};

export default Pagination;
