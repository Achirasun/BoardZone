import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BoardGameCard.css'

interface BoardGameProps {
    id: number
    name: string
    description: string
    max_player: number
    image: string
}

const BoardGameCard: React.FC<BoardGameProps> = (boardgame: BoardGameProps)  => {

    const navigate = useNavigate();

    return (
        <div className="boardgame-card" onClick={() => navigate("/lobby")}>
            <div className="img">
                <img src={boardgame.image} alt="" />
            </div>

            <div className="title">
                {boardgame.name}
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