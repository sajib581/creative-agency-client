import React from 'react';

const MakeAdminForm = () => {
    const clickHandeler = (e) => {
        const email = document.getElementById('email').value
        console.log(email);
        fetch('https://serene-harbor-22092.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data){
                    console.log(data);
                    document.getElementById('email').value = ""
                    alert('Added a new admin')
                }
            })
    }
    
    return (
        <div style={{ backgroundColor: "#EDF8F2", width: "100%", minHeight: "590px" }}>
            <div className="ml-3 mt-3">
                <h5>Email</h5>
                <div style={{ width: "500px" }} className="d-flex">
                    <input name="email" id="email" type="email" className="form-control " placeholder="Email" />
                    <button onClick={clickHandeler} className="btn btn-success ml-3" type="button">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminForm;