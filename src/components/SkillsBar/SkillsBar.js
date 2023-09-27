import React from "react";
import './SkillsBar.css'
function SkillsBar() {
  return (
    <>
      <div class="skill-bars">
        <div class="bar">
          <div class="info">
            <span>HTML</span>
          </div>
          <div class="progress-line html">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>CSS</span>
          </div>
          <div class="progress-line css">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>JavaScript</span>
          </div>
          <div class="progress-line jquery">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>ReactJs</span>
          </div>
          <div class="progress-line python">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>Material UI</span>
          </div>
          <div class="progress-line mysql">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsBar;
