import React, { useState } from 'react';

import { SelectContainer, SelectBtn, SelectItems, Item } from './styles';

import ArrowUpIcon from './../../assets/arrow-up.svg';
import ArrowDownIcon from './../../assets/arrow-down.svg';
import PriceIcon from './../../assets/pricetags.svg';
import DateIcon from './../../assets/browser.svg';

const SortSelect = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = useState('Price');

	const handleSelect = () => {
		setIsOpen(!isOpen);
	};

	const handleSelectValue = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setValue(e.currentTarget.value);
		setIsOpen(false);
	};

	return (
		<SelectContainer>
			<SelectBtn onClick={handleSelect}>
				{value}
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
