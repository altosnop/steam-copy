import React, { useState } from 'react';

import { SelectContainer, SelectBtn, SelectItems, Item } from './styles';

import ArrowUpIcon from './../../assets/arrow-up.svg';
import ArrowDownIcon from './../../assets/arrow-down.svg';
import PriceIcon from './../../assets/pricetags.svg';
import DateIcon from './../../assets/browser.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectSelector } from '../../store/games/gamesSelectors';
import { setSelect } from '../../store/games/gamesSlice';

const SortSelect = () => {
	const dispatch = useAppDispatch();
	const select = useAppSelector(selectSelector);
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = () => {
		setIsOpen(!isOpen);
	};

	const handleSelectValue = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		dispatch(setSelect(e.currentTarget.value));
		setIsOpen(false);
	};

	return (
		<SelectContainer>
			<SelectBtn onClick={handleSelect}>
				{select}
				<img src={isOpen ? ArrowUpIcon : ArrowDownIcon} alt='' width='18' />
			</SelectBtn>
			{isOpen && (
				<SelectItems>
					<Item onClick={handleSelectValue} value='Price'>
						Price <img src={PriceIcon} alt='Price' width='20' />
					</Item>
					<Item onClick={handleSelectValue} value='Publich Date'>
						Publish Date <img src={DateIcon} alt='Date' width='20' />
					</Item>
				</SelectItems>
			)}
		</SelectContainer>
	);
};

export default SortSelect;
