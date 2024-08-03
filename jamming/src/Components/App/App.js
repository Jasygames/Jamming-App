import React, {useState} from 'react';
import styles from "./App.css";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

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


  return (
  <div>
    <h1>

    </h1>
      <div className={styles.App}>
        {/* <!--Add a SearchBar compnent --> */}

        <div className={styles["App-playlist"]}>
        {/* <!--Add a SearchResults compnent --> */}
          <SearchResults UserSearchResults={searchResults}/>
        {/* <!--Add a Playlist compnent --> */}

        </div>
      </div>
  </div>
  );
}

export default App;