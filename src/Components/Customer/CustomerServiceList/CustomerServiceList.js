import React, { useEffect, useState } from 'react';
import Status from '../Status/Status';

const CustomerServiceList = () => {
    const [statusData, setStatusData] = useState([])
        useEffect(()=>{
        fetch('http://localhost:5000/showclientorders')
        .then(res => res.json())
        .then(data => setStatusData(data) )
        }, [])

    return (
        <div style={{ backgroundColor: "#EDF8F2", width: "100%" , minHeight: "590px"}}>

            <div className="row">
                {
                    statusData.map(data => <Status
                        img={data.img}
                        name={data.name}
                        description={data.description}
                        image={data.image}
                        key={data.name}></Status>)
                }
            </div>

        </div>
    );
};

export default CustomerServiceList;