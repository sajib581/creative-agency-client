import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory } from "react-router-dom";

const OrderForm = () => {
    let history = useHistory();
    const name = localStorage.getItem('choice')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState({})
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handelBlur = e => {
        const newInfo = { ...info, name }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handelFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const submitHandeler = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('userName', info.userName)
        formData.append('email', info.email)
        formData.append('description', info.description)
        formData.append('status', 'Pending')

        fetch('https://serene-harbor-22092.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert("Order submitted successfully")
                    history.push(`/servicelist`)
                }                
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div style={{ backgroundColor: "#EDF8F2", width: "100%" }} >
            <div className="row">
                <div className="m-5 col-md-7">
                    <form >
                        <div className="form-group">
                            <input onBlur={handelBlur} name="userName" type="text" className="form-control form-control-lg" placeholder="Your name / company’s name" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handelBlur} value={loggedInUser.email} name="email" type="email" className="form-control form-control-lg" placeholder="Your email address " />
                        </div>
                        <div className="form-group">
                            <input name="select" type="text" value={name} className="form-control form-control-lg" />
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handelBlur} name="description" className="form-control form-control-lg" id="" cols="20" rows="5" placeholder="Project Details"></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 col-sm-12 col-12">
                                <input name="description" type="text" value="50$" className="form-control disabled form-control-lg" placeholder="Price" />
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <div className="custom-file">
                                    <input onChange={handelFileChange} type="file" name="img" className="custom-file-input form-control form-control-lg" id="customFile" />
                                    <label style={{ backgroundColor: '#DEFFED', color: '#009444', cursor: "pointer" }} className="custom-file-label form-control-lg" for="customFile"><FontAwesomeIcon icon={faCloudUploadAlt} /> <span className="ml-3">Choose file</span></label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group" >
                            <button type="button" onClick={submitHandeler} className="btn btn-dark px-5 form-control-lg"> Send </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-5 mx-auto">

                </div>
            </div>
        </div>
    );
};

export default OrderForm;