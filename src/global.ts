import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  color
 }

 body {
  background-color: #171A21;
 }
`;

export const Container = styled.div`
	padding: 0 25px;
	margin: 0 auto;

	max-width: 1500px;
`;

export default GlobalStyles;
