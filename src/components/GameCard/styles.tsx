import styled from 'styled-components';

export const GameCardStyled = styled.div`
	position: relative;
	width: 252px;
	background: #17323a;
	border-radius: 10px;
	color: white;

	div {
		padding: 10px;

		h3 {
			margin-bottom: 7px;
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 1.2;
		}

		p {
			margin-bottom: 5px;
			font-style: normal;
			font-weight: 400;
			font-size: 15px;
			line-height: 1.2;
		}

		span {
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 1.2;
		}

		button {
			position: absolute;
			top: 80px;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 47px;
			height: 43px;
			border-radius: 50%;
			background-color: #837f7f;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		}
	}

	button {
		position: absolute;
		bottom: 12px;
		right: 12px;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
`;

export const GameImg = styled.img`
	border-radius: 10px;
	width: 100%;
	height: 102px;
	object-fit: cover;
`;
