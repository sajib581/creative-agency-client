import React from 'react';
import AdminServiceList from '../../Admin/AdminServiceList/AdminServiceList';
import CustomerServiceList from '../../Customer/CustomerServiceList/CustomerServiceList';
import AdminCustomerNav from '../../Shared/AdminCustomerNav/AdminCustomerNav';
import SideBar from '../../Shared/SideBar/SideBar';

const ServiceList = () => {
    const isAdmin = localStorage.getItem("isAdmin")
    console.log(isAdmin);
    return (
        <div>
            <AdminCustomerNav></AdminCustomerNav>
            <div className="d-flex">
                <SideBar></SideBar>
                {
                    isAdmin  ? <AdminServiceList></AdminServiceList> : 
                    <CustomerServiceList></CustomerServiceList>
                }
                
                
            </div>
        </div>
    );
};

export default ServiceList;