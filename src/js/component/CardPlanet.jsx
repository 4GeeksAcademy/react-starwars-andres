import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const CardPlanet = ({planet}) => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const handleImageError = (event) => {
        event.target.src = "https://swtorstrategies.com/wp-content/uploads/2010/01/tatooine.jpg";
      };

    const handleDetails = async (uid) => {
        await actions.setPlanetDetails(uid);
        navigate("./PlanetDetails");
    }

    const handleFavorites = (_id) => {
        actions.setPlanetFavorite(_id, 'planet');
    }

    return (
        <div className="card">
            <img 
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.result.uid}.jpg`} 
                    className="card-img-top img-fluid" onError={handleImageError} />
             <div className="card-body">
                <div className="card-title d-flex flex-column">
                    <div>Name: {planet.result.properties.name}</div>
                    <div>Population: {planet.result.properties.population}</div>
                    <div>Terrain: {planet.result.properties.terrain}</div>
                </div>
                <div className="card-footer bg-transparent border-0 m-0 p-0">
                    <button type="button" className="btn btn-warning me-2" onClick={() => handleDetails(planet.result.uid)}>
                        Lear more
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => handleFavorites(planet.result._id)}>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default CardPlanet;