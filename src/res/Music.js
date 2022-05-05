import React from 'react';

const Music = ({ title, author, image, id, onClick, preview }) => {
  return(
    <div className="music__cont" onClick={() => {onClick(preview, id)}}>
      <div className="music__cont-image">
        <img src={image} />
      </div>
      <div className="music__cont-texts">
        <div>
          <p className="music__cont-title">{title}</p>
          <p className="music__cont-author">{author}</p>
        </div>
        <i data-feather="play"></i>
      </div>
    </div>
  )
};


export default Music;
