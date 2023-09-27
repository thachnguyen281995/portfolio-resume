import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AssessmentOutlined, Language, WebOutlined, YouTube } from '@mui/icons-material';
import EventNoteIcon from '@mui/icons-material/EventNote';
export default{
    header_name:"Thạch is coding",
    name:"Thạch Nguyễn",
    title:"FrontEnd Developer",
    address:"Quảng Ngãi , Việt Nam",
    phone:"0777 472 549",
    socials:{
        Facebook:{
            link:"https://www.facebook.com/holygan.tlq",
            text:"facebook",
            icon:<FacebookIcon/>,   
        },
        Github:{
            link:"https://github.com/thachnguyen281995",
            text:"github",
            icon:<GitHubIcon/>,   
        },
        LinkedIn:{
            link:"https://www.linkedin.com/in/thach-nguyen-a78375230/",
            text:"LinkedIn",
            icon:<LinkedInIcon/>,   
        },
      
    },
    about:"Good day ,everyone! I'm Nguyen Ngoc Thach , I'm 29 years old ,I'm Fresher Front-end Developer . I have six months experience . I'm often praised for my creativity and independent working skills . I always put my heart and soul into every single website that i develop. I guess that's all . I have to share about myself . Thank you for reading",
    education:[
        {
            title:"Responsive Web Design",
            date:"2021 - 2022",
            description:"https://www.freecodecamp.org/certification/fcce7e60713-b296-4718-b0ff-81d3d4ee7e9f/responsive-web-design "
        },
        {
            title:"JavaScript Algorithms and Data Structure ",
            date:"2022",
            description:"https://freecodecamp.org/certification/fcce7e60713-b296-4718-b0ff-81d3d4ee7e9f/javascript-algorithms-and-data-structures "
        },
    ],
    experience:[
        {
            title:"Freelancer",
            date:"10/2022 - 3/2023",
            description:"Công ty Công Nghệ CodeBy  (Daykemit.edu.vn)"
        },
        // {
        //     title:"Work 2",
        //     date:"2018 - Present",
        //     description:"Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        // },
        // {
        //     title:"Work 3",
        //     date:"2018 - Present",
        //     description:"Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        // },
    ],
    services :[
        {
            title:"Web Development",
            description:"I have been a web developer for 1 year",
            icon:<WebOutlined/>
        },
        {
            title:"Branding Identity",
            description:"I have been a web developer for 1 year",
            icon:<EventNoteIcon/>
        },
        {
            title:"Illustrator",
            description:"I have been a web developer for 1 year",
            icon:<WebOutlined/>
        },

    ],
    skills: [
        {title:"FRONT_END",
        description:[
            "ReactJS",
            "SASS",
            "Material UI",
            "Tailwind CSS"
        ]
    },
    

    ],
    portfolio: [
        {
            tag:"WordPress - Flatsome",
            image:"https://res.cloudinary.com/dgh2j7n1e/image/upload/v1695727362/nuoc-uong-dong-chai-bien-hoa-chat-luong_efjwt6.jpg",
            title:"ngocyenlinh.com",
            caption:"",
            description:"Deliver water to your home",
            links:[
                {link : "https://ngocyenlinh.com"},
               
            ]
        },
        {
            tag:"ReactJS - Nodejs",
            image:"https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690554942/t-gear-ecom/logo-title_izlwdz.png",
            title:"master--fpt-ecom.netlify.app",
            caption:"",
            description:"Ecommerce simple personal project",
            links:[
                {link : "https://master--fpt-ecom.netlify.app/"},
            ]
        },
        {
            tag:"HTML CSS JS",
            image:"https://thachnguyen281995.github.io/Caphe/img%20happycup/home5.jpg",
            title:"Website Template Responsive",
            // caption:"A short description",
            description:"Happy Cup Coffee",
            links:[
                {link : "https://thachnguyen281995.github.io/Caphe/?fbclid=IwAR3JpPRNyVnIc1KbslOJx_dNcjat928DNIGbx6Tt3ZvImpm6nFYLfYRRGnQ",icon:<GitHubIcon/>},
                // {link : "https://www.google.com",icon:<GitHubIcon/>},
                // {link : "https://www.google.com",icon:<Language/>}
            ]
        },
        {
            tag:"WordPress - Flatsome",
            image:"https://res.cloudinary.com/dgh2j7n1e/image/upload/v1695780966/odpu1rcl6ul2yybdpl6f.jpg",
            title:"https://fmcgtrading.co.uk",
            // caption:"A short description",
            description:"Build an interface to supply goods and allow ordering in quantities large at the distributor level",
            links:[
                {link : "https://fmcgtrading.co.uk"},
                // {link : "https://www.google.com",icon:<GitHubIcon/>},
                // {link : "https://www.google.com",icon:<Language/>}
            ]
        },
      
    ]

}