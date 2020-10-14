import React from 'react';

const Feedback = ({name, img, company, feedback}) => {
    return (
        <div className="col-md-4 my-3">
            <div className="p-3" style={{border: '1px solid #BFBFBF'}} >
            <div className="d-flex">
                <img height="50" src={img} alt=""/>
                <div className="ml-3">
                    <h6>{name}</h6>
                    <p>{company}</p>
                </div>
            </div>
            <p>{feedback}</p>
            </div>
        </div>
    );
};

export default Feedback;