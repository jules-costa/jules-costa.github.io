import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/about';
import Work from './components/work';
import Projects from './components/projects';
import Links from './components/links';

const App = () => (
  <section className="main-wrapper">
    <Route path="/" component={Links} />
    <Route exact path="/" component={About} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
    <Route path="/projects" component={Projects} />
  </section>
);

export default App;
