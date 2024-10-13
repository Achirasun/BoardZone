import React from 'react'
import './FundList.css'
import FList from '../FList/FList'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

interface data {
  id: number;
  name: string;
  details: string;
  current: number;
  target: number;
}

const FundList: React.FC = () => {
  const navigate = useNavigate();

  const games: data[] = [
    { id: 1, name: 'Board game name 1', details: 'detail...', current: 1885, target: 2490 },
    { id: 2, name: 'Board game name 2', details: 'detail...', current: 220, target: 599 },
    { id: 3, name: 'Board game name 3', details: 'detail...', current: 150, target: 900 },
    { id: 4, name: 'Board game name 4', details: 'detail...', current: 1555, target: 1599 },
    { id: 5, name: 'Board game name 5', details: 'detail...', current: 90, target: 350 },
  ];

  const handleFundClick = (game: data) => {
    // Navigate to the detail page with fund ID or data
    navigate(`/funds/${game.id}`, { state: { game } });
  };

  return (
    <div id="fundContainer">
      {games.map((game, index) => (
        <li onClick={() => handleFundClick(game)}>
          <FList
            key={index}
            id={game.id}
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