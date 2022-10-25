import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";

import HomeIcon from "@mui/icons-material/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, withRouter, useLocation  } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import { Facebook } from "@mui/icons-material";
import TelegramIcon from '@mui/icons-material/Telegram';
import './Header.css'

const Header = (props) => {
  const location = useLocation();
  const pathName = location?.pathname;

  return (
    <Navbar  expand="lg" sticky="top" className="header">
      {/* Home Link */}
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName ==='/' ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={pathName === "/portfolio" ? "header_link_active" : "header_link"}
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map(key =>(
            <a href={resumeData.socials[key].link} target="_blank">{resumeData.socials[key].icon}</a>
          ))}
          <CustomButton text={"Hire me"} icon ={<TelegramIcon/>}/>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
