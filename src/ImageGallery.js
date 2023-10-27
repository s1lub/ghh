import React from 'react'
import './ImageGallery.css'

const ImageGallery = ({ fetchData }) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchData.map((date) => (
          <div className="image">
            <img 
              src="https://pixabay.com/get/g68cf453f4a02213273c6a4d22a4b169ceda3265239f70cc61a1da1e568b5901b5a3fb9887fad2bf2733cbd208bbd79e8a0c10f3583725580af4a5a0ac9cd5b92_640.jpg" 
              alt="" 
              />
          </div>
        ))}
      </div>
    </div>
  )
};

export default ImageGallery;
