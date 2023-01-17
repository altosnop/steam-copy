import styled from 'styled-components';
import { TButtonProps } from '../../types/types';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	position: fixed;
	left: 0;
	bottom: 20px;
	width: 100%;
`;

export const Button = styled.button<TButtonProps>`
	width: 30px;
	height: 30px;
	margin: 4px;
	border: none;
	border-radius: 50%;
	background: ${props => (props.active ? '#17323A' : '#5b5e63')};
	color: white;
	cursor: pointer;
`;
