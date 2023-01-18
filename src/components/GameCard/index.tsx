import React, { useState } from 'react';
import { GameCardStyled, GameImg } from './styles';

import PlayIcon from './../../assets/play.svg';
import HeartIcon from './../../assets/heart.svg';
import FilledHeartIcon from './../../assets/filled-heart.svg';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addItem, removeItem } from '../../store/likeList/likeListSlice';

export type TGameCardProps = {
	id: string;
	img: string;
	title: string;
	date: string;
	price: string;
	liked: boolean | undefined;
};

const GameCard = ({ id, img, title, date, price, liked }: TGameCardProps) => {
	const [isLiked, setIsLiked] = useState<boolean | undefined>(liked);
	const dispatch = useAppDispatch();

	const handleLikeItem = () => {
		const item = {
			appId: id,
			title,
			imgUrl: img,
			released: date,
			price,
		};

		setIsLiked(true);
		dispatch(addItem(item));
	};
	const handleUnlikeItem = () => {
		setIsLiked(false);
		dispatch(removeItem(id));
	};

	return (
		<GameCardStyled>
			<Link to={`/game/${id}`} style={{ textDecoration: 'none' }}>
				<GameImg src={img} alt='Game' />
			</Link>
			<div>
				<Link
					to={`/game/${id}`}
					style={{ textDecoration: 'none', color: 'white' }}
				>
					<h3>{title}</h3>
				</Link>
				<p>{date}</p>
				<span>{price}</span>
				{isLiked ? (
					<button>
						<img src={PlayIcon} alt='Play' />
					</button>
				) : (
					''
				)}
			</div>
			{isLiked ? (
				<button onClick={handleUnlikeItem}>
					<img src={FilledHeartIcon} alt='Heart' />
				</button>
			) : (
				<button onClick={handleLikeItem}>
					<img src={HeartIcon} alt='Heart' />
				</button>
			)}
		</GameCardStyled>
	);
};

export default GameCard;
