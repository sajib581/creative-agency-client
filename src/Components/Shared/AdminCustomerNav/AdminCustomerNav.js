import React, { useContext } from 'react';

import { useHistory } from "react-router-dom";
import { UserContext } from '../../../App';

const AdminCustomerNav = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext)
    let history = useHistory();
    return (
        <div className="mt-3 d-flex">
            <img style={{cursor:"pointer"}} onClick={()=>history.push("/")} className="ml-5" height="50"src="https://i.ibb.co/1s6Jxc3/logo.png" alt=""/>
            <div className="container d-flex justify-content-between">
                <h5 className="ml-5">Order</h5>
                <div className = "row">
                    <img className="mr-3" style={{borderRadius: "50%" }}height="50"src={loggedInUser.img} alt=""/>
                    <h5>{loggedInUser.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default AdminCustomerNav;