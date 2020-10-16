import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../App';

const Nav = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext)
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img height="50" src="https://i.ibb.co/1s6Jxc3/logo.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-5" href="#">Our Portfollio</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link ml-5" href="#">Our Team</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link ml-5" href="#">Contact us</a>
                        </li> 
                        <li className="nav-item">
    <button onClick={()=>history.push("/login")}  className="btn btn-dark ml-5 px-5">{loggedInUser.email ? "Logout" : "Login"}</button>
                        </li> 
                        
                    </ul>
                    
                </div>
            </nav>
        </section>
    );
};

export default Nav;