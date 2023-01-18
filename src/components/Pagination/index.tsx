import React, { useState } from 'react';
import { Wrapper, Button } from './styles';
import LeftArrowIcon from './../../assets/arrow-left.svg';
import RightArrowIcon from './../../assets/arrow-right.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getGames, setPage } from '../../store/games/gamesSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { pageSelector } from '../../store/games/gamesSelectors';

export type TPaginationProps = {
	paginate?: (page: number) => void;
};

const Pagination = () => {
	const dispatch = useAppDispatch();
	const page = useAppSelector(pageSelector);

	const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

	const getPage = () => {
		let pagesToShow = 3;
		let totalPages = 10;

		let pages = [],
			startFromNumber;

		if (totalPages <= pagesToShow) {
			startFromNumber = 1;
			pagesToShow = totalPages;
		} else {
			if (currentPage <= Math.ceil(pagesToShow / 2)) {
				startFromNumber = 1;
			} else if (
				currentPage + Math.floor((pagesToShow - 1) / 2) >=
				totalPages
			) {
				startFromNumber = totalPages - (pagesToShow - 1);
			} else {
				startFromNumber = currentPage - Math.floor(pagesToShow / 2);
			}
		}

		for (let i = 1; i <= pagesToShow; i++) {
			pages.push(startFromNumber++);
		}

		return {
			currentPage,
			totalPages,
			pages,
		};
	};

	const pager = getPage();

	return (
		<Wrapper>
			<Button disabled={currentPage === 1} onClick={onPrevPage}>
				<img src={LeftArrowIcon} alt='Left arrow' />
			</Button>
			<div>
				{pager.pages.map((page: number, index) => {
					return (
						<Button
							key={index}
							active={page === currentPage}
							onClick={() => onThisPage(page)}
						>
							{page}
						</Button>
					);
				})}
			</div>
			<Button
				disabled={currentPage === pages[pages.length - 1]}
				onClick={onNextPage}
			>
				<img src={RightArrowIcon} alt='Right arrow' />
			</Button>
		</Wrapper>
	);
};

export default Pagination;
