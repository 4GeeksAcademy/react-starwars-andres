import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const CardPeople = ({people}) => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const handleDetails = async (uid) => {
        await actions.setPeopleDetails(uid);
        navigate("./PeopleDetails");
    }

    const handleFavorites = (_id) => {
        actions.setPeopleFavorite(_id, 'people');
    }

    return (
        <div className="card">
            <img 
                src={`https://starwars-visualguide.com/assets/img/characters/${people.result.uid}.jpg`}
                    className="card-img-top img-fluid" style={{ maxHeight: "350px" }} />
             <div className="card-body">
                <div className="card-title d-flex flex-column">
                    <div>Name: {people.result.properties.name}</div>
                    <div>Birth year: {people.result.properties.birth_year}</div>
                    <div>Gender: {people.result.properties.gender}</div>
                </div>
                <div className="card-footer bg-transparent border-0 m-0 p-0">
                    <button type="button" className="btn btn-warning me-2" onClick={() => handleDetails(people.result.uid)}>
                        Lear more
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => handleFavorites(people.result._id)}>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default CardPeople;