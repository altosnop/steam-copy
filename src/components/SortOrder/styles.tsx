import styled from 'styled-components';

export const OrderContainer = styled.div`
	position: relative;
	width: 100%;

	order: 0;
	flex: 0 1;
	align-self: auto;
`;

export const Button = styled.button`
	background: #837f7f;
	border-radius: 10px;
	padding: 4px 6px;
	border: none;
	cursor: pointer;
	text-align: center;

	@media screen and (min-width: 1000px) {
		padding: 9px 11px;
	}

	img {
		vertical-align: middle;
	}
`;

export const Items = styled.div`
	position: absolute;
	top: 39px;
	width: 155px;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: gray;
	border: none;
	border-radius: 10px;
	z-index: 1;

	@media screen and (min-width: 768px) {
		left: 0;
	}

	@media screen and (min-width: 1000px) {
		top: 50px;
	}
`;

export const ItemBtn = styled.button`
	width: 100%;
	padding: 5px 25px;
	background-color: transparent;
	border: none;
	color: white;
	cursor: pointer;
`;
