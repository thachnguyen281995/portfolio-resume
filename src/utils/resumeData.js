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
            link:"/",
            text:"LinkedIn",
            icon:<LinkedInIcon/>,   
        },
      
    },
    about:"Good day ,everyone! I'm Nguyen Ngoc Thach , I'm 27 years old ,I'm Fresher Front-end Developer . I have six months experience . I'm often praised for my creativity and independent working skills . I always put my heart and soul into every single website that i develop. I guess that's all . I have to share about myself . Thank you for reading",
    education:[
        {
            title:"Education",
            date:"2021 - Present",
            description:"Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            title:"Education 2",
            date:"2018 - Present",
            description:"Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            title:"Education 3",
            date:"2018 - Present",
            description:"Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
    ],
    experience:[
        {
            title:"Work 1",
            date:"2018 - Present",
            description:"Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            title:"Work 2",
            date:"2018 - Present",
            description:"Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            title:"Work 3",
            date:"2018 - Present",
            description:"Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
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
            tag:"React",
            image:"https://img.freepik.com/premium-vector/purple-web-development-background_76964-167.jpg?w=2000",
            title:"Project 1",
            caption:"A short description",
            description:"This is my project .Please fill it in",
            links:[
                {link : "https://www.google.com",icon:<YouTube/>},
                {link : "https://www.google.com",icon:<GitHubIcon/>},
                {link : "https://www.google.com",icon:<Language/>}
            ]
        },
        {
            tag:"Python",
            image:"https://img.freepik.com/premium-vector/programming-code-made-with-binary-code-coding-hacker-background-digital-binary-data-streaming-digital-code_127544-778.jpg?w=2000",
            title:"Project 2",
            caption:"A short description",
            description:"This is my project .Please fill it in",
            links:[
                {link : "https://www.google.com",icon:<YouTube/>},
                {link : "https://www.google.com",icon:<GitHubIcon/>},
                {link : "https://www.google.com",icon:<Language/>}
            ]
        },
        {
            tag:"Java",
            image:"https://img.freepik.com/premium-vector/purple-web-development-background_76964-167.jpg?w=2000",
            title:"Project 3",
            caption:"A short description",
            description:"This is my project .Please fill it in",
            links:[
                {link : "https://www.google.com",icon:<YouTube/>},
                {link : "https://www.google.com",icon:<GitHubIcon/>},
                {link : "https://www.google.com",icon:<Language/>}
            ]
        },
        {
            tag:"Java",
            image:"https://img.freepik.com/premium-vector/purple-web-development-background_76964-167.jpg?w=2000",
            title:"Project 3",
            description:"This is my project .Please fill it in",
            links:[
                {link : "https://www.google.com",icon:<YouTube/>},
                {link : "https://www.google.com",icon:<GitHubIcon/>},
                {link : "https://www.google.com",icon:<Language/>}
            ]
        }
    ]
    
}