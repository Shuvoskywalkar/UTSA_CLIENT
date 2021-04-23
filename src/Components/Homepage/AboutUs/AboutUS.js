import React from 'react';
import './AboutUS.css'
const AboutUS = () => {
    return (
        <div className="bg-dark px-4 " >
            <div class="separator my-5 " >
               
  <div class="line"></div>
  <h2 >About Us</h2>
  <div class="line"></div>
</div>
<div className="info row   py-3  ">
<iframe  width="520" height="315" src="https://www.youtube.com/embed/Mtd1ABQYv2A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="col-md-6 my-3"></iframe>
{/* <div></div> */}
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.2830663433083!2d91.9548221149953!3d24.47564718423687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37519850774d375b%3A0xb4a7ad38630f4b1d!2sLungla%20Tea%20Factory!5e0!3m2!1sen!2sbd!4v1606141397575!5m2!1sen!2sbd" width="540" height="315" frameborder="0"  allowfullscreen className="col-md-6 my-3"></iframe>
        </div>
        <div class="line my-5"></div>

        </div>
    );
};

export default AboutUS;