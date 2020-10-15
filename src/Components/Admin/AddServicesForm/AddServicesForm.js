import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const AddServicesForm = () => {
    return (
        <div style={{ backgroundColor: "#EDF8F2", width: "100%", minHeight:"590px" }}>
            <div className="row">
                <div className="m-5 col-md-5">
                    <form action="">
                        <div className="form-group">
                            <h6>Service</h6>
                            <input type="text" className="form-control " placeholder="Your name / company’s name" />
                        </div>
                        <div className="form-group">
                            <h6>Description</h6>
                            <textarea name="" className="form-control " id="" cols="30" rows="5" placeholder="Project Details"></textarea>
                        </div>

                        <div className="form-group" >
                            <button type="button" className="btn btn-dark px-5 "> Send </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-5 mx-auto">
                    <div className="form-group mt-5 pt-4 w-50">
                        <h6 className="form-control text-center" style={{ backgroundColor: '#DEFFED', color: '#009444' }}><FontAwesomeIcon icon={faCloudUploadAlt} /><span className="mx-3">Upload Project File</span></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServicesForm;