import React from 'react'
import './FundList.css'
import FList from '../FList/FList'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

interface data {
  name: string;
  details: string;
  current: number;
  target: number;
}

const FundList: React.FC = () => {
  const navigate = useNavigate();

  const games: data[] = [
    { name: 'Board game name 1', details: 'detail...', current: 1885, target: 2490 },
    { name: 'Board game name 2', details: 'detail...', current: 220, target: 599 },
    { name: 'Board game name 3', details: 'detail...', current: 150, target: 900 },
    { name: 'Board game name 4', details: 'detail...', current: 1555, target: 1599 },
    { name: 'Board game name 5', details: 'detail...', current: 90, target: 350 },
  ];

  const handleFundClick = (game: data) => {
    // Navigate to the detail page with fund ID or data
    navigate(`/funds/${game.name}`, { state: { game } });
  };

  return (
    <div id="fundContainer">
      {games.map((game, index) => (
        <li onClick={() => handleFundClick(game)}>
          <FList
            key={index}
            name={game.name}
            details={game.details}
            current={game.current}
            target={game.target}
          />
        </li>
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