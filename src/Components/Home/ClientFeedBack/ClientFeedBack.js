import React, { useState } from 'react';
import { useEffect } from 'react';
import Feedback from '../Feedback.js/Feedback';

const ClientFeedBack = () => {
    const [feedbackData, setFeedbackData] = useState([])
    
    useEffect(() => {
        fetch('https://serene-harbor-22092.herokuapp.com/getAllReviews')
            .then(res => res.json())
            .then(data => setFeedbackData(data) )
    }, [])
    
    return (
        <section className="pb-5">
            <div className="container my-5">
                <h2 className="text-center my-5">Clients <span className="font-color text-center">Feedback</span></h2>
                <div className="row my-5">
                    {
                        feedbackData.map(data => <Feedback
                            name={data.name}
                            img={data.img}
                            company={data.company}
                            feedback={data.feedback}
                        ></Feedback>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientFeedBack;