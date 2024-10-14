import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './BoardGameDetail.css'
import { create } from 'domain'
import { UserContext } from '../../data/UserContext';

interface BoardGameProps {
    id: number
    name: string
    description: string
    max_player: number
    image: string
}

const BoardGameDetail = () => {

    const userContext = useContext(UserContext);

    const navigate = useNavigate();

    const location = useLocation();
    const item = location.state as BoardGameProps;

    if (!item) {
        return <div className="container-inner">
            <h1>No Board game right now!!! </h1>
        </div>
    }

    const handleSubmit = async (e: React.FormEvent) => { //ตัวจัดการการกดส่ง
        e.preventDefault();
        const checkLogin = userContext?.userId; // ตัว user เรียกค่า userId
        if (!checkLogin) { // ถ้า userId เป็น null หรือ undefined
          navigate('/login'); //ส่งไปหน้าที่ต้องการ
        } else {
            navigate(`/boardgame/${item.id}/createlobby`,
                { state: { 
                    name: item.name, 
                    maxPlayer: item.max_player, 
                    iMage: item.image } })
        //   console.log('Already Login, User ID:', userContext?.userId); //ถ้ามีอยู่แล้วไม่ต้องทำอะไร (จะใส่ log ก็ได้)
        }
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
            <form className="create-lobby" onSubmit={handleSubmit}>
                <button type='submit'>Create Lobby</button>
            </form>
        </div>
    )
}

export default BoardGameDetail