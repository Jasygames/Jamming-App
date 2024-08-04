import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../TackList/Tracklist';

function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <Tracklist userSearchResults={props.playlistTracks} />
      <button className="Playlist-save">
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;