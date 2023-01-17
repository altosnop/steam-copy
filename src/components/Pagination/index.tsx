import React from 'react';

import { Wrapper, Button } from './styles';

import LeftArrowIcon from './../../assets/arrow-left.svg';
import RightArrowIcon from './../../assets/arrow-right.svg';

const Pagination = () => {
	return (
		<Wrapper>
			<Button>
				<img src={LeftArrowIcon} alt='Left arrow' />
			</Button>
			<div>
				<Button active>1</Button>
				<Button>2</Button>
				<Button>3</Button>
			</div>
			<Button>
				<img src={RightArrowIcon} alt='Right arrow' />
			</Button>
		</Wrapper>
	);
};

export default Pagination;
