import React from 'react';
import AdminCustomerNav from '../../Shared/AdminCustomerNav/AdminCustomerNav';
import SideBar from '../../Shared/SideBar/SideBar';
import MakeAdminForm from '../MakeAdminForm/MakeAdminForm';

const MakeAdmin = () => {
    return (
        <div>
            <AdminCustomerNav></AdminCustomerNav>
            <div className="d-flex">
                <SideBar></SideBar>
                <MakeAdminForm></MakeAdminForm>
            </div>
        </div>
    );
};

export default MakeAdmin;