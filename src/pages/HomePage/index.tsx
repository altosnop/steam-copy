import React from 'react';
import { Header } from './styles';

import SteamIcon from './../../assets/steam.svg';

const HomePage = () => {
	return (
		<>
			<Header>
				<img src={SteamIcon} alt='steam logo' />
			</Header>
		</>
	);
};

export default HomePage;
