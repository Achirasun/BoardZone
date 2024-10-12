import React from 'react'
import './BoardGame.css'
import BoardGameCard from '../BoardGameCard/BoardGameCard'
import BoardGameItem from '../../data/boardgame.json'


export const BoardGame = () => {

  return (
    <div className="container-inner">
        <section className="boardgame-section">

          {BoardGameItem.map(board_game => (
            <BoardGameCard{...board_game}/>
          ))}

        </section>
    </div>
  )
}

export default BoardGame;