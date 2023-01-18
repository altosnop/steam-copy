import React, { useState } from 'react';

import { Wrapper, Button } from './styles';

import LeftArrowIcon from './../../assets/arrow-left.svg';
import RightArrowIcon from './../../assets/arrow-right.svg';

export type TPaginationProps = {
	paginate?: (page: number) => void;
};

const Pagination = () => {
	const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const [currentPage, setCurrentPage] = useState(1);

	const onThisPage = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const onNextPage = () => {
		if (currentPage <= 10) {
			setCurrentPage(currentPage + 1);
		}
	};

	const onPrevPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<Wrapper>
			<Button disabled={currentPage === 1} onClick={onPrevPage}>
				<img src={LeftArrowIcon} alt='Left arrow' />
			</Button>
			<div>
				{pages.map((page: number, index) => {
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
