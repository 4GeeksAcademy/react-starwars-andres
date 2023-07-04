import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import CardPlanet from "../component/CardPlanet.jsx";
import "../../styles/home.css";
import CardPeople from "../component/CardPeople.jsx";
import CardVehicle from "../component/CardVehicle.jsx";
import { Spinner } from "react-bootstrap";

const Home = () => {
	const {store, actions} = useContext(Context);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
        const fetchData = async () => {
            try {
				const promises = [
					actions.getPeople(),
					actions.getPlanets(),
					actions.getVehicles()
				];

				await Promise.all(promises)
				setIsLoading(false);
            } catch(error) {
                console.log(error);
            }
        }
		
        fetchData();
	}, []);

	return (
		<div className="container">
			{isLoading ? (
				<div className="d-flex justify-content-center align-items-center loader-container">
					<Spinner animation="border" variant="primary" role="status" className="loader" />
					<h1>IS LOADING...</h1>
				</div>
			) : (
				<>
					<div className="row mb-5">
						<div className="h1 text-white">People</div>
					</div>
					<div className="card-carousel">
						<div className="row flex-nowrap overflow-auto custom-scrollbar">
							{store.people.map((people, index) => (
								<div className="col-4" key={index}>
									<CardPeople key={index} people={people} />
								</div>
							))}
						</div>
					</div>

					<div className="row">
						<div className="h1 text-white">Planets</div>
					</div>
					<div className="card-carousel">
						<div className="row flex-nowrap overflow-auto custom-scrollbar">
							{store.planets.map((planet, index) => (
								<div className="col-4" key={index}>
									<CardPlanet key={index} planet={planet} />
								</div>
							))}
						</div>
					</div>

					<div className="row">
						<div className="h1 text-white">Vehicles</div>
					</div>
					<div className="card-carousel">
						<div className="row flex-nowrap overflow-auto custom-scrollbar">
							{store.vehicles.map((vehicle, index) => (
								<div className="col-4" key={index}>
									<CardVehicle key={index} vehicle={vehicle} />
								</div>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Home;