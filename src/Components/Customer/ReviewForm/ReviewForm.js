import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import { useHistory } from "react-router-dom";

const ReviewForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [info, setInfo] = useState({})
    const {name,img} = loggedInUser
    let history = useHistory();

    const submitHandeler = () => {

    fetch('https://serene-harbor-22092.herokuapp.com/addReview',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data => {
        if(data){
            alert('Thanks for your feedback')
            history.push("/");
        }
    } )   
    }
    
    const handelBlur = e => {
        const newInfo = { ...info, name,img}
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }    

    return (
        <div style={{ backgroundColor: "#EDF8F2", width: "100%", minHeight:"580px"}}>
            <div className="m-5 col-md-7">
                    <form action={submitHandeler}>
                        <div className="form-group">
                            <input type="text" name="name" value={name} onBlur={handelBlur} className="form-control disabled form-control-lg" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="company" onBlur={handelBlur} className="form-control form-control-lg" placeholder="company’s name, designation " />
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handelBlur} name="feedback" className="form-control form-control-lg" id="" cols="30" rows="5" placeholder="Description"></textarea>
                        </div>
                        
                        <button type="button" onClick={submitHandeler} className="btn btn-dark px-5 form-control-lg"> Send </button>
                    </form>
                </div>
        </div>
    );
};

export default ReviewForm;