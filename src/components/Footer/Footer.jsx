import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="https://i.ibb.co/vznH4ZD/needed-removebg-preview.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">MRA-188, Udayamperoor, Thripunithura, Ernakulam</span>
          <span style={{color:"GrayText",fontSize:"0.9rem"}}>roshanbn20@gmail.com</span>
          <span style={{color:"GrayText",fontSize:"0.9rem"}} className="secondaryText">9847767171</span>
        </div>
      </div>
        <p style={{textAlign:"center",fontFamily:"fantasy",fontWeight:"200",fontSize:"14px",backgroundColor:"var(--blue)",color:"white",padding:"10px"}}>Copyright© 2023 Roshan B Nair - All rights reserved</p>
    </div>
  );
};

export default Footer;
