import React from 'react';
import AdminCustomerNav from '../../Shared/AdminCustomerNav/AdminCustomerNav';
import SideBar from '../../Shared/SideBar/SideBar';
import AddServicesForm from '../AddServicesForm/AddServicesForm';

const AddServices = () => {
    return (
        <div>
            <AdminCustomerNav></AdminCustomerNav>
            <div className="d-flex">
                <SideBar></SideBar>
                <AddServicesForm></AddServicesForm>
            </div>
        </div>
    );
};

export default AddServices;