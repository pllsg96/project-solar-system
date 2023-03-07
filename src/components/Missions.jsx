import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './style/Missions.css';

class Missions extends Component {
  render() {
    const x = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />
    ));
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" className="missions-title" />
        <div className="missions-allcards">
          {x}
        </div>
      </div>
    );
  }
}

export default Missions;
