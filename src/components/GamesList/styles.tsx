import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 40px 40px;
	grid-auto-flow: row;
	justify-items: center;

	width: 100%;
	margin-top: 90px;

	@media screen and (min-width: 600px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (min-width: 768px) {
		margin-top: 40px;
	}

	@media screen and (min-width: 900px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media screen and (min-width: 1200px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	@media screen and (min-width: 1500px) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
`;
