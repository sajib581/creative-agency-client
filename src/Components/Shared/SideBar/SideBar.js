import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

import { useHistory } from "react-router-dom";
import { UserContext } from '../../../App';
import { useState } from 'react';

const SideBar = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://serene-harbor-22092.herokuapp.com/checkAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    setIsAdmin(data)
                    localStorage.setItem('isAdmin',"true")
                }                
                
            })
    }, [])

    return (
        <div className="ml-5 mt-5" style={{ width: "300px" }}>

            <div className="mt-5">

                <h5 onClick={() => history.push(`/servicelist`)} className="my-4"><FontAwesomeIcon icon={faLock} /><span className="mx-3">Service List</span></h5>
                {isAdmin ? <div>
                    <h5 onClick={() => history.push("/admin/addservices")} className="my-4"><FontAwesomeIcon icon={faPlus} /><span className="mx-3">Add Service</span></h5>
                    <h5 onClick={() => history.push("/admin/makeadmin")} className="my-4"><FontAwesomeIcon icon={faUserPlus} /><span className="mx-3">Make Admin</span></h5></div> :
                    <div>
                        <h5 onClick={() => history.push("/customer/order")} className="my-4"><FontAwesomeIcon icon={faShoppingCart} /><span className="mx-3">Orders</span></h5>
                        <h5 onClick={() => history.push("/customer/review")} className="my-4"><FontAwesomeIcon icon={faCommentAlt} /><span className="mx-3">Review</span></h5>
                    </div>}
            </div>
        </div>
    );
};

export default SideBar;