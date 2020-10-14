import React from 'react';
import Service from '../Service/Service';

const Services = () => {
    const serviceData = [
        {
            img: 'https://i.ibb.co/ZcvcWwq/service1.png',
            name: 'Web & Mobile design',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },
        {
            img: 'https://i.ibb.co/FVbV0My/service2.png',
            name: 'Graphic design',
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
        },
        {
            img: 'https://i.ibb.co/tXkv821/service3.png',
            name: 'Web development',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
        }
    ]
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
                    key={data.name}></Service>)
            }
            </div>
            </div>
        </section>
    );
};

export default Services;