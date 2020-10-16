import React from 'react';
import './Service.css'
import { useHistory } from "react-router-dom";

const Service = ({img,name,description,image}) => {
    let history = useHistory();

    const clikHandeler = name => {
        localStorage.setItem('choice',name)
        history.push(`/customer/order/${name}`)
    }
    return (
        <div style={{cursor:"pointer"}} onClick={()=> clikHandeler(name)} className="col-md-4">
            <div className="text-center service p-3 mx-3">
                {
                    image ? <img height="50" src={`data:image/png;base64,${image.img}`}/>  :
                    <img height="50" src={img} alt=""/>
                }
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;