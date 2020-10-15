import React from 'react';
import AdminCustomerNav from '../../Shared/AdminCustomerNav/AdminCustomerNav';
import SideBar from '../../Shared/SideBar/SideBar';
import OrderForm from '../OrderForm/OrderForm';

const PlaceOrder = () => {
    return (
        <div>
            <AdminCustomerNav></AdminCustomerNav>
            <div className="d-flex">
                <SideBar></SideBar>
                <OrderForm></OrderForm>
            </div>
        </div>
    );
};

export default PlaceOrder;