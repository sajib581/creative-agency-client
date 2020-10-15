import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const OrderForm = () => {
    return (
        <div style={{ backgroundColor: "#EDF8F2", width: "100%"}} >
            <div className="row">
                <div className="m-5 col-md-7">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Your name / company’s name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Your email address " />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Graphics Design" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control form-control-lg" id="" cols="30" rows="5" placeholder="Project Details"></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control form-control-lg" placeholder="Price" />
                            </div>
                            <div className="form-group col-md-6">
                                <h6 className="form-control form-control-lg text-center" style={{backgroundColor: '#DEFFED', color: '#009444', cursor:"pointer"}}><FontAwesomeIcon icon={faCloudUploadAlt} /><span className="mx-3">Upload Project File</span></h6>               
                            </div>
                        </div>
                        <div className="form-group" >
                            <button type="button" className="btn btn-dark px-5 form-control-lg"> Send </button>
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