import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const VehicleDetails = ({vehicle}) => {
    const {store} = useContext(Context);

    useEffect( () => {
        console.log("store.vehicleDetails**********************: " + JSON.stringify(store));
    }, []);
    
    return(
        <div div className="container">
            <div class="row">
                <div className="col-7">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${store.vehicleDetails.result.uid}.jpg`} />
                </div>
                <div className="col-5 text-white">
                   <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et lacus eu risus ullamcorper viverra nec ac felis. Cras ante ex, rutrum vel mollis nec, consequat id dolor. Mauris dui massa, porta nec ornare ac, fermentum et ante. Aenean fringilla dictum sodales. Nulla facilisi. Vestibulum rhoncus turpis quis dictum consectetur. Etiam vel dapibus dolor, vitae cursus mi. Etiam id sapien quam. Donec non scelerisque est, non aliquam est. Nullam mauris nulla, accumsan at sodales eu, mattis in magna. Mauris luctus justo ac laoreet mattis. Aenean vel elit sit amet enim commodo dapibus. Quisque mollis laoreet imperdiet. Proin gravida nec ligula quis sagittis. Phasellus nisl lectus, faucibus ut metus porttitor, aliquam porta orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                   </p>
                   <p>
                        In mattis est eu neque rutrum, sed congue neque convallis. Vestibulum mauris lectus, auctor ac nulla ut, laoreet auctor ligula. Vestibulum scelerisque augue velit, ornare porta purus semper sed. In sit amet tortor sit amet diam faucibus tincidunt. Proin sodales viverra lorem, quis vehicula tellus placerat eget. Nulla facilisi. Nunc tempus dolor odio, vel interdum lectus facilisis eget.
                   </p>
                </div>
            </div>

            <div class="row text-center border-top border-danger mt-3">
                <div className="mt-3" />
                <div className="col-2">
                    <div className="h4 text-danger">NAME</div>
                    <div className="text-danger h5">{store.vehicleDetails.result.properties.name}</div>
                </div>
                <div className="col-2">
                <div className="h4 text-danger">CAPACITY</div>
                    <div className="text-danger h5">{store.vehicleDetails.result.properties.cargo_capacity}</div>
                </div>
                <div className="col-2">
                <div className="h5 text-danger">CREW</div>
                    <div className="text-danger h5">{store.vehicleDetails.result.properties.crew}</div>
                </div>
                <div className="col-2">
                <div className="h5 text-danger">LENGTH</div>
                    <div className="text-danger h5">{store.vehicleDetails.result.properties.length}</div>
                </div>
                <div className="col-2">
                <div className="h5 text-danger">MANUFACTURER</div>
                    <div className="text-danger h5">{store.vehicleDetails.result.properties.manufacturer}</div>
                </div>
                <div className="col-2">
                <div className="h5 text-danger">MODEL</div>
                    <div className="text-danger h5">{store.vehicleDetails.result.properties.model}</div>
                </div>
            </div>

            <div class="row">
                <Link to="/" className="btn btn-warning">Regresar a inicio</Link>
            </div>
            
        </div>
    )
}

export default VehicleDetails;