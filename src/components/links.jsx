import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <section className="links">
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/work">WORK</NavLink>
      <NavLink to="/projects">PROJECTS</NavLink>
      <div className="personal-links">
        <a href="https://www.linkedin.com/in/julianne-costa"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="https://www.github.com/jules-costa"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="../../jules_costa_long_resume.pdf"><i className="fa fa-file-o" aria-hidden="true"></i></a>
      </div>
    </section>
  );
};

export default Links;
