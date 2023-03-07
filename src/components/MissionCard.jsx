import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/MissionCard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <div className="mission-card-title">
          <h2 data-testid="mission-name">{name}</h2>
        </div>
        <hr />
        <div className="mission-card-info">
          <div className="mission-info-year">
            <p data-testid="mission-year">{year}</p>
          </div>
          <div className="mission-info-country">
            <p data-testid="mission-country">{country}</p>
          </div>
          <div className="mission-info-destination">
            <p data-testid="mission-destination">{destination}</p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
