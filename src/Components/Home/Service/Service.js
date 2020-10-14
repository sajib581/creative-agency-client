import React from 'react';
import './Service.css'

const Service = ({img,name,description}) => {
    return (
        <div className="col-md-4">
            <div className="text-center service p-3 mx-3">
                <img height="50" src={img} alt=""/>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;