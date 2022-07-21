import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlannetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div div data-testid="planet-card">
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlannetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlannetCard;
