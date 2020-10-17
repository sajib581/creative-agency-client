import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Status from '../Status/Status';

const CustomerServiceList = () => {
    const [statusData, setStatusData] = useState([])
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext)
    const email = loggedInUser.email
        useEffect(()=>{
        fetch(`https://serene-harbor-22092.herokuapp.com/showclientorders`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:email})
          })
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