import React from 'react';
import '../css/song.css';

const Song = ({song, index}) => {
  return (
    <div className='song-div'>
      <div>
        <h2>{index + 1}</h2>
      </div>
      <div>
        <h4>{song.title.label}</h4>
        <h5>{song['im:artist'].label}</h5>
      </div>
    </div>
  )
};

export default Song;