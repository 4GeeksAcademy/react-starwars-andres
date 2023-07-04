import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const CardVehicle = ({vehicle}) => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const handleDetails = async (uid) => {
        await actions.setVehicleDetails(uid);
        navigate("./VehicleDetails");
    }

    const handleFavorites = (_id) => {
        actions.setVehicleFavorite(_id, 'vehicle');
    }

    return (
        <div className="card">
            <img 
                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.result.uid}.jpg`}
                    className="card-img-top img-fluid" height={200} width={400}/>
             <div className="card-body">
                <div className="card-title d-flex flex-column">
                    <div>Name: {vehicle.result.properties.name}</div>
                    <div>Cargo capacity: {vehicle.result.properties.cargo_capacity}</div>
                    <div>Model: {vehicle.result.properties.model}</div>
                </div>
                <div className="card-footer bg-transparent border-0 m-0 p-0">
                    <button type="button" className="btn btn-warning me-2" onClick={() => handleDetails(vehicle.result.uid)}>
                        Lear more
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => handleFavorites(vehicle.result._id)}>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default CardVehicle;