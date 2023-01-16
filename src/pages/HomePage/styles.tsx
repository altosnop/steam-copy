import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 7px;
	margin-bottom: 5px;
`;

export const Menu = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 135px;
	padding: 8px 16px;
	background-color: #837f7f;
	border-radius: 10px;

	a {
		text-decoration: none;
		color: white;
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 1.25;
	}
`;
