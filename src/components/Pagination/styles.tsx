import styled from 'styled-components';
import { TButtonProps } from '../../types/types';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0;
	width: 100%;
`;

export const Button = styled.button<TButtonProps>`
	width: 30px;
	height: 30px;
	margin: 4px;
	border: none;
	border-radius: 50%;
	background: ${props => (props.active ? '#17323A' : '#5b5e63')};
	background: ${props => (props.disabled ? 'gray' : '')};
	color: white;
	cursor: ${props => (props.disabled ? '' : 'pointer')};
`;
