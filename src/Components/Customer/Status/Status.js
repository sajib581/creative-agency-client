import React from 'react';
import './Status.css'

const Status = ({img, name, description, image}) => {
    return (
        <div className="p-3 col-md-5 ml-5 my-3" style={{backgroundColor:'white'}}>
            <div className="d-flex justify-content-between">
                {
                    image ? <img className="mb-3" height="50" src={`data:image/png;base64,${image.img}`}/> :
                    <img className="mb-3" height="50" src={img} alt=""/>
                }
                
                <strong><small className="done px-3 py-2">Pending</small></strong>
            </div>
                <h6>{name}</h6>
                <p>{description}</p>
        </div>
    );
};

export default Status