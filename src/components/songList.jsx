import React from 'react';
import Song from './song';

const SongList = ({chart}) => {
  return chart.map((song, index) => {
    return <Song song={song} index={index}/>
  });
};

export default SongList;