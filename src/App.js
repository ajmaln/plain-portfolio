import React, { Component } from 'react';

import { IntroSection, ProjectsSection, SkillsSection } from './components';
import User from './UserDetails';
import './assets/styles.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <IntroSection user={User} />
        <ProjectsSection projects={User.projects} />
        <SkillsSection skills={User.skills} />
      </React.Fragment>
    );
  }
}

export default App;
