import React, { Component } from 'react';

import { IntroSection } from './components';
import User from './UserDetails';
import './assets/styles.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <IntroSection user={User} />
      </React.Fragment>
    );
  }
}

export default App;
