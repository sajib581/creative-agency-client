import React from 'react';

const ReviewForm = () => {
    return (
        <div style={{ backgroundColor: "#EDF8F2", width: "100%", minHeight:"580px"}}>
            <div className="m-5 col-md-7">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="company’s name, designation " />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control form-control-lg" id="" cols="30" rows="5" placeholder="Description"></textarea>
                        </div>
                        
                        <button type="button" className="btn btn-dark px-5 form-control-lg"> Send </button>
                    </form>
                </div>
        </div>
    );
};

export default ReviewForm;