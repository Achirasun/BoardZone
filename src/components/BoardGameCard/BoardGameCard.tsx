import React from 'react'

const BoardGameCard: React.FC = () => {
  return (
    <div className="boardgame-card">
        <div className="img">
            <img src="" alt="" />
        </div>

        <div className="title">
            I'm the Boss
        </div>

        <div className="box">
            <div className="rating">
                Rating : 
            </div>
            <div className="status">
                Available
            </div>
        </div>

    </div>
  )
}

export default BoardGameCard;