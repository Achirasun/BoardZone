import React from 'react'
import './FundList.css'
import FList from '../FList/FList'
import { Link } from 'react-router-dom'

const games = [
  { name: 'Board game name 1', details: 'detail...', progress: 85, price: 2490 },
  { name: 'Board game name 2', details: 'detail...', progress: 20, price: 599 },
  { name: 'Board game name 3', details: 'detail...', progress: 50, price: 900 },
  { name: 'Board game name 4', details: 'detail...', progress: 15, price: 1599 },
  { name: 'Board game name 5', details: 'detail...', progress: 90, price: 350 },
];

const FundList: React.FC = () => {
  return (
    <div id="fundContainer">
      {games.map((game, index) => (
        <Link to='/funds/detail'>
          <FList
            key={index}
            name={game.name}
            details={game.details}
            progress={game.progress}
            price={game.price}
          />
        </Link>
      ))}
      <div id="center">
        <Link to='/funds/post'>
          <button id="PostButton">Post</button>
        </Link>
      </div>
    </div>
  );
};

export default FundList;