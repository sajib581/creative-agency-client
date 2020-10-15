import React from 'react';

const MakeAdminForm = () => {
    return (
        <div style={{ backgroundColor: "#EDF8F2", width: "100%", minHeight: "590px" }}>
            <div className="ml-3 mt-3">
                <h5>Email</h5>
                <div style={{ width: "500px" }} className="d-flex">
                    <input type="email" className="form-control " placeholder="Email" />
                    <button className="btn btn-success ml-3" type="submit">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminForm;