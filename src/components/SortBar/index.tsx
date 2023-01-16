import React from 'react';
import { SortBarStyled } from './styles';
import SordOrder from '../SortOrder';
import SortSelect from '../SortSelect';

const SortBar = () => {
	return (
		<SortBarStyled>
			<SortSelect />
			<SordOrder />
		</SortBarStyled>
	);
};

export default SortBar;
