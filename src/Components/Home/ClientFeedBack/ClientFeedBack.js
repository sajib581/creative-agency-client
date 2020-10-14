import React from 'react';
import Feedback from '../Feedback.js/Feedback';

const ClientFeedBack = () => {
    const feedbackData = [
        {
            name: 'Nash Patrik',
            img:"https://i.ibb.co/qJQxPJ0/customer-1.png",
            company: 'CEO, Manpol',
            feedback: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consequatur in facilis odio tempora placeat sed similique voluptate provident magni"
        },
        {
            name: 'Miriam Barron',
            img:"https://i.ibb.co/8Y8t02F/customer-2.png",
            company: 'CEO, Manpol',
            feedback: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consequatur in facilis odio tempora placeat sed similique voluptate provident magni"
        },
        {
            name: 'Bria Malone',
            img:"https://i.ibb.co/1MSpGHw/customer-3.png",
            company: 'CEO, Manpol',
            feedback: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse consequatur in facilis odio tempora placeat sed similique voluptate provident magni"
        }        
    ]
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