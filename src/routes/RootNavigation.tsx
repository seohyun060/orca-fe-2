import HomeContainer from 'src/pages/Home/containers/HomeContainer';
import ProjectsPage from 'src/pages/Projects/ProjectsPage';
import ProjectDetails from 'src/pages/Projects/ProjectDetails';
import EventsPage from 'src/pages/Events/EventsPage';
import EventDetails from 'src/pages/Events/EventDetails';

import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	useLocation,
	Route,
	Routes,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/rootnavigation.style.css';
import FooterContainer from 'src/pages/Footer/containers/FooterContainer';
import GnbContainer from 'src/pages/Gnb/containers/GnbContainer';
import OrcaContainer from 'src/pages/Orca/containers/OrcaContainer';
import ResearcherContainer from 'src/pages/Researcher/containers/ResearcherContainer';
import InsightsContainer from 'src/pages/Insights/containers/InsightsContainer';
import ResearcherDetailContainer from 'src/pages/ResearcherDetail/containers/ResearcherDetailContainer';
import InsightsDetailContainer from 'src/pages/InsightsDetail/containers/InsightsDetailContainer';
// /* eslint no-restricted-globals: ["off"] */

const RootNavigation = () => {
	const location = useLocation();
	return (
		<>
			<GnbContainer location={location.pathname} />
			<Routes location={location}>
				<Route
					path='/'
					element={<HomeContainer location={location.pathname} />}
				/>
				<Route path='/orca' element={<OrcaContainer />} />
				<Route
					path='/researchers'
					element={<ResearcherContainer location={location.pathname} />}
				/>
				<Route
					path='/researchers/:id'
					element={<ResearcherDetailContainer />}
				/>
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/projects/:id' element={<ProjectDetails />} />
				<Route path='/events' element={<EventsPage />} />
				<Route path='/events/:id' element={<EventDetails />} />
				<Route path='/insights' element={<InsightsContainer />} />
				<Route path='/insights/:id' element={<InsightsDetailContainer />} />
				{/* <Route path="/*" element={<></>} /> */}
			</Routes>

			<FooterContainer location={location.pathname} />
		</>
	);
};

export default RootNavigation;
