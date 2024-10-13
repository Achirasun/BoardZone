import React from 'react'
import './FList.css'

interface data {
  id: number;
  name: string;
  details: string;
  current: number;
  target: number;
}

const FList: React.FC<data> = ({ id, name, details, current, target }) => {
  return (
    <div id="listContainer">
      <div id="iconContainer">
        <div id="icon" />
      </div>
      <div id="BoardGameInfo">
        <p id="BoardGameTitle">{name}</p>
        <p id="BoardGameDetails">{details}</p>
        <div style={styles.progressBarContainer}>
          <div style={{ ...styles.progressBar, width: `${current / target * 100}%` }} />
        </div>
      </div>
      <div id="priceContainer">
        <span>{target} THB</span>
      </div>
    </div>
  );
};

const styles = {
  progressBarContainer: {
    width: '100%',
    height: '20px',
    backgroundColor: '#eee',
    borderRadius: '5px',
    marginTop: '5px',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50', 
    borderRadius: '5px',
  },
};

export default FList;