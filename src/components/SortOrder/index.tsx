import React, { useState } from 'react';
import { OrderContainer, Button, Items, ItemBtn } from './styles';
import OptionsIcon from './../../assets/options.svg';

const SordOrder = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = useState('');

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
		<OrderContainer>
			<Button onClick={handleSelect}>
				<img src={OptionsIcon} alt='Options' height='19' />
			</Button>
			{isOpen && (
				<Items>
					<ItemBtn onClick={handleSelectValue} value='Lower to bigger'>
						Lower to bigger
					</ItemBtn>
					<ItemBtn onClick={handleSelectValue} value='Bigger to lower'>
						Bigger to lower
					</ItemBtn>
				</Items>
			)}
		</OrderContainer>
	);
};

export default SordOrder;
