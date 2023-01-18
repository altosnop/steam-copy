import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import LikeListPage from './pages/LikeListPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/like-list' element={<LikeListPage />} />
			<Route path='/game/:id' element={<GamePage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
