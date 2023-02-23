import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import EventDetailsPage from './pages/EventDetailsPage';
import SeasonDetailsPage from './pages/SeasonDetailsPage';
import { ContainerWithHeader, WrapperApp } from './components/style/AppStyle';
import Header from './components/Header';
import HelpPage from './pages/HelpPage';
import { useCalendar } from './hooks/useCalendar';

const App:FC = () => {
	useCalendar();

	return (
		<WrapperApp>
			<Header />
			<ContainerWithHeader maxWidth="xl">
				<Routes>
					<Route path="/" element={<SeasonDetailsPage/>} />
					<Route path="/event/:id" element={<EventDetailsPage/>} />
					<Route path="/help" element={<HelpPage/>} />
				</Routes>
			</ContainerWithHeader>
		</WrapperApp>
	);
};

export default App;
