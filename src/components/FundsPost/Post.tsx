import React, { useState } from 'react'
import "./Post.css"
import { Link } from 'react-router-dom'

const PostForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [money, setMoney] = useState<number | string>('');
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<(File | null)[]>([null, null, null, null]);

  const handleMainImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setMainImage(event.target.files[0]);
    }
  };

  const handleAdditionalImageChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedImages = [...additionalImages];
    if (event.target.files) {
      updatedImages[index] = event.target.files[0];
    }
    setAdditionalImages(updatedImages);
  };

  const handlePost = () => {
    // Handle the post submission logic here
    console.log({ name, description, money, mainImage, additionalImages });
  };

  return (
    <div id="container">
      <Link to='/funds'>
        <button id="backButton">Back</button>
      </Link>
      <div id="formContainer">
        <div id="leftSection">
          <label id="mainImagePlaceholder">
            {mainImage ? <img src={URL.createObjectURL(mainImage)} alt="Main" id="imagePreview" /> : '+'}
            <input type="file" accept="image/*" onChange={handleMainImageChange} id="fileInput" />
          </label>

          <div id="additionalImages">
            {additionalImages.map((image, index) => (
              <label key={index} id="additionalImagePlaceholder">
                {image ? (
                  <img src={URL.createObjectURL(image)} alt={`Additional ${index + 1}`} id="imagePreview" />
                ) : (
                  '+'
                )}
                <input type="file" accept="image/*" onChange={handleAdditionalImageChange(index)} id="fileInput" />
              </label>
            ))}
          </div>
        </div>

        <div id="rightSection">
          <input
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="nameInput"
          />
          <textarea
            placeholder="เนื้อหาโพส..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="descriptionTextarea"
          />
          <input
            type="number"
            placeholder="add amount of money"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            id="moneyInput"
          />
          <div id="center">
            <Link to='/login'>
              <button onClick={handlePost} id="postButton">Post</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;