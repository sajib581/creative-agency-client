import React from 'react';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';
import CompanyUser from '../CompanyUser/CompanyUser';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WorksCarusel from '../WorksCarusel/WorksCarusel';

const Home = () => {
    return (
        <div>
            <Header></Header>   
            <CompanyUser></CompanyUser>   
            <Services></Services> 
            <WorksCarusel></WorksCarusel> 
            <ClientFeedBack></ClientFeedBack>    
            <Footer></Footer>
        </div>
    );
};

export default Home;