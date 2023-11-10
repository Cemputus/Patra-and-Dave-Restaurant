import React, { useEffect, useState } from 'react';
import './image.css';
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg'
import Appbar from './Appbar/Appbar';

const BackgroundImageChanger = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    image1, // Replace with your image file paths
    image2,
    image3,
    // Add more images as needed
  ];

  useEffect(() => {
    // Function to change the background image
    const changeBackgroundImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    // Set a timer to change the background image every 5 seconds (adjust the duration as needed)
    const timer = setInterval(changeBackgroundImage, 5000);

    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div
      className="imagecontainer" style={{ backgroundImage: `url(${images[currentImage]})` }}>
        <div className="text-overlay">
        <h1>Welcome to Patra And Dave Restaurant</h1>
        <p>We are looking forward to getting a positive response from you😊</p>
      </div>
      <Appbar />

    </div>
  );
};

export default BackgroundImageChanger;
