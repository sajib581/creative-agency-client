import React from 'react';

const Footer = () => {
    return (
        <section className="contact mt-5 py-5" style={{backgroundColor: '#FBD062'}}>
           <div className="container">               
               <div className="row">
                   <div className="col-md-6">
                        <h2>Let us handle your project,<br/> professionally.</h2>
                        <p>With well written codes, we build amazing apps for all <br/>platforms, mobile and web apps in general.</p>
                   </div>
               <div className="col-md-6 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your email address "/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your name / company’s name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btn btn-dark px-5"> Submit </button>
                       </div>
                   </form>
               </div>
               </div>
           </div>
       </section>
    );
};

export default Footer;