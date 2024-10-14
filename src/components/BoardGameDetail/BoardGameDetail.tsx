import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './BoardGameDetail.css'
import { create } from 'domain'

interface BoardGameProps {
    id: number
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
        <div className="container-inner boardgame-detail">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <div className="main-content">
                <div className="image-section">
                    <img src={item.image} alt="" />
                </div>
                <div className="details">
                    <div className="detail-title">
                        <h1 className="name">{item.name}</h1>
                        <div className="status">Available</div>
                    </div>
                    <p className="description">{item.description}</p>
                </div>
            </div>
            <div className="create-lobby">
                <button onClick={() => navigate(`/boardgame/${item.id}/createlobby`,
                    { state: { name: item.name, maxPlayer: item.max_player, iMage: item.image } })}>Create Lobby</button>
            </div>
        </div>
    )
}

export default BoardGameDetail