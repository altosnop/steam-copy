import styled from 'styled-components';

export const Main = styled.main`
	margin-top: 90px;
	font-style: normal;
	font-weight: 400px;
	color: white;

	img {
		width: 100%;
		max-width: 1000px;
	}

	h2 {
		font-size: 30px;
		margin: 20px 0;
		letter-spacing: 1px;
	}

	span {
		display: inline-block;
		margin: 20px 0;
		font-size: 15px;
	}

	p {
		font-size: 17px;
		line-height: 1.3;
		letter-spacing: 1px;
		text-align: justify;
	}

	@media screen and (min-width: 768px) {
		margin-top: 40px;
	}
`;
