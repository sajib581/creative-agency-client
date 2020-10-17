import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(()=>{
        fetch('https://serene-harbor-22092.herokuapp.com/getAllServices')
        .then(res => res.json())
        .then(data => setServiceData(data))
        }, [])
    return (
        <section>
            <div className="container my-5 ">
            <h3 className="text-center my-5 ">Provide awesome <span className="font-color">services</span></h3>
            <div className="row">
            {
                serviceData.map(data =><Service 
                    img={data.img} 
                    name={data.name} 
                    description={data.description} 
                    image={data.image}
                    key={data.name}></Service>)
            }
            </div>
            </div>
        </section>
    );
};

export default Services;