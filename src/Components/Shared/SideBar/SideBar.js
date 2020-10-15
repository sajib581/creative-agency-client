import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

const SideBar = () => {
    return (
        <div className="ml-5 mt-5" style={{width:"300px"}}>
            
            <div className="mt-5">
                <h5 className="my-4"><FontAwesomeIcon icon={faShoppingCart} /><span className="mx-3">Orders</span></h5>
                <h5 className="my-4"><FontAwesomeIcon icon={faLock} /><span className="mx-3">Service List</span></h5>
                <h5 className="my-4"><FontAwesomeIcon icon={faCommentAlt} /><span className="mx-3">Review</span></h5>
                <h5 className="my-4"><FontAwesomeIcon icon={faPlus} /><span className="mx-3">Add Service</span></h5>
                <h5 className="my-4"><FontAwesomeIcon icon={faUserPlus} /><span className="mx-3">Make Admin</span></h5>
            </div>
        </div>
    );
};

export default SideBar;