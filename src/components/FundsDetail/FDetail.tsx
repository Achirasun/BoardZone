import React, { useState } from 'react'
import "./FDetail.css"
import { Link } from 'react-router-dom'
import { useLocation, useParams } from 'react-router-dom'

interface data {
  name: string;
  details: string;
  current: number;
  target: number;
}

const FDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>(); // Get the fund ID from the URL
  const location = useLocation();
  const game = location.state?.game as data | undefined; // Access the passed fund details
  // const [name2, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [money, setMoney] = useState<number | string>('');
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<(File | null)[]>([null, null, null, null]);
  // const handlePost = () => {
  //     // Handle the post submission logic here
  //     console.log({ name, description, money, mainImage, additionalImages });
  //   };
  return (
    <div>
      <div id="container">
      <Link to='/funds'>
        <button id="backButton">Back</button>
      </Link>
      <div id="formContainer">
        <div id="leftSection">
          <label id="mainImagePlaceholder"></label>
          <div id="additionalImages">
            {additionalImages.map((_image, index) => (
              <label key={index} id="additionalImagePlaceholder">
              </label>
            ))}
          </div>
        </div>

        <div id="rightSection">
          <div id="nameTextarea">
            Name
          </div>
          <div id="descriptionTextarea">
            เนื้อหาโพส...
          </div> 
          <div>
            Post by ...
          </div>
          {game ? (
            <div>
              <div style={styles.progressBarContainer}>
                  <div style={{ ...styles.progressBar, width: `${game.current / game.target * 100}%` }} />
              </div>
              <div id="formContainer">
                <div id="left">
                  {game.current}
                </div>
                <div id="right">
                  {game.target}
                </div>
              </div>
            </div>
          ) : (<p>No fund data available</p>)} 
          <div id="center">
            <Link to='/funds'>
              {/* <button onClick={handlePost} id="DonateButton">Donate</button> */}
              <button id="DonateButton">Donate</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const styles = {
     progressBarContainer: {
       width: '100%',
       height: '20px',
       backgroundColor: '#eee',
       borderRadius: '5px',
       marginBottom: '10px',
     },
    
     progressBar: {
       height: '100%',
       backgroundColor: '#4caf50', 
       borderRadius: '5px',
  },
};

export default FDetail;