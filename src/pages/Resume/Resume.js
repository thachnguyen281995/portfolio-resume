import React from "react";
import { Grid, Typography, Icon, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import WorkIcon from "@mui/icons-material/Work";
import resumeData from "../../utils/resumeData";
import CustomTimeLine, {
  CustomTimeLineSeparator,
} from "../../components/Timeline/Timeline";
import SchoolIcon from "@mui/icons-material/School";
import "./Resume.css";
import {
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
} from "@mui/lab";
import SkillsBar from "../../components/SkillsBar/SkillsBar";
import CustomButton from "../../components/Button/Button";
const Resume = () => {
  return (
    <>
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Experience */}
            <Grid item xs={12} md={6}>
              <CustomTimeLine title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experience.map((item) => (
                  <TimelineItem>
                    <CustomTimeLineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {item.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {item.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {item.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>

            {/* Education */}
            <Grid item xs={12} md={6}>
              <CustomTimeLine title="Education" icon={<SchoolIcon />}>
                {resumeData.education.map((item) => (
                  <TimelineItem>
                    <CustomTimeLineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {item.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {item.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {item.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent="space-around">
            {resumeData.services.map((item) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <div className="service_icon">{item.icon}</div>
                  <Typography className="service_title" variant="h6">
                    {item.title}
                  </Typography>
                  {/* <Typography className="service_description" variant="body2">
                    {item.description}
                  </Typography> */}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="section mb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Skills</h6>
        </Grid>
        <Grid className="top_30" item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <SkillsBar />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={5}className="section pt_45 pb_45">
        {/* Contact form */}
        <Grid item xs={12} lg={8}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs ={12} sm={6}>
                  <TextField variant="standard" fullWidth name="name" label="Name">

                  </TextField>
                </Grid>
                <Grid item xs ={12} sm={6}>
                  <TextField variant="standard" fullWidth name="E-mail" label="Email">
                    
                  </TextField>
                </Grid>
                <Grid item xs ={12} >
                  <TextField variant="standard" fullWidth name="message" label="Message" multiline rows ={1}>
                    
                  </TextField>
                </Grid>
                <Grid item xs ={12}>
                  <CustomButton text="Submit"/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Contact information */}
        {/* <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">
                Contact information
              </h6>
            </Grid>
            <Grid item xs ={12}>
              <Grid container >
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Address:</span>{resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Address:</span>{resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Address:</span>{resumeData.address}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(resumeData.socials).map(item =>(
                  <Grid item className="contactInfo_social">
                    <a href={resumeData.socials[item].link}>
                      {resumeData.socials[item].icon}
                    </a>
                    </Grid>
                ))}
              </Grid>
            </Grid>

          </Grid>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Resume;
