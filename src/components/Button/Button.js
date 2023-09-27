import React from "react";
import Button from '@mui/material/Button';
import "./button.css"
import Pdf from '../../assets/images/CV Thach NGUYEN - HTML Developer-TopCV.vn (2).pdf'
const CustomButton = ({ text, icon }) => {
  return (
    <Button
      className="custom_btn" variant="contained" 
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    ><a href ={Pdf}  className="btn_text">{text}</a></Button>
  );
};
export default CustomButton;
