import styled from 'styled-components';

export const SortBarStyled = styled.div`
	display: flex;
	flex-direction: row;

	@media screen and (min-width: 768px) {
		width: 50%;
		max-width: 200px;
		margin: 0 13px;
		flex-direction: row-reverse;
	}
`;
