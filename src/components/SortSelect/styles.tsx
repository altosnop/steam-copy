import styled from 'styled-components';

export const SelectContainer = styled.div`
	position: relative;
	width: 100%;

	margin-right: 7px;

	order: 0;
	flex: 1 1;
	align-self: auto;

	@media screen and (min-width: 768px) {
		margin-right: 0px;
		margin-left: 13px;
	}
`;

export const SelectBtn = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 5px 25px;
	background-color: #837f7f;
	border-radius: 10px;
	border: none;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 1.2;
	color: white;
	cursor: pointer;

	@media screen and (min-width: 1000px) {
		padding: 10px 30px;
	}
`;

export const SelectItems = styled.div`
	position: absolute;
	top: 34px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: gray;
	border: none;
	border-radius: 10px;
	z-index: 1;

	@media screen and (min-width: 1000px) {
		top: 50px;
	}
`;

export const Item = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 5px 25px;
	background-color: transparent;
	border: none;
	color: white;
	cursor: pointer;
`;
