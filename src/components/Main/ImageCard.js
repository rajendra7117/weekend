import React from 'react'
import './ImageCard.css'
import Tippy from "@tippyjs/react";
const ImageCard = ({img, text, placement}) => {
  return (
    <Tippy placement={placement}
    content={
      <span className="tooltip">
        {text}
      </span>
    }
  >
    <div className='image-card'> 

        <img src={img}/>
    </div>
    </Tippy>
  )
}

export default ImageCard