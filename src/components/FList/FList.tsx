import React from 'react'
import './FList.css'

interface data {
  name: string;
  details: string;
  progress: number; // Value between 0 and 100
  price: number;
}

const FList: React.FC<data> = ({ name, details, progress, price }) => {
  return (
    <div id="listContainer">
      <div id="iconContainer">
        <div id="icon" />
      </div>
      <div id="BoardGameInfo">
        <p id="BoardGameTitle">{name}</p>
        <p id="BoardGameDetails">{details}</p>
        <div style={styles.progressBarContainer}>
          <div style={{ ...styles.progressBar, width: `${progress}%` }} />
        </div>
      </div>
      <div id="priceContainer">
        <span>{price} THB</span>
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