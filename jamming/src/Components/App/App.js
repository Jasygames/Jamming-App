import React, {useState} from 'react';
import styles from "./App.module.css";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const App = () => {
  const [searchResults, setSearchResults] = useState ([
    {
      name: "example track 1",
      artist: "example artist 1",
      album: "example album 1"
    },
    {
      name: "example track 2",
      artist: "example artist 2",
      album: "example album 2"
    }]
  );
const [playlistName, setPlaylistName] = useState("Example Playlist Name");
const [playlistTracks, setPlaylistName] = useState([

  {
    name: "Example Playlist Name 1",
    artist: "Example Playlist Artist 1",
    album: "Example Playlist Album 1",
    id: 11,
  },
  {
    name: "Example Playlist Name 2",
    artist: "Example Playlist Artist 2",
    album: "Example Playlist Album 2",
    id: 22,
  },
  {
    name: "Example Playlist Name 3",
    artist: "Example Playlist Artist 3",
    album: "Example Playlist Album 3",
    id: 33,
  },

]);


  return (
  <div>
    <h1>

    </h1>
      <div className={styles.App}>

        <div className={styles["App-playlist"]}>
          <SearchResults UserSearchResults={searchResults}/>
          <Playlist playlistName={playlistName} playlistTrack={playlistTracks}/>
        </div>
      </div>
  </div>
  );
}

export default App;