import React from 'react';
import { GameCardStyled, GameImg } from './styles';

import PlayIcon from './../../assets/play.svg';
import HeartIcon from './../../assets/heart.svg';
import FilledHeartIcon from './../../assets/filled-heart.svg';

const GameCard = () => {
	return (
		<GameCardStyled>
			<GameImg
				src={
					'http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6'
				}
				alt='Game'
			/>
			<div>
				<h3>Counter-Strike: Global Offensive</h3>
				<p>21 Aug, 2012</p>
				<span>8,19€</span>
				{true ? (
					<button>
						<img src={PlayIcon} alt='Play' />
					</button>
				) : (
					''
				)}
			</div>
			<button>
				<img src={true ? FilledHeartIcon : HeartIcon} alt='Heart' />
			</button>
		</GameCardStyled>
	);
};

export default GameCard;
