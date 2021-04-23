import React from 'react';
import { Link } from 'react-router-dom';

const headerBody = () => {
    return (
        <div className="row col-12">
        <div className="col-md-6 col-sm-6 col-6" style={{height:"400px"}}>
            <h1 className="mt-5" style={{ 
fontFamily: "Poppins",
fontStyle: "normal",
// font-weight: bold;
fontSize: "60px",
lineHeight: "80px",
/* or 125% */

letterSpacing: "0.01em",

color: 'purple'

}}>Wellcome to our <br/> <span className="text-light">U.<span className="text-success">T</span>.S.A</span> family</h1>
            <h5 className="text-warning mt-4">Well,We are an Non-Profitable-Organization,We work for the betterment of our peoples which is totally non-political...</h5>
            <Link to="/Afterlogin">

                       <div className="btn btn-warning text-dark mt-5"> 

                       <strong>অনুদানে ইচ্ছুক?</strong>

                       </div>
                       </Link>

        <div className="btn btn-danger text-light mt-5 mx-5"><strong>অংশগ্রহনে ইচ্ছুক?</strong></div>
        </div>
        <div className="col-md-6 col-sm-6 col-6">
            <img src="https://i.ibb.co/Jyt3WnH/79987329-stock-vector-a-woman-in-traditional-clothes-collects-tea-leaves-on-a-a-tea-plantation-field.png" alt="tea Workers image should be here" className="w-100 mt-5"/>
        </div>
    </div>
    );
};

export default headerBody;