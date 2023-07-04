const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
            planetDetails: {},
            peopleDetails: {},
            vehicleDetails: {}
		},
		actions: {
            //GET ALL PLANETS
            deleteFavorite: (_id) => {
                console.log("_id receive for deletion: " + _id);
                let store = getStore();

                const favoritesTemp = store.favorites.filter( item => item.result._id != _id);

                console.log("after deleted: " + JSON.stringify(favoritesTemp));

                setStore({...store, favorites: favoritesTemp});
            },
			getPlanets: async() => {
                const urlPlanets = [];
                if(getStore().planets.length > 0) return;

                console.log("Obteniendo listado general de planetas");
				const promise = new Promise((resolve, reject) => {                
                    const generalPlanets = fetch('https://www.swapi.tech/api/planets/')
                    .then(response => {
                        !response.ok ?
                            reject("ha ocurrido un error al generar la info general de planetas: " + response.statusText)
                            : resolve(response.json());

                    });
                });

                console.log("armando arreglo local de planetas");
                await promise.then(data => {
                    data['results'].map(data => {
                                urlPlanets.push(data['url']);
                            })
                })
                
                const fetchUrls = (url) => {
                    return fetch(url)
                    .then(response => response.json())
                };

                console.log("armando promesas de fetch de planetas");;
                const promises = urlPlanets.map(url =>  fetchUrls(url));
                await Promise.all(promises)
                    .then(result => {
                        let store = getStore();
                        setStore({...store, planets: result});
                    });
			},
            setPlanetDetails: (uid) => {
                console.log("uid received: " + uid);
                let store = getStore();

                let tempPlanet = {}

                store.planets.map( el => {
                     if(el.result.uid == uid) tempPlanet = el;
                });
                
                setStore({...store, planetDetails: tempPlanet});
            },
            setPlanetFavorite: (_id, type) => {
                console.log("_id received: " + _id);
                let store = getStore();

                let favoriteTemp = store.planets.filter( el => el.result._id == _id);
                favoriteTemp[0].type = type;

                //console.log("favoriteTemp: " + JSON.stringify(favoriteTemp));              
                setStore({...store, favorites: [...store.favorites, ...favoriteTemp]});
                console.log("store.favorites: " + JSON.stringify(store.favorites));
            },
            //GET ALL PEOPLE
            getPeople: async() => {
                const urlPeople = [];
                if(getStore().people.length > 0) return;

                console.log("Obteniendo listado general de personas");
				const promise = new Promise((resolve, reject) => {                
                    fetch('https://www.swapi.tech/api/people/')
                    .then(response => {
                        !response.ok ?
                            reject("ha ocurrido un error al generar la info general de gente: " + response.statusText)
                            : resolve(response.json());

                    });
                });

                console.log("armando arreglo local de personas");
                await promise.then(data => {
                    data['results'].map(data => {
                                urlPeople.push(data['url']);
                            })
                })
                
                const fetchUrls = (url) => {
                    return fetch(url)
                    .then(response => response.json())
                };

                console.log("armando promesas de fetch de personas");;
                const promises = urlPeople.map(url =>  fetchUrls(url));
                await Promise.all(promises)
                    .then(result => {
                        let store = getStore();
                        setStore({...store, people: result});
                    });
			},
            setPeopleDetails: (uid) => {
                console.log("uid received: " + uid);
                let store = getStore();

                let tempPeople = {}

                store.people.map( el => {
                     if(el.result.uid == uid) tempPeople = el;
                });
                
                setStore({...store, peopleDetails: tempPeople});
            },
            setPeopleFavorite: (_id, type) => {
                console.log("_id received: " + _id);
                let store = getStore();

                const favoriteTemp = store.people.filter( el => el.result._id == _id);         
                favoriteTemp[0].type = type;

                //console.log("favoriteTemp: " + JSON.stringify(favoriteTemp));              
                setStore({...store, favorites: [...store.favorites, ...favoriteTemp]});
            },
            //GET ALL VEHICLES
            getVehicles: async() => {
                const urlVehicles = [];
                if(getStore().vehicles.length > 0) return;

                console.log("Obteniendo listado general de vehiculos");
				const promise = new Promise((resolve, reject) => {                
                    fetch('https://www.swapi.tech/api/vehicles/')
                    .then(response => {
                        !response.ok ?
                            reject("ha ocurrido un error al generar la info general de vehiculo: " + response.statusText)
                            : resolve(response.json());

                    });
                });

                console.log("armando arreglo local de vehiculos");
                await promise.then(data => {
                    data['results'].map(data => {
                        urlVehicles.push(data['url']);
                            })
                })
                
                const fetchUrls = (url) => {
                    return fetch(url)
                    .then(response => response.json())
                };

                console.log("armando promesas de fetch de vehiculos");;
                const promises = urlVehicles.map(url =>  fetchUrls(url));
                await Promise.all(promises)
                    .then(result => {
                        let store = getStore();
                        setStore({...store, vehicles: result});
                    });
			},
            setVehicleDetails: (uid) => {
                console.log("uid received: " + uid);
                let store = getStore();

                let tempVehicle = {}

                store.vehicles.map( el => {
                     if(el.result.uid == uid) tempVehicle = el;
                });
                
                setStore({...store, vehicleDetails: tempVehicle});
            },
            setVehicleFavorite: (_id, type) => {
                console.log("_id received: " + _id);
                let store = getStore();

                const favoriteTemp = store.vehicles.filter( el => el.result._id == _id);
                favoriteTemp[0].type = type;

                //console.log("favoriteTemp: " + JSON.stringify(favoriteTemp));              
                setStore({...store, favorites: [...store.favorites, ...favoriteTemp]});
            }
		}
	};
};

export default getState;
