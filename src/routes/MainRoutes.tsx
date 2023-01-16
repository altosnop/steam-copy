import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GamePage from '../pages/GamePage';
import HomePage from '../pages/HomePage';

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/game/:id' element={<GamePage />} />
		</Routes>
	);
};

export default MainRoutes;
