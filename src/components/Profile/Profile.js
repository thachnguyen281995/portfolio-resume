import { Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import React from "react";
import CustomTimeLine, { CustomTimeLineSeparator } from "../Timeline/Timeline";
import "./Profile.css";
import resumeData from "../../utils/resumeData";
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

const CustomTimeLineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimeLineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}: </span> <a href={link}>{text}</a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);
const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.header_name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img
          src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/131985601_2819256774956470_5588938533438993012_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W0fFzwct8tcAX9KNwIj&tn=-zethJOUhWeq7MIa&_nc_ht=scontent.fdad1-4.fna&oh=00_AT_kQiG70W766YTOJgl_5woQVnJuRxHTDnKRxxFHV1jzhA&oe=63783259"
          alt=""
        />
      </figure>
      <div className="profile_information">
        <CustomTimeLine icon={<PersonOutlineIcon />}>
          <CustomTimeLineItem title="Name" text={resumeData.name} />
          <CustomTimeLineItem title="Job" text={resumeData.title} />
          <CustomTimeLineItem title="Address" text={resumeData.address} />
          <CustomTimeLineItem title="Phone" text={resumeData.phone} />
          {/* {Object.keys(resumeData.socials).map((key) => (
            <CustomTimeLineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))} */}
        </CustomTimeLine>
        <div className="button_container">
          <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
