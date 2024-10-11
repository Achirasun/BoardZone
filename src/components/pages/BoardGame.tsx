import React from 'react'
import './BoardGame.css'
import BoardGameCard from '../BoardGameCard/BoardGameCard'


export const BoardGame = () => {

  return (
    <div className="container-inner">
        <section className="boardgame-section">

          <BoardGameCard />

        </section>
    </div>
  )
}

export default BoardGame;