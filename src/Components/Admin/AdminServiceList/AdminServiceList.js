import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const AdminServiceList = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://serene-harbor-22092.herokuapp.com/showAllOrders')
            .then(response => response.json())
            .then(data => setOrders(data))
    })
    return (
        <div style={{ backgroundColor: "#EDF8F2", width: "100%", minHeight: "590px" }}>
            <div style={{ backgroundColor: "white" }} className="m-4 p-3">
                <table className="table ml-3 mt-3">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">ProjectDetails</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <th scope="row">{order.userName}</th>
                                <td>{order.email}</td>
                                <td>{order.name}</td>
                                <td>{order.description.slice(0,25)+" ....."}</td>
                                <td><select className="btn btn-success dropdown-toggle" name="cars" id="cars">
                                    <option value="Pending">Pending</option>
                                    <option value="On Going">On Going</option>
                                    <option value="Done">Done</option>
                                </select></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminServiceList;