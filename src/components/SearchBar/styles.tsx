import styled from 'styled-components';

export const SearchForm = styled.form`
	position: relative;
	margin-bottom: 7px;

	input {
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
	}

	input::placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 1.2;
		color: white;
	}

	button {
		background-color: transparent;
		border: none;
		position: absolute;
		width: 20px;
		height: 20px;
		right: 10px;
		top: 4px;
	}

	@media screen and (min-width: 768px) {
		width: 100%;
	}
`;
