import React from 'react';
import AdminServiceList from '../../Admin/AdminServiceList/AdminServiceList';
import CustomerServiceList from '../../Customer/CustomerServiceList/CustomerServiceList';
import AdminCustomerNav from '../../Shared/AdminCustomerNav/AdminCustomerNav';
import SideBar from '../../Shared/SideBar/SideBar';

const ServiceList = () => {
    return (
        <div>
            <AdminCustomerNav></AdminCustomerNav>
            <div className="d-flex">
                <SideBar></SideBar>
                <AdminServiceList></AdminServiceList>
                {/* <CustomerServiceList></CustomerServiceList> */}
            </div>
        </div>
    );
};

export default ServiceList;