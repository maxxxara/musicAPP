import React from 'react';

const Player = ({ link, id }) => {
  return(
      <audio controls autoPlay className="musicPlayer" key={id}>
        <source src={link} type="audio/mpeg" />
      </audio>
  )
};


export default Player;
