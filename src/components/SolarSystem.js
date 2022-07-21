import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

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
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {x}
      </div>
    );
  }
}

export default SolarSystem;
