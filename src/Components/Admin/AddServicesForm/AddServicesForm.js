import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

const AddServicesForm = () => {
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState({})
    let history = useHistory();
    
    const handelBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handelFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const submitHandeler = () => {
        console.log(info);
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('description', info.description)

        fetch('https://serene-harbor-22092.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert("service added successfully")
                    history.push("/");
                }                
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div style={{ backgroundColor: "#EDF8F2", width: "100%", minHeight: "590px" }}>
            <div className="row">
                <div className="m-5 col-md-5">
                    <form action="">
                        <div className="form-group">
                            <h6>Service Title</h6>
                            <input onBlur={handelBlur} name="name" type="text" className="form-control " placeholder="Enter Title" />
                        </div>
                        <div className="form-group">
                            <h6>Description</h6>
                            <textarea onBlur={handelBlur} name="description" className="form-control " id="" cols="30" rows="5" placeholder="Project Details"></textarea>
                        </div>

                        <div className="form-group" >
                            <button onClick={submitHandeler} type="button" className="btn btn-dark px-5 "> Send </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-5 mt-5">
                    <div className="custom-file mt-4">
                        <input onChange={handelFileChange} type="file" className="custom-file-input form-control" id="customFile" />
                        <label style={{ backgroundColor: '#DEFFED', color: '#009444', cursor: "pointer" }} className="custom-file-label" for="customFile"><FontAwesomeIcon icon={faCloudUploadAlt} /><span className="ml-3">Upload Project File</span></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServicesForm;