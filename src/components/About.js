import React from "react";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-body">
        <div className="about-me">
          <h1>ABOUT ME</h1>
          <p>
          Hey, I'm Ryan Milne! I am a web developer and I love to push myself in every project I work on! Although I am fairly new to the Web Development world I have grown up with a love to solve problems. I grew up in a small town out in the middle of nowhere Utah. This town and surrounding area is a place I love and is where I learned the importance of hard work and also learned how to be self-sufficient.  
          </p>
        </div>
        <div className="experience">
          <div className="devmtn">
            <h1 className="fas fa-code">
              <span>DEVMOUNTAIN - HONORS GRADUATE</span>
            </h1>
            <p>
              Immersive, 13-week web-development bootcamp for learning
              Javascript, HTML/CSS, React, Node, and PostgreSQL frameworks
            </p>
          </div>
          <div className="premier">
            <h1 className="fas fa-coins">
              <span>APTIVE ENVIRONMENTAL - ROUTE MANAGER </span>
            </h1>
            <p>
              Worked daily as a team to accomplish goals that pushed us. Used
              software called PestRoutes to schedule and manage customers and
              technicians.
            </p>
          </div>
          <div className="franz">
            <h1 className="fas fa-toolbox">
              <span>LIFETIME PRODUCTS - INSTALL TEAM LEAD</span>
            </h1>
            <p>
              Lead two teams of four in managing installation of outdoor
              equipment across 3 states
            </p>
          </div>
          <div className="crane">
            <h1 className="fas fa-tools">
              <span>HOLEY DRYWALL & REPAIR - OWNERS ASSISTANT</span>
            </h1>
            <p>
              Worked side by side with the owner of the company to assist him
              with increased business demands in drywall and repair services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
