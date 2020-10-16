import React from 'react';

const HeaderMain = () => {
    return (
        <main>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-5 col-sm-12 pr-3 d-flex align-items-center">
                        <div>
                            <h1>Let’s Grow Your <br />Brand To The <br />Next Level</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum temporibus quas eos possimus tempore.</p>
                            <button className="btn btn-dark px-5">Hire Us</button>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <img className="img-fluid" src="https://i.ibb.co/6mKVVkV/Frame.png" alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;