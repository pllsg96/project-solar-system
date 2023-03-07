import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';
import './fonts/Epilogue/static/Epilogue-Regular.ttf';

class App extends React.Component {
  render() {
    return (
      <div className="mainApp">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}
// starting
export default App;
