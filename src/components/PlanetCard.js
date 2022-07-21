import React, { Component } from 'react';

class PlannetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div div data-testid="planet-card">
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img src={ planetImage } alt="Planeta " />
      </div>
    );
  }
}

PlannetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};

export default PlannetCard;
