import React from "react";
import Button from '@mui/material/Button';
import "./button.css"
const CustomButton = ({ text, icon }) => {
  return (
    <Button
      className="custom_btn" variant="contained" 
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    ><span className="btn_text">{text}</span></Button>
  );
};
export default CustomButton;
