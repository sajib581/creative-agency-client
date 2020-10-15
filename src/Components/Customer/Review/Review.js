import React from 'react';
import AdminCustomerNav from '../../Shared/AdminCustomerNav/AdminCustomerNav';
import SideBar from '../../Shared/SideBar/SideBar';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = () => {
    return (
        <div>
            <AdminCustomerNav></AdminCustomerNav>
            <div className="d-flex">
                <SideBar></SideBar>
                <ReviewForm></ReviewForm>
            </div>
        </div>
    );
};

export default Review;