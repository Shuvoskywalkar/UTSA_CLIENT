import React from 'react';
import '../Footer/Footer.css'
const Footer = () => {
    return (
        <div className="FooterContainer py-5 px-5">
            <div className="row ">
                <div className="col-md-6  text-primary " >
                <h1 style={{color:"azure"}}>Stay Tunrd With Us <br/> Get a reply</h1>
                <br/>
                
                
                <h5 style={{color:"lavender"}} className=" font-weight">017159753</h5>
                <h6 style={{color:"lavender"}}  className=" font-weight-bold">facbook.com/utsabd</h6>

                <h6 className="font-weight-bold" style={{color:"lavender"}}>utsabd1971@gmail.com</h6>
                </div>
                <div className="col-md-6 col-sm-6">
                    <input type="email" name="EmailOfNotification" id="" placeholder="send us your email address" className="w-75 bg-light pt-2  pb-2" style={{borderRadius:"4px"}}/>
                   <br/>
                   <br/>
                   <input type="text" name="NameOfNotification" id="" placeholder=" your name" className="w-75 bg-light pt-2  pb-2" style={{borderRadius:"4px"}}/>
                    
                    <br/>
                    <br/>
                    <button type="submit"  className="btn btn-warning  text-dark font-weight-bold px-4 py-2">Send</button>
                </div>
            </div>
            {/* <footer className="text-secondary">copyright@UTSABD.com</footer> */}
            <footer style={{marginTop:"110px"}} className="text-white  text-center ">DevelopedBy<span className="">ShuvoKoiri</span> </footer>
        </div>
    );
};

export default Footer;