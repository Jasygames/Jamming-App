import React, {useState} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
    const [search, setSearch] =useState("");

    const handleSearchChange = ((event) => setSearch(event.target.value),[]);

    const handleSearchButton = () => {
        props.onSearch(search)
    };

    return (
        <div className="searchBar">
            <input type="text" placeholder="Enter A Song, Album, or Artist" onChange={handleSearchChange}/>
            <button className="searchButton" onClick={handleSearchButton}>
                SEARCH
            </button>
        </div>
    )
}

export default SearchBar;