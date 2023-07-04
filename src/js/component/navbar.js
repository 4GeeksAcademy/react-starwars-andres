import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Badge, Form } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap/esm";
import { FaBeer } from "react-icons/fa";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	const navigate = useNavigate();

	useEffect( () => {
		console.log("store.favorites.length: " + JSON.stringify(store.favorites));

	},[store.favorites]);

	const handleLinkClick = async (e, _id) => {
		e.stopPropagation();

		const item = store.favorites.find( item => item.result._id == _id);

		console.log("item navbar: " + JSON.stringify(item));

		if(item) {
			switch(item.type) {
				case 'planet':
					await actions.setPlanetDetails(item.result.uid);
        			navigate("./PlanetDetails");
					break;
				case 'people':
					await actions.setPeopleDetails(item.result.uid);
					navigate("./PeopleDetails");
					break;
				case 'vehicle':
						await actions.setVehicleDetails(item.result.uid);
						navigate("./VehicleDetails");
						break;
				default: 
					console.log("No type - Nothing to show");
			}
			
		} else {
			console.error("no item found");
		}
		
		console.log("link clicked");
	}

	const handleIconClick = async(e, _id) => {
		e.stopPropagation();
		await actions.deleteFavorite(_id);
		console.log("icon clicked");
	}

	return (
		<nav className="navbar navbar-light bg-trasnparent mb-3 me-5">
			<Link to="/">
				<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"  width="160" height="100" alt="logo" />
			</Link>
			<div className="ml-auto" style={{marginRight: "150px"}}>

			<DropdownButton variant="warning" drop="down" title={
				<span>
					Favorites {store.favorites.length !== 0 && <Badge bg="secondary">{store.favorites.length}</Badge>}
				</span>
				}>
				<Dropdown.Menu style={{ marginTop: '0' }}>
				{store.favorites.length > 0 ? (
					store.favorites.map(item => (
						
							<Dropdown.Item onClick={(e) => {handleLinkClick(e, item.result._id)}} key={item.result._id}>
								<a href="#">
									{item.result.properties.name} 
								</a>	
								<FaBeer className="ms-5" onClick={(e) => handleIconClick(e, item.result._id)} />
							</Dropdown.Item>
						
					))
					) : (
					<option value="">No favorites available</option>
				)}
				</Dropdown.Menu>
									
				</DropdownButton>
			</div>
		</nav>
	);
};
