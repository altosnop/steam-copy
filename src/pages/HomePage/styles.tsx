import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
	position: relative;
`;

export const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-end;
`;

export const SearchBarWrapper = styled.div`
	position: absolute;
	width: 100%;
	top: 45px;
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
