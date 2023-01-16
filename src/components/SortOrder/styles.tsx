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
	padding: 3px;
	border: none;
	cursor: pointer;
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
`;
export const ItemBtn = styled.button`
	width: 100%;
	padding: 5px 25px;
	background-color: transparent;
	border: none;
	color: white;
	cursor: pointer;
`;
