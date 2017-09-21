import React from 'react';

const Projects = () => (
  <div className="wrapper">
    <h2 className="header">PROJECTS</h2>
    <section className="content-wrapper">
      <div className="sub-wrapper">
        <h4 className="sub-header">OUIJA</h4>
        <div className="link-group">
          <a className="project-link" href="http://www.ouija.life">LIVE</a>
          <a className="project-link" href="https://www.github.com/jules-costa/Ouija">GITHUB</a>
        </div>
        <p>Ouija is a single-page blogging application fully built in under 10 days. Its minimalist design invites the user to read poems and interact with other users through likes, follows and comments. Built with the user in mind, Ouija features customizable user profiles with curated feeds based on the user's liked stories and followed authors. Technologies used: PostgreSQL, Ruby on Rails 5, Redux, React.js, HTML5 and SASS.</p>
      </div>
      <div className="sub-wrapper">
        <h4 className="sub-header">COVERAGE ASSESSMENT</h4>
        <div className="link-group">
          <a className="project-link" href="http://www.coverageassessment.com">LIVE</a>
          <a className="project-link" href="https://www.github.com/jules-costa/CoverageAssessment">GITHUB</a>
        </div>
        <p>Coverage Assessment is an insurance blog that began as a static Wordpress site. I recently rebuilt it from back to front in order to deepen my knowledge of Rails 5, Redux and React.js. After reaching MVP, I rethought my approach entirely. I wanted to simplify the codebase, improve the functionality, and polish the user experience. I created a second iteration in a few hours. The live site is constructed using a Hugo template (written in Go), and is deployed on Netlify with continuous integration.</p>
      </div>
    </section>
  </div>
);

export default Projects;
