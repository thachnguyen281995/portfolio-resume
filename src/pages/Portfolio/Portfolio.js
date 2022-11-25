import React, { useState } from "react";
import "./Portfolio.css";
import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ButtonBase 
} from "@mui/material";
import resumeData from "../../utils/resumeData";
const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);
  const ProjectDialop = () => (
    <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} fullWidth>
      <DialogTitle onClose={() => setProjectDialog(false)}>
        {projectDialog.title}
      </DialogTitle>
      <img src={projectDialog.image} alt="" />
      <DialogContent>{projectDialog.description}</DialogContent>
      <DialogActions>
        {projectDialog?.links.map((link) => (
          <a href={link.link}>{link.icon}</a>
        ))}
      </DialogActions>
    </Dialog>
  );
  return (
    <Grid container className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(resumeData.portfolio.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
        {/* Projects */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {resumeData.portfolio.map((item) => (
              <>
                {tabValue === item.tag || tabValue === "All" ? (
                  <Grid item xs={12} sm={6} md={4} >
                    <Grow in timeout={1000}>
                      <Card
                        className="CustomCard"
                        onClick={() => setProjectDialog(item)}
                      >
                        <CardActionArea>
                          <CardMedia 
                            className="customCard_image"
                            image={item.image}
                            title={item.title}
                          />
                          <CardContent>
                            <Typography variant={"body2"}
                            className="customCard_title">
                              {item.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              className="customCard_caption"
                            >
                              {item.description}
                            </Typography>
                            <Typography
                              variant="body2"
                              className="customCard_description"
                            >
                              {item.caption}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            ))}
          </Grid>
        </Grid>
        <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
          <DialogTitle onClose={() => setProjectDialog(false)}>
            {projectDialog.title}
          </DialogTitle>
          
          <img src={projectDialog.image} alt="" className="projectDialog_image" />

          
          <DialogContent>
            {projectDialog?.links?.map((link) => (
              <a href={link.link} className="projectDialog_icon">
                <ButtonBase className="projectDialog_description">
              {projectDialog.description} <span className="icon">{link.icon}</span>
            </ButtonBase>
              </a>
            ))}
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
