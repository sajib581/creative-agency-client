import React from 'react';
import Status from '../Status/Status';

const CustomerServiceList = () => {
    const statusData = [
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
        <div style={{ backgroundColor: "#EDF8F2", width: "100%" , minHeight: "590px"}}>

            <div className="row">
                {
                    statusData.map(data => <Status
                        img={data.img}
                        name={data.name}
                        description={data.description}
                        key={data.name}></Status>)
                }
            </div>

        </div>
    );
};

export default CustomerServiceList;