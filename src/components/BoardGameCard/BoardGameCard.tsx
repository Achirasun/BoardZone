import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './BoardGameCard.css'
import { UserContext } from '../../data/UserContext';
import axios from 'axios'


interface BoardGameProps {
    id: number
    name: string
    description: string
    max_player: number
    image: string
}

const BoardGameCard: React.FC<BoardGameProps> = (boardgame: BoardGameProps)  => {

    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    const userlobbyid = userContext?.userLobby;
    const [available, setAvailable] = useState<boolean>(true);
    // const response = await axios.get(`http://localhost:8080/api/boardgames/id/${boardgame.id}`);
    // const bglobbyid = response.data.lobby_id;
    // const available = (userlobbyid === bglobbyid);



    const goToPage = (item: BoardGameProps) => {
        navigate(`/boardgame/${item.id}`, {state: item})
    }

    useEffect(() => {
        const fetchLobbyId = async () => {
        try {
        const response = await axios.get(`http://localhost:8080/api/boardgames/id/${boardgame.id}`);
        const bglobbyid = response.data.lobby_id;
        setAvailable(!bglobbyid);
        } catch (error) {
        console.error('Error fetching lobby ID:', error);
        }
    };

    fetchLobbyId();
    }, [boardgame.id]);

    return (
        <div className="boardgame-card" onClick={() => goToPage(boardgame)}>
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
                    <div className={available ? 'available' : 'not-available'}>
                        {available ? 'Available' : 'In Use'}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BoardGameCard;