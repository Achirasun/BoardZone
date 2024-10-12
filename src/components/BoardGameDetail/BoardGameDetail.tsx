import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './BoardGameDetail.css'

interface BoardGameProps {
    id: string
    name: string
    description: string
    max_player: number
    image: string
}

const BoardGameDetail = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const item = location.state as BoardGameProps;

    if (!item) {
        return <div className="container-inner">
            <h1>No Board game right now!!! </h1>
        </div>
    }

    return (
        <div className="container-inner">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <div className="main-content">
                <div className="image-section">
                    <img src={item.image} alt="" />
                </div>
                <div className="description">
                    <h1 className="boardgame-title">{item.name}</h1>
                    <p className="description">{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BoardGameDetail