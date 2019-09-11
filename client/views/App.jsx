import React from 'react';
import Routes from '../config/router';
import AppBar from './layout/app-bar';

class App extends React.Component {
  componentDidMount() {
    // do something here
  }
  render() {
    return [
      <AppBar key='app-bar' />,
      <Routes key='routes' />,
    ]
  }
}

export default App;

