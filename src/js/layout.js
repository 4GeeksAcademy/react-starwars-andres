import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home.jsx";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PlanetDetails from "./component/PlanetDetails.jsx";
import PeopleDetails from "./component/PeopleDetails.jsx";
import VehicleDetails from "./component/VehicleDetails.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/PlanetDetails" element={<PlanetDetails />} />
						<Route path="/PeopleDetails" element={<PeopleDetails />} />
						<Route path="/VehicleDetails" element={<VehicleDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
