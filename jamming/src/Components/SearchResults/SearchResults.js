import React from 'react';
import styles from './SearchResults.css';
import TrackList from "../TackList/Tracklist"

const SearchResults = (props) =>{

    return(
        <div className={styles.SearchResults}>
            <TrackList userSerachResults={props.userSerachResults}/>
        </div>

    );
};
export default SearchResults;