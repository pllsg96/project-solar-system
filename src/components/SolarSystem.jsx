import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './style/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    const x = Planets.map(({ name, image }) => (
      <PlanetCard
        key={ name }
        planetName={ name }
        planetImage={ image }

      />
    ));
    return (
      <div>
        <Title headline="Planetas" />
        <div className="solar-system" data-testid="solar-system">
          {x}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
