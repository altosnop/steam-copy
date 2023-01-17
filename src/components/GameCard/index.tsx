import React from 'react';
import { GameCardStyled, GameImg } from './styles';

import PlayIcon from './../../assets/play.svg';
import HeartIcon from './../../assets/heart.svg';
import FilledHeartIcon from './../../assets/filled-heart.svg';
import { Link } from 'react-router-dom';

export type TGameCardProps = {
	id: string;
	img: string;
	title: string;
	date: string;
	price: string;
};

const linkStyle = {
	textDecoration: 'none',
	color: 'white',
};

const GameCard = ({ id, img, title, date, price }: TGameCardProps) => {
	return (
		<GameCardStyled>
			<Link to={`/game/${id}`} style={linkStyle}>
				<GameImg src={img} alt='Game' />
			</Link>
			<div>
				<Link to={`/game/${id}`} style={linkStyle}>
					<h3>{title}</h3>
				</Link>
				<p>{date}</p>
				<span>{price}</span>
				{false ? (
					<button>
						<img src={PlayIcon} alt='Play' />
					</button>
				) : (
					''
				)}
			</div>
			<button>
				<img src={false ? FilledHeartIcon : HeartIcon} alt='Heart' />
			</button>
		</GameCardStyled>
	);
};

export default GameCard;
