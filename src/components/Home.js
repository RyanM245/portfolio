import React from "react";

const Home = () => {
  return (
    <div className="home-body">
      <div className="main-home">
        <h1 className="name">Ryan Milne</h1>
        <h3 className="title">FULL STACK SOFTWARE DEVELOPER</h3>
        <div className="fas fa-laptop-code"></div>
        <div className="tech">
          JAVASCRIPT || REACT || NODE || HTML/CSS || SQL
        </div>
      </div>
      <div className="about-me">
        <h3>“Be yourself; everyone else is already taken.” ― Oscar Wilde</h3>
        <p>
          Hi I'm Ryan Milne! I'm a full-stack software developer, husband,
          self-proclaimed basketball analyst, and wanna-be foodie! I have seen
          that through technology and continued education people can improve
          their lives! Below you can see some of the technologies I have worked
          with and continue down to see some of my projects.
        </p>
        <div className="technology">
          <i class="fab fa-js-square">
            <span>JAVASCRIPT</span>
          </i>
          <i class="fab fa-react">
            <span>REACT</span>
          </i>
          <i class="fab fa-node">
            <span>NODE</span>
          </i>
          <i class="fab fa-css3-alt">
            <span>CSS</span>
          </i>
          <i class="fab fa-html5">
            <span>HTML</span>
          </i>
          <i class="fab fa-aws">
            <span>AWS</span>
          </i>
          <i class="fab fa-sass">
            <span>SASS</span>
          </i>
          <div className="sql">
            <img
              alt="SQL"
              src="https://lucas-schaat.me/static/postgresLogo_white-94a940ac0737f334344825192977997a.png"
            />
            POSTGRESQL
          </div>
          <div className="redux">
            <img
              alt="redux"
              className="redux-image"
              src="https://lucas-schaat.me/static/reduxLogo_white-e9b5b6d8ff9aefebc2358022ad78b6c7.png"
            />
            REDUX
          </div>
          <div className="express">
            <img
              alt="express"
              className="express-img"
              src="https://lucas-schaat.me/static/expressLogo_white-36cce1f8d4dd9551e0df58ab32af4827.png"
            />
            EXPRESS
          </div>
        </div>
      </div>
      <div className="projects-main">
        <h2>PROJECTS</h2>
        <div className="memory-body">
          <div className="memory-info">
            <h3>My Portfolio</h3>
            <p>
              This is the Portfolio I use to show off all of the work that I
              have done.
            </p>
            <a
              href="https://github.com/RyanM245/portfolio"
              className="fab fa-github"
            >
              <span>GITHUB</span>
            </a>
          </div>
          <img
            alt="Code"
            src="https://images.unsplash.com/photo-1508317469940-e3de49ba902e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
        <div className="budget-body">
          <img
            alt="Computer"
            src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
          <div className="budget-info">
            <h3>YouTube-Yelp</h3>
            <p>
              A site designed to allow YouTube users a way to review channels
              and give them access to new channels they might not otherwise
              find.
            </p>
            <div>
              <a href="http://youtube-yelp.com/#/">LINK | </a>
              <a
                href="https://github.com/cavingayle/youtubeyelp"
                className="fab fa-github"
              >
                <span>GITHUB</span>
              </a>
            </div>
          </div>
        </div>
        <div className="yy-body">
          <div className="yy-info">
            <h3>Alley-Hoop</h3>
            <p>
              A site designed to helped users locate pick-up basketball games as
              well as schedule a pick-up basketball game.
            </p>
            <div>
              <a
                href="https://github.com/RyanM245/alley_hoop"
                className="fab fa-github"
              >
                <span>GITHUB</span>
              </a>
            </div>
          </div>
          <img
            alt="Basketball Court"
            src="https://images.unsplash.com/photo-1496033604106-04799291ee86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
